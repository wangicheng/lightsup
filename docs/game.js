class LightsupGame {
    constructor() {
        this.grid = [];
        this.moves = 0;
        this.startTime = 0;
        this.timerInterval = 0;
        this.isGameStarted = false;
        this.isPracticeMode = false;  // 新增練習模式標記

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

    startGame(initialPattern = null) {
        // 重置遊戲狀態
        this.moves = 0;
        this.movesElement.textContent = '0';
        this.isGameStarted = true;
        this.clearGrid();
        
        if (initialPattern) {
            // 練習模式：使用提供的初始狀態
            this.isPracticeMode = true;
            this.grid = initialPattern.map(row => [...row]);
        } else {
            // 正常模式：隨機生成初始狀態
            this.isPracticeMode = false;
            this.randomizeGrid();
        }
        
        // 保存初始狀態
        this.initialState = this.grid.map(row => [...row]);
        
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
            const timeSpent = (Date.now() - this.startTime) / 1000;
            
            if (!this.isPracticeMode) {
                // 只在非練習模式時更新統計數據
                this.gameStats.gamesCompleted++;
                
                if (!this.gameStats.bestTime || timeSpent < this.gameStats.bestTime) {
                    this.gameStats.bestTime = timeSpent;
                }
                
                this.gameStats.history.push({
                    initialState: this.initialState,
                    time: timeSpent,
                    moves: this.moves
                });
                
                if (this.gameStats.history.length > 20) {
                    this.gameStats.history = this.gameStats.history.slice(-20);
                }
                
                this.saveGameStats();
            }
            
            setTimeout(() => {
                alert(`${this.isPracticeMode ? '練習完成' : '恭喜獲勝'}！\n步數：${this.moves}\n時間：${this.timeElement.textContent}`);
                this.isGameStarted = false;
                
                if (!this.isPracticeMode) {
                    // 只在非練習模式時更新記錄面板
                    const recordContent = document.getElementById('recordContent');
                    if (recordContent) {
                        window.updateRecordPanel(recordContent, this.gameStats);
                    }
                }
            }, 100);
        }
    }

    updateTimer() {
        const elapsedTime = (Date.now() - this.startTime) / 1000;
        const minutes = Math.floor(elapsedTime / 60);
        const seconds = Math.floor(elapsedTime % 60);
        this.timeElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // 加載遊戲統計數據
    loadGameStats() {
        const defaultStats = {
            bestTime: null,
            gamesCompleted: 0,
            history: []
        };
        
        const savedStats = localStorage.getItem('lightsupStats');
        if (!savedStats) return defaultStats;
        
        // 處理舊版本的歷史記錄
        const stats = JSON.parse(savedStats);
        if (stats.history) {
            stats.history = stats.history.filter(record => record.initialState);
        }
        return stats;
    }
    
    // 保存遊戲統計數據
    saveGameStats() {
        localStorage.setItem('lightsupStats', JSON.stringify(this.gameStats));
    }
}

// 導出全局遊戲實例
let gameInstance = null;
document.addEventListener('DOMContentLoaded', () => {
    gameInstance = new LightsupGame();
    window.gameInstance = gameInstance;  // 使其可以從其他檔案訪問
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