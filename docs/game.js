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

        // 初始化遊戲統計數據
        this.gameStats = this.loadGameStats();
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
            const timeSpent = Math.floor((Date.now() - this.startTime) / 1000);
            
            // 更新統計數據
            this.gameStats.gamesCompleted++;
            
            // 更新最佳時間
            if (!this.gameStats.bestTime || timeSpent < this.gameStats.bestTime) {
                this.gameStats.bestTime = timeSpent;
            }
            
            // 添加歷史記錄
            this.gameStats.history.push({
                date: new Date().toISOString(),
                time: timeSpent,
                moves: this.moves
            });
            
            // 只保留最近的20條記錄
            if (this.gameStats.history.length > 20) {
                this.gameStats.history = this.gameStats.history.slice(-20);
            }
            
            // 保存數據
            this.saveGameStats();
            
            setTimeout(() => {
                alert(`恭喜獲勝！\n步數：${this.moves}\n時間：${this.timeElement.textContent}`);
                this.isGameStarted = false;
                
                // 更新成績記錄顯示
                const recordContent = document.getElementById('recordContent');
                if (recordContent) {
                    window.updateRecordPanel(recordContent, this.gameStats);
                }
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

    // 加載遊戲統計數據
    loadGameStats() {
        const defaultStats = {
            bestTime: null,
            gamesCompleted: 0,
            history: []
        };
        
        const savedStats = localStorage.getItem('lightsupStats');
        return savedStats ? JSON.parse(savedStats) : defaultStats;
    }
    
    // 保存遊戲統計數據
    saveGameStats() {
        localStorage.setItem('lightsupStats', JSON.stringify(this.gameStats));
    }
}

// 當 DOM 載入完成後初始化遊戲
document.addEventListener('DOMContentLoaded', () => {
    new LightsupGame();
});

window.createRightPanel = function() {
    const rightPanel = document.createElement('div');
    rightPanel.id = 'rightPanel';
    rightPanel.className = 'formula-section';
    
    // 添加頁面切換按鈕
    const tabButtons = document.createElement('div');
    tabButtons.className = 'tab-buttons';
    
    const formulaButton = document.createElement('button');
    formulaButton.textContent = '解法圖鑑';
    formulaButton.className = 'tab-button active';
    
    const recordButton = document.createElement('button');
    recordButton.textContent = '成績紀錄';
    recordButton.className = 'tab-button';
    
    tabButtons.appendChild(formulaButton);
    tabButtons.appendChild(recordButton);
    
    // 創建內容容器
    const formulaContent = document.createElement('div');
    formulaContent.id = 'formulaContent';
    formulaContent.className = 'tab-content active';
    
    const recordContent = document.createElement('div');
    recordContent.id = 'recordContent';
    recordContent.className = 'tab-content';
    
    // 將原本的公式內容移到 formulaContent 中
    if (typeof createFormulaPanel === 'function') {
        createFormulaPanel(formulaContent);
    } else {
        console.error('createFormulaPanel is not defined');
    }
    
    // 添加成績紀錄內容
    if (typeof createRecordPanel === 'function') {
        createRecordPanel(recordContent);
    } else {
        console.error('createRecordPanel is not defined');
    }
    
    rightPanel.appendChild(tabButtons);
    rightPanel.appendChild(formulaContent);
    rightPanel.appendChild(recordContent);
    
    // 添加切換事件
    formulaButton.addEventListener('click', () => {
        formulaButton.className = 'tab-button active';
        recordButton.className = 'tab-button';
        formulaContent.className = 'tab-content active';
        recordContent.className = 'tab-content';
    });
    
    recordButton.addEventListener('click', () => {
        formulaButton.className = 'tab-button';
        recordButton.className = 'tab-button active';
        formulaContent.className = 'tab-content';
        recordContent.className = 'tab-content active';
    });
    
    return rightPanel;
} 