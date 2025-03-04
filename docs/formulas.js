class FormulaManager {
    constructor(container) {
        this.formulaContainer = document.createElement('div');
        this.formulaContainer.className = 'formula-container';
        container.appendChild(this.formulaContainer);
        
        this.formulas = {
            "formulas": [
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,0,1,0,0]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,0,1,0,0],
                                [0,1,1,1,0],
                                [1,0,0,0,1],
                                [1,0,1,0,1],
                                [0,0,1,0,0]
                            ]
                        },
                        {
                            "pattern": [
                                [0,1,0,1,0],
                                [1,1,0,1,1],
                                [0,1,0,1,0],
                                [0,0,0,0,0],
                                [0,1,0,1,0]
                            ]
                        },
                        {
                            "pattern": [
                                [1,0,0,0,1],
                                [1,1,0,1,1],
                                [1,0,0,0,1],
                                [0,0,0,0,0],
                                [1,0,0,0,1]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,0,0,1,0]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [1,0,0,0,0],
                                [1,1,0,0,0],
                                [1,0,1,0,0],
                                [0,1,1,1,0],
                                [0,0,0,0,1]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,1,0,0,1]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,0,0,0,1],
                                [0,0,0,1,1],
                                [0,0,1,0,1],
                                [0,1,1,1,0],
                                [1,0,0,0,0]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,0,1,0,1]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,0,1,1,1],
                                [0,1,0,1,0],
                                [1,1,1,0,0],
                                [0,0,0,0,0],
                                [1,1,1,0,0]
                            ]
                        },
                        {
                            "pattern": [
                                [1,1,1,0,0],
                                [0,1,0,1,0],
                                [0,0,1,1,1],
                                [0,0,0,0,0],
                                [0,0,1,1,1]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,0,0,1,1]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,1,0,0,0],
                                [1,1,1,0,0],
                                [0,0,0,1,0],
                                [1,1,0,1,1],
                                [0,0,0,1,0]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,0,0,0]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,0,0,1,0],
                                [0,0,1,1,1],
                                [0,1,0,0,0],
                                [1,1,0,1,1],
                                [0,1,0,0,0]
                            ]
                        }
                    ]
                },
                {
                    "pattern": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,1,1,1,0]
                    ],
                    "solutions": [
                        {
                            "pattern": [
                                [0,0,0,1,1],
                                [0,0,1,0,0],
                                [0,1,1,0,1],
                                [1,0,1,0,1],
                                [1,1,0,0,0]
                            ]
                        },
                        {
                            "pattern": [
                                [0,1,1,0,1],
                                [1,0,0,0,1],
                                [1,0,1,1,0],
                                [0,0,0,0,0],
                                [1,0,1,1,0]
                            ]
                        },
                        {
                            "pattern": [
                                [1,1,0,0,0],
                                [0,0,1,0,0],
                                [1,0,1,1,0],
                                [1,0,1,0,1],
                                [0,0,0,1,1]
                            ]
                        },
                        {
                            "pattern": [
                                [1,0,1,1,0],
                                [1,0,0,0,1],
                                [0,1,1,0,1],
                                [0,0,0,0,0],
                                [0,1,1,0,1]
                            ]
                        }
                    ]
                }
            ]
        };
        this.renderFormulas(this.formulas.formulas);
    }

    renderFormulas(formulas) {
        formulas.forEach(formula => {
            const formulaElement = this.createFormulaElement(formula);
            this.formulaContainer.appendChild(formulaElement);
        });
    }

    createFormulaElement(formula) {
        const formulaItem = document.createElement('div');
        formulaItem.className = 'formula-item';

        // 創建初始狀態和解法的容器
        const contentContainer = document.createElement('div');
        contentContainer.className = 'formula-content';

        // 創建模式區域
        const patternSection = document.createElement('div');
        patternSection.className = 'formula-pattern';
        patternSection.appendChild(this.createPatternGrid(formula.pattern, 'pattern'));

        // 創建解法區域
        const solutionsSection = document.createElement('div');
        solutionsSection.className = 'formula-solutions';
        
        const solutionsGrid = document.createElement('div');
        solutionsGrid.className = 'solutions-grid';
        
        // 只顯示第一個解法，但保存所有解法
        const solutionItem = document.createElement('div');
        solutionItem.className = 'solution-item';
        solutionItem.dataset.currentIndex = '0'; // 追踪當前顯示的解法索引
        solutionItem.dataset.totalSolutions = formula.solutions.length.toString(); // 保存總解法數
        solutionItem.appendChild(this.createPatternGrid(formula.solutions[0].pattern, 'solution', formula.solutions));

        solutionsGrid.appendChild(solutionItem);
        solutionsSection.appendChild(solutionsGrid);
        contentContainer.appendChild(patternSection);
        contentContainer.appendChild(solutionsSection);
        formulaItem.appendChild(contentContainer);

        return formulaItem;
    }

    createPatternGrid(pattern, type, solutions = null) {
        const grid = document.createElement('div');
        grid.className = 'pattern-grid';
        
        pattern.forEach((row, i) => {
            row.forEach((cell, j) => {
                const cellDiv = document.createElement('div');
                cellDiv.className = cell ? (type === 'pattern' ? 'on' : 'click') : '';
                grid.appendChild(cellDiv);
            });
        });

        if (type === 'pattern') {
            grid.addEventListener('click', () => {
                if (window.gameInstance) {
                    window.gameInstance.startGame(pattern);
                }
            });
            grid.style.cursor = 'pointer';
        } else if (type === 'solution' && solutions) {
            // 為解法grid添加點擊事件
            grid.addEventListener('click', () => {
                const solutionItem = grid.closest('.solution-item');
                let currentIndex = parseInt(solutionItem.dataset.currentIndex);
                const totalSolutions = parseInt(solutionItem.dataset.totalSolutions);
                
                // 計算下一個解法的索引
                currentIndex = (currentIndex + 1) % totalSolutions;
                solutionItem.dataset.currentIndex = currentIndex.toString();
                
                // 更新顯示的解法
                grid.innerHTML = ''; // 清空現有的格子
                solutions[currentIndex].pattern.forEach((row) => {
                    row.forEach((cell) => {
                        const cellDiv = document.createElement('div');
                        cellDiv.className = cell ? 'click' : '';
                        grid.appendChild(cellDiv);
                    });
                });
            });
            grid.style.cursor = 'pointer';
        }

        return grid;
    }
}

// 將函數導出為全局函數
window.createFormulaPanel = function(container) {
    // 添加標題
    const title = document.createElement('h2');
    title.textContent = '解法圖鑑';
    container.appendChild(title);
    
    // 創建並初始化 FormulaManager
    new FormulaManager(container);
} 