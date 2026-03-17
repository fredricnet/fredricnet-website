/**
 * Triangle Game of Life Animation — fredric.net fork
 * Forked from paitheme to ensure reliable triangle convergence.
 *
 * Changes from upstream:
 *  - Population monitoring: re-seeds when population drops too low
 *  - Earlier, gradual adaptation starting at generation 80 (was 150)
 *  - Direct target seeding every 8 generations once adaptation starts
 *  - Isolated target cells can survive (no neighbor requirement for seeding)
 *  - Stronger non-target suppression in late game
 */

(function() {
  'use strict';

  class TriangleGameOfLife {
    constructor(container, options = {}) {
      this.container = typeof container === 'string'
        ? document.getElementById(container)
        : container;

      if (!this.container) {
        console.error('TriangleGameOfLife: Container not found');
        return;
      }

      // Configuration
      this.width = parseInt(this.container.dataset.width) || options.width || 800;
      this.height = parseInt(this.container.dataset.height) || options.height || 600;
      this.triangleSize = options.triangleSize || 15;
      this.spacing = options.spacing || 15;
      this.cellSize = this.triangleSize + this.spacing;

      // Grid dimensions
      this.gridWidth = Math.floor(this.width / this.cellSize);
      this.gridHeight = Math.floor(this.height / this.cellSize);

      // Game state
      this.grid = [];
      this.nextGrid = [];
      this.generation = 0;
      this.animationId = null;
      this.isRunning = false;

      // Mouse interaction state
      this.isMouseOver = false;
      this.mouseSpawnInterval = null;
      this.lastMouseRow = -1;
      this.lastMouseCol = -1;
      this.mouseInteractionActive = false;
      this.generationsSinceMouseLeave = 0;
      this.mouseCooldownGenerations = 50;

      // Adaptive rules
      this.adaptationRate = options.adaptationRate || 0.015;
      this.targetBias = 0;
      this.savedTargetBias = 0;

      // Target triangle pattern — 15x15 inverted equilateral, centered
      this.targetSize = 15;
      this.targetCenterRow = Math.floor((this.gridHeight - this.targetSize) / 2) + 2;
      this.targetCenterCol = Math.floor(this.gridWidth / 2);

      // Population tracking
      this.populationHistory = [];
      this.minPopulation = Math.max(8, Math.floor(this.gridWidth * this.gridHeight * 0.02));

      this.init();
    }

    init() {
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.setAttribute('width', this.width);
      this.svg.setAttribute('height', this.height);
      this.svg.setAttribute('viewBox', `0 0 ${this.width} ${this.height}`);
      this.svg.style.display = 'block';
      this.svg.style.cursor = 'crosshair';

      const style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      style.textContent = `
        .triangle-cell {
          fill: white;
          stroke: white;
          stroke-width: 0.5;
          transition: fill 0.2s, stroke 0.2s, opacity 0.2s;
        }
        .triangle-cell.alive {
          fill: #7877c6;
          stroke: #7877c6;
        }
        .triangle-cell.dead {
          opacity: 0;
        }
      `;
      this.svg.appendChild(style);

      const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.id = 'triangle-grid';
      this.svg.appendChild(g);
      this.container.appendChild(this.svg);

      this.grid = Array(this.gridHeight).fill(null).map(() =>
        Array(this.gridWidth).fill(false)
      );
      this.nextGrid = Array(this.gridHeight).fill(null).map(() =>
        Array(this.gridWidth).fill(false)
      );

      this.createTriangles();
      this.randomSpawn();
      this.setupMouseInteraction();
      this.start();
    }

    // ---- Mouse interaction ----

    setupMouseInteraction() {
      this.svg.addEventListener('mousemove', (e) => this.handleMouseMove(e));
      this.svg.addEventListener('mouseleave', () => this.handleMouseLeave());
      this.svg.addEventListener('mouseenter', () => {
        this.isMouseOver = true;
        this.mouseInteractionActive = false;
      });
    }

    handleMouseMove(e) {
      if (!this.isRunning) return;
      this.mouseInteractionActive = true;

      const rect = this.svg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const col = Math.floor(x / this.cellSize);
      const row = Math.floor(y / this.cellSize);

      if (row !== this.lastMouseRow || col !== this.lastMouseCol) {
        this.lastMouseRow = row;
        this.lastMouseCol = col;
        this.spawnAtMouse(row, col);
      }
    }

    spawnAtMouse(row, col) {
      const spawnRadius = 2;
      for (let dr = -spawnRadius; dr <= spawnRadius; dr++) {
        for (let dc = -spawnRadius; dc <= spawnRadius; dc++) {
          const newRow = row + dr;
          const newCol = col + dc;
          if (newRow >= 0 && newRow < this.gridHeight &&
              newCol >= 0 && newCol < this.gridWidth) {
            const distance = Math.sqrt(dr * dr + dc * dc);
            const spawnChance = distance <= 1 ? 0.8 : (distance <= 1.5 ? 0.5 : 0.2);
            if (Math.random() < spawnChance) {
              this.grid[newRow][newCol] = true;
              this.updateCell(newRow, newCol, true);
            }
          }
        }
      }
    }

    handleMouseLeave() {
      this.isMouseOver = false;
      this.mouseInteractionActive = false;
      this.lastMouseRow = -1;
      this.lastMouseCol = -1;
    }

    // ---- Grid creation ----

    createTriangles() {
      const gridGroup = this.svg.querySelector('#triangle-grid');
      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          const x = col * this.cellSize;
          const y = row * this.cellSize;
          const triangle = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          triangle.id = `tri-${row}-${col}`;
          triangle.className.baseVal = 'triangle-cell dead';
          triangle.setAttribute('d', `M 0,0 L ${this.triangleSize},0 L ${this.triangleSize / 2},${this.triangleSize} Z`);
          triangle.setAttribute('transform', `translate(${x},${y})`);
          gridGroup.appendChild(triangle);
        }
      }
    }

    randomSpawn() {
      const numClusters = 15 + Math.floor(Math.random() * 10);
      for (let i = 0; i < numClusters; i++) {
        const centerRow = Math.floor(Math.random() * this.gridHeight);
        const centerCol = Math.floor(Math.random() * this.gridWidth);
        const clusterSize = 2 + Math.floor(Math.random() * 5);
        for (let r = 0; r < clusterSize; r++) {
          for (let c = 0; c <= r; c++) {
            const row = centerRow + r;
            const col = centerCol - Math.floor(r / 2) + c;
            if (row >= 0 && row < this.gridHeight &&
                col >= 0 && col < this.gridWidth &&
                Math.random() > 0.2) {
              this.grid[row][col] = true;
              this.updateCell(row, col, true);
            }
          }
        }
      }

      // Scatter individual cells
      const scatterCount = Math.floor(this.gridWidth * this.gridHeight * 0.12);
      for (let i = 0; i < scatterCount; i++) {
        const row = Math.floor(Math.random() * this.gridHeight);
        const col = Math.floor(Math.random() * this.gridWidth);
        if (!this.grid[row][col] && Math.random() > 0.5) {
          this.grid[row][col] = true;
          this.updateCell(row, col, true);
        }
      }
    }

    // ---- Target triangle ----

    isTargetCell(row, col) {
      // Inverted triangle: wide at top, point at bottom
      const rowOffset = row - this.targetCenterRow;
      const colOffset = col - this.targetCenterCol;

      if (rowOffset < 0 || rowOffset >= this.targetSize) return false;

      // Row 0: width = targetSize, Row n: width = targetSize - n
      const widthAtRow = this.targetSize - rowOffset;
      const maxOffset = Math.floor((widthAtRow - 1) / 2);

      return Math.abs(colOffset) <= maxOffset;
    }

    // ---- Game of Life logic ----

    countNeighbors(row, col) {
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (dr === 0 && dc === 0) continue;
          const nr = row + dr;
          const nc = col + dc;
          if (nr >= 0 && nr < this.gridHeight && nc >= 0 && nc < this.gridWidth) {
            if (this.grid[nr][nc]) count++;
          }
        }
      }
      return count;
    }

    countPopulation() {
      let count = 0;
      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          if (this.grid[row][col]) count++;
        }
      }
      return count;
    }

    shouldBeAlive(row, col, neighbors) {
      const isTarget = this.isTargetCell(row, col);
      const currentlyAlive = this.grid[row][col];

      const usePureConway = this.mouseInteractionActive ||
                           (this.generationsSinceMouseLeave < this.mouseCooldownGenerations);

      // Standard Conway rules
      if (currentlyAlive) {
        if (neighbors === 2 || neighbors === 3) {
          if (usePureConway) return true;
          if (isTarget) return true;
          // Non-target: increasingly likely to die as bias grows
          if (this.targetBias > 0.3) {
            return Math.random() > (this.targetBias * 0.55);
          }
          return true;
        }
      } else {
        if (neighbors === 3) {
          if (usePureConway) return true;
          if (isTarget) return true;
          if (this.targetBias > 0.3) {
            return Math.random() > (this.targetBias * 0.65);
          }
          return true;
        }
      }

      // Adaptive rules (only when not in pure Conway mode)
      if (!usePureConway && isTarget) {
        // Target cells: relaxed survival
        if (currentlyAlive && neighbors >= 1 && neighbors <= 4 && this.targetBias > 0.35) {
          return true;
        }
        // Target cells: relaxed birth
        if (!currentlyAlive && neighbors >= 1 && neighbors <= 4 && this.targetBias > 0.5) {
          return Math.random() < (this.targetBias * 0.4);
        }
      }

      // Non-target suppression in late game
      if (!usePureConway && !isTarget && currentlyAlive && this.targetBias > 0.6) {
        if (neighbors <= 1 || neighbors >= 4) {
          return false; // Die faster outside target
        }
      }

      return false;
    }

    updateCell(row, col, alive) {
      const cell = this.svg.querySelector(`#tri-${row}-${col}`);
      if (!cell) return;

      if (alive) {
        cell.classList.remove('dead');
        cell.classList.add('alive');
        cell.setAttribute('fill', '#7877c6');
        cell.setAttribute('stroke', '#7877c6');
        cell.setAttribute('opacity', '1');
      } else {
        cell.classList.remove('alive');
        cell.classList.add('dead');
        cell.setAttribute('opacity', '0');
      }
    }

    // ---- Simulation step ----

    step() {
      // Mouse interaction tracking
      if (this.mouseInteractionActive) {
        this.generationsSinceMouseLeave = 0;
      } else {
        this.generationsSinceMouseLeave++;
      }

      const usePureConway = this.mouseInteractionActive ||
                           (this.generationsSinceMouseLeave < this.mouseCooldownGenerations);

      const postCooldownPeriod = !usePureConway &&
                                 this.generationsSinceMouseLeave >= this.mouseCooldownGenerations &&
                                 this.generationsSinceMouseLeave < this.mouseCooldownGenerations + 60;

      // Increase adaptation bias
      if (!usePureConway) {
        const boostRate = postCooldownPeriod ? this.adaptationRate * 2.5 : this.adaptationRate;
        this.targetBias = Math.min(1, this.targetBias + boostRate);
      }

      this.generation++;

      // Population check — re-seed if dying out
      if (this.generation % 10 === 0) {
        const pop = this.countPopulation();
        if (pop < this.minPopulation) {
          this.reseed();
        }
      }

      // Start target seeding earlier (generation 80) and more frequently
      if (!usePureConway && this.generation > 80) {
        const spawnFrequency = postCooldownPeriod ? 4 : 8;
        if (this.generation % spawnFrequency === 0) {
          this.spawnInTargetArea();
        }
      }

      // Calculate next generation
      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          const neighbors = this.countNeighbors(row, col);
          this.nextGrid[row][col] = this.shouldBeAlive(row, col, neighbors);
        }
      }

      // Apply
      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          this.grid[row][col] = this.nextGrid[row][col];
          this.updateCell(row, col, this.grid[row][col]);
        }
      }
    }

    reseed() {
      // Inject a few small clusters to keep the simulation alive
      const clusters = 5 + Math.floor(Math.random() * 5);
      for (let i = 0; i < clusters; i++) {
        // Bias towards the target area center
        const biasToTarget = Math.random() < 0.6;
        let centerRow, centerCol;
        if (biasToTarget) {
          centerRow = this.targetCenterRow + Math.floor(Math.random() * this.targetSize);
          centerCol = this.targetCenterCol + Math.floor(Math.random() * 10) - 5;
        } else {
          centerRow = Math.floor(Math.random() * this.gridHeight);
          centerCol = Math.floor(Math.random() * this.gridWidth);
        }

        // Small glider-like pattern
        const patterns = [
          [[0,0],[0,1],[0,2],[1,0],[2,1]],       // glider
          [[0,0],[0,1],[1,0],[1,1]],               // block (still life)
          [[0,0],[0,1],[0,2]],                     // blinker
          [[0,0],[1,1],[2,0],[2,1],[2,2]],         // r-pentomino
        ];
        const pattern = patterns[Math.floor(Math.random() * patterns.length)];
        for (const [dr, dc] of pattern) {
          const r = centerRow + dr;
          const c = centerCol + dc;
          if (r >= 0 && r < this.gridHeight && c >= 0 && c < this.gridWidth) {
            this.grid[r][c] = true;
            this.updateCell(r, c, true);
          }
        }
      }
    }

    spawnInTargetArea() {
      const postCooldownPeriod = !this.mouseInteractionActive &&
                                 this.generationsSinceMouseLeave >= this.mouseCooldownGenerations &&
                                 this.generationsSinceMouseLeave < this.mouseCooldownGenerations + 60;

      const baseChance = Math.min(0.35, this.targetBias * 0.45);
      const spawnChance = postCooldownPeriod ? Math.min(0.55, baseChance * 1.5) : baseChance;

      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          if (this.isTargetCell(row, col) && !this.grid[row][col]) {
            if (Math.random() < spawnChance) {
              this.grid[row][col] = true;
              this.updateCell(row, col, true);
            }
          }
        }
      }
    }

    // ---- Animation control ----

    animate() {
      if (!this.isRunning) return;
      this.step();
      this.animationId = setTimeout(() => this.animate(), 100);
    }

    start() {
      if (this.isRunning) return;
      this.isRunning = true;
      this.animate();
    }

    stop() {
      this.isRunning = false;
      if (this.animationId) {
        clearTimeout(this.animationId);
        this.animationId = null;
      }
    }

    reset() {
      this.stop();
      this.generation = 0;
      this.targetBias = 0;

      for (let row = 0; row < this.gridHeight; row++) {
        for (let col = 0; col < this.gridWidth; col++) {
          this.grid[row][col] = false;
          this.updateCell(row, col, false);
        }
      }

      this.randomSpawn();
      this.start();
    }
  }

  // Auto-initialize
  function initAll() {
    const containers = document.querySelectorAll('[id^="triangle-gol"], .triangle-game-of-life');
    containers.forEach(container => {
      if (!container.dataset.initialized) {
        container.dataset.initialized = 'true';
        new TriangleGameOfLife(container);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAll);
  } else {
    initAll();
  }

  if (typeof window !== 'undefined') {
    window.TriangleGameOfLife = TriangleGameOfLife;
  }

})();
