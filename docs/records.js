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
    
    // 顯示完成次數
    const gamesCompletedDiv = document.createElement('div');
    gamesCompletedDiv.className = 'record-item';
    gamesCompletedDiv.innerHTML = `
        <h3>遊戲完成次數</h3>
        <p>${stats.gamesCompleted} 次</p>
    `;
    
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
        
        // 創建初始狀態網格（作為懸浮顯示內容）
        const gridDiv = document.createElement('div');
        gridDiv.className = 'mini-pattern-grid';
        
        // 生成小型網格
        if (record.initialState) {
            record.initialState.forEach(row => {
                row.forEach(cell => {
                    const cellDiv = document.createElement('div');
                    cellDiv.className = cell ? 'on' : '';
                    gridDiv.appendChild(cellDiv);
                });
            });
        }
        
        historyItem.appendChild(infoDiv);
        historyItem.appendChild(gridDiv);
        historyList.appendChild(historyItem);
    });
    
    historyDiv.appendChild(historyList);
    
    recordList.appendChild(bestTimeDiv);
    recordList.appendChild(gamesCompletedDiv);
    recordList.appendChild(historyDiv);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
} 