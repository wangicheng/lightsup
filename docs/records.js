// 新增成績紀錄面板
window.createRecordPanel = function(container) {
    const recordTitle = document.createElement('h2');
    recordTitle.textContent = '成績紀錄';
    
    const recordList = document.createElement('div');
    recordList.className = 'record-list';
    
    container.appendChild(recordTitle);
    container.appendChild(recordList);
    
    // 從 localStorage 加載數據並顯示
    const stats = JSON.parse(localStorage.getItem('lightsupStats')) || {
        bestTime: null,
        gamesCompleted: 0,
        history: []
    };
    
    updateRecordPanel(container, stats);
}

// 更新成績記錄面板
window.updateRecordPanel = function(container, stats) {
    const recordList = container.querySelector('.record-list');
    recordList.innerHTML = '';
    
    // 顯示最佳時間
    const bestTimeDiv = document.createElement('div');
    bestTimeDiv.className = 'record-item';
    bestTimeDiv.innerHTML = `
        <h3>最佳時間</h3>
        <p>${stats.bestTime ? formatTime(stats.bestTime) : '尚無記錄'}</p>
    `;
    
    // 創建包含遊戲完成次數和平均時間的容器
    const statsRow = document.createElement('div');
    statsRow.className = 'stats-row';
    
    // 顯示完成次數
    const gamesCompletedDiv = document.createElement('div');
    gamesCompletedDiv.className = 'record-item';
    gamesCompletedDiv.innerHTML = `
        <h3>遊戲完成次數</h3>
        <p>${stats.gamesCompleted} 次</p>
    `;

    // 顯示平均時間
    const averageTimeDiv = document.createElement('div');
    averageTimeDiv.className = 'record-item';
    
    // 計算平均時間
    const averageTime = stats.history.length > 0
        ? stats.history.reduce((sum, record) => sum + record.time, 0) / stats.history.length
        : null;
    
    averageTimeDiv.innerHTML = `
        <h3>平均時間</h3>
        <p>${averageTime ? formatTime(averageTime) : '尚無記錄'}</p>
    `;
    
    // 將兩個統計資訊加入 statsRow
    statsRow.appendChild(gamesCompletedDiv);
    statsRow.appendChild(averageTimeDiv);
    
    // 顯示歷史記錄
    const historyDiv = document.createElement('div');
    historyDiv.className = 'record-item';
    historyDiv.innerHTML = '<h3>最近記錄</h3>';
    
    const historyList = document.createElement('div');
    historyList.className = 'history-list';
    
    stats.history.slice().reverse().forEach(record => {
        const historyItem = document.createElement('div');
        historyItem.className = 'history-item';
        
        // 添加時間和步數信息
        const infoDiv = document.createElement('div');
        infoDiv.className = 'history-info';
        infoDiv.innerHTML = `
            <span class="time">時間: ${formatTime(record.time)}</span>
            <span class="moves">步數: ${record.moves}</span>
        `;
        
        // 創建初始狀態網格
        const gridDiv = document.createElement('div');
        gridDiv.className = 'mini-pattern-grid';
        
        if (record.initialState) {
            record.initialState.forEach(row => {
                row.forEach(cell => {
                    const cellDiv = document.createElement('div');
                    cellDiv.className = cell ? 'on' : '';
                    gridDiv.appendChild(cellDiv);
                });
            });
        }

        // 添加點擊事件來開始練習
        historyItem.addEventListener('click', () => {
            if (window.gameInstance && record.initialState) {
                window.gameInstance.startGame(record.initialState);
            }
        });
        
        // 添加滑鼠事件來控制 mini-pattern-grid 的位置
        historyItem.addEventListener('mouseenter', (e) => {
            const rect = historyItem.getBoundingClientRect();
            gridDiv.style.left = `${rect.left + rect.width / 2}px`;
            gridDiv.style.top = `${rect.top - 85}px`; // 在項目上方顯示
        });
        
        historyItem.appendChild(infoDiv);
        historyItem.appendChild(gridDiv);
        historyList.appendChild(historyItem);
    });
    
    historyDiv.appendChild(historyList);
    
    recordList.appendChild(bestTimeDiv);
    recordList.appendChild(statsRow);
    recordList.appendChild(historyDiv);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const milliseconds = Math.floor((seconds % 1) * 1000);
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
} 