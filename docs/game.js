class LightsupGame {
    constructor() {
        this.grid = [];
        this.moves = 0;
        this.startTime = 0;
        this.timerInterval = 0;
        this.isGameStarted = false;

        this.gridElement = document.getElementById('grid');
        this.movesElement = document.getElementById('moves');
        this.timeElement = document.getElementById('time');
        this.startButton = document.getElementById('startButton');

        this.initializeGrid();
        this.setupEventListeners();
    }

    initializeGrid() {
        // 初始化 5x5 網格
        for (let i = 0; i < 5; i++) {
            this.grid[i] = [];
            for (let j = 0; j < 5; j++) {
                this.grid[i][j] = false;
            }
        }
    }

    setupEventListeners() {
        this.startButton.addEventListener('click', () => this.startGame());
    }

    startGame() {
        // 重置遊戲狀態
        this.moves = 0;
        this.movesElement.textContent = '0';
        this.isGameStarted = true;
        this.clearGrid();
        this.randomizeGrid();
        this.renderGrid();
        
        // 重置計時器
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
        }
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => this.updateTimer(), 1000);
    }

    clearGrid() {
        this.gridElement.innerHTML = '';
        this.initializeGrid();
    }

    randomizeGrid() {
        // 隨機點擊一些按鈕來產生初始狀態
        const clicks = Math.floor(Math.random() * 8) + 5; // 5-12次隨機點擊
        let remainingClicks = clicks;
        let remainingCells = 25; // 5x5 網格共25格

        // 依序走訪每個格子
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                // 計算當前格子需要被點擊的機率
                // 機率 = 剩餘需要點擊的次數 / 剩餘未決定的格子數
                const probability = remainingClicks / remainingCells;
                
                // 根據機率決定是否點擊
                if (Math.random() < probability) {
                    this.toggleLights(i, j, false);
                    remainingClicks--;
                }
                
                remainingCells--;
            }
        }

        // 如果還有剩餘的點擊次數，隨機補足
        while (remainingClicks > 0) {
            const row = Math.floor(Math.random() * 5);
            const col = Math.floor(Math.random() * 5);
            this.toggleLights(row, col, false);
            remainingClicks--;
        }
    }

    renderGrid() {
        this.gridElement.innerHTML = '';
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                const button = document.createElement('button');
                button.className = `grid-button ${this.grid[i][j] ? 'on' : ''}`;
                button.dataset.row = i.toString();
                button.dataset.col = j.toString();
                button.addEventListener('click', (e) => this.handleButtonClick(e));
                this.gridElement.appendChild(button);
            }
        }
    }

    handleButtonClick(e) {
        if (!this.isGameStarted) return;

        const button = e.target;
        const row = parseInt(button.dataset.row);
        const col = parseInt(button.dataset.col);

        this.toggleLights(row, col, true);
        this.moves++;
        this.movesElement.textContent = this.moves.toString();
        this.checkWin();
    }

    toggleLights(row, col, updateUI) {
        // 切換當前按鈕
        this.grid[row][col] = !this.grid[row][col];

        // 切換相鄰按鈕
        if (row > 0) this.grid[row-1][col] = !this.grid[row-1][col];
        if (row < 4) this.grid[row+1][col] = !this.grid[row+1][col];
        if (col > 0) this.grid[row][col-1] = !this.grid[row][col-1];
        if (col < 4) this.grid[row][col+1] = !this.grid[row][col+1];

        if (updateUI) {
            this.renderGrid();
        }
    }

    checkWin() {
        const hasWon = this.grid.every(row => row.every(cell => cell));
        if (hasWon) {
            clearInterval(this.timerInterval);
            setTimeout(() => {
                alert(`恭喜獲勝！\n步數：${this.moves}\n時間：${this.timeElement.textContent}`);
                this.isGameStarted = false;
            }, 100);
        }
    }

    updateTimer() {
        const seconds = Math.floor((Date.now() - this.startTime) / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        this.timeElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

// 當 DOM 載入完成後初始化遊戲
document.addEventListener('DOMContentLoaded', () => {
    new LightsupGame();
}); 