class FormulaManager {
    constructor(container) {
        this.formulaContainer = document.createElement('div');
        this.formulaContainer.className = 'formula-container';
        container.appendChild(this.formulaContainer);
        
        this.formulas = {
            "formulas": [
                {
                    "name": "底部四格",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,0,1,0,0]
                    ],
                    "solutions": [
                        {
                            "name": "上箭頭",
                            "pattern": [
                                [0,0,1,0,0],
                                [0,1,1,1,0],
                                [1,0,0,0,1],
                                [1,0,1,0,1],
                                [0,0,1,0,0]
                            ]
                        },
                        {
                            "name": "Happy Happy Happy 貓咪雙手向外",
                            "pattern": [
                                [0,1,0,1,0],
                                [1,1,0,1,1],
                                [0,1,0,1,0],
                                [0,0,0,0,0],
                                [0,1,0,1,0]
                            ]
                        },
                        {
                            "name": "Happy Happy Happy 貓咪雙手向內",
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
                    "name": "底部三格斜式",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,0,0,1,0]
                    ],
                    "solutions": [
                        {
                            "name": "左釣竿",
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
                    "name": "底部三格斜式(反)",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,1,0,0,1]
                    ],
                    "solutions": [
                        {
                            "name": "右釣竿",
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
                    "name": "底部雙點",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,0,1,0,1]
                    ],
                    "solutions": [
                        {
                            "name": "三橫線",
                            "pattern": [
                                [0,0,1,1,1],
                                [0,1,0,1,0],
                                [1,1,1,0,0],
                                [0,0,0,0,0],
                                [1,1,1,0,0]
                            ]
                        },
                        {
                            "name": "反向三橫線",
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
                    "name": "底部左三格",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,0,0,1,1]
                    ],
                    "solutions": [
                        {
                            "name": "左側圖形",
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
                    "name": "底部右三格",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,0,0,0]
                    ],
                    "solutions": [
                        {
                            "name": "右側圖形",
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
                    "name": "底部兩端",
                    "target": [
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [1,1,1,1,1],
                        [0,1,1,1,0]
                    ],
                    "solutions": [
                        {
                            "name": "右上斜線",
                            "pattern": [
                                [0,0,0,1,1],
                                [0,0,1,0,0],
                                [0,1,1,0,1],
                                [1,0,1,0,1],
                                [1,1,0,0,0]
                            ]
                        },
                        {
                            "name": "對稱圖形1",
                            "pattern": [
                                [0,1,1,0,1],
                                [1,0,0,0,1],
                                [1,0,1,1,0],
                                [0,0,0,0,0],
                                [1,0,1,1,0]
                            ]
                        },
                        {
                            "name": "左上斜線",
                            "pattern": [
                                [1,1,0,0,0],
                                [0,0,1,0,0],
                                [1,0,1,1,0],
                                [1,0,1,0,1],
                                [0,0,0,1,1]
                            ]
                        },
                        {
                            "name": "對稱圖形2",
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

        // 創建目標和解法的容器
        const contentContainer = document.createElement('div');
        contentContainer.className = 'formula-content';

        // 創建目標狀態
        const targetSection = document.createElement('div');
        targetSection.className = 'formula-target';
        targetSection.appendChild(this.createPatternGrid(formula.target, 'target'));

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
        contentContainer.appendChild(targetSection);
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
                cellDiv.className = cell ? (type === 'target' ? 'on' : 'click') : '';
                grid.appendChild(cellDiv);
            });
        });

        if (type === 'target') {
            grid.addEventListener('click', () => {
                if (window.gameInstance) {
                    // 使用目標狀態作為初始狀態
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