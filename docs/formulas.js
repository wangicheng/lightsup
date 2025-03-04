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
        
        // 為每個解法創建元素
        formula.solutions.forEach(solution => {
            const solutionItem = document.createElement('div');
            solutionItem.className = 'solution-item';
            solutionItem.appendChild(this.createPatternGrid(solution.pattern, 'solution'));
            solutionsGrid.appendChild(solutionItem);
        });

        solutionsSection.appendChild(solutionsGrid);
        contentContainer.appendChild(patternSection);
        contentContainer.appendChild(solutionsSection);
        formulaItem.appendChild(contentContainer);

        return formulaItem;
    }

    createPatternGrid(pattern, type) {
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
                    // 使用該模式開始遊戲
                    window.gameInstance.startGame(pattern);
                }
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