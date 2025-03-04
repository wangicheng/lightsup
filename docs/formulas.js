class FormulaManager {
    constructor(container) {
        this.formulaContainer = document.createElement('div');
        this.formulaContainer.className = 'formula-container';
        container.appendChild(this.formulaContainer);
        
        // 定義分類配置
        this.categories = [
            { id: 'oneRow', label: '一排未完成', isDefault: true },
            { id: 'twoRows', label: '兩排未完成' },
        ];
        
        // 創建分類標籤和容器
        this.createCategoryUI();
        
        // 將公式數據分類
        this.formulas = {
            oneRow: {
                formulas: [
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
            },
            twoRows: {
                formulas: [
                    {
                        "pattern": [
                            [1,1,1,1,1],
                            [1,1,1,1,1],
                            [1,1,1,1,1],
                            [0,0,0,0,0],
                            [0,0,0,0,0]
                        ],
                        "solutions": [
                            {
                                "pattern": [
                                    [1,0,1,1,0],
                                    [1,0,0,0,1],
                                    [0,1,1,0,1],
                                    [0,0,0,0,0],
                                    [1,0,0,1,0]
                                ]
                            },
                            {
                                "pattern": [
                                    [0,1,1,0,1],
                                    [1,0,0,0,1],
                                    [1,0,1,1,0],
                                    [0,0,0,0,0],
                                    [0,1,0,0,1]
                                ]
                            }
                        ]
                    }
                ]
            }
        };

        // 渲染所有分類的公式
        this.categories.forEach(category => {
            const formulas = this.formulas[category.id]?.formulas || [];
            this.renderFormulas(formulas, this.categoryContainers[category.id]);
        });
    }

    createCategoryUI() {
        // 創建標籤容器
        const tabsContainer = document.createElement('div');
        tabsContainer.className = 'formula-tabs';
        
        // 用於存儲分類容器的引用
        this.categoryContainers = {};
        
        // 為每個分類創建標籤和容器
        this.categories.forEach(category => {
            // 創建標籤
            const tab = document.createElement('button');
            tab.className = `formula-tab${category.isDefault ? ' active' : ''}`;
            tab.textContent = category.label;
            tab.dataset.type = category.id;
            tabsContainer.appendChild(tab);
            
            // 創建對應的容器
            const container = document.createElement('div');
            container.className = `formula-group${category.isDefault ? ' active' : ''}`;
            container.dataset.type = category.id;
            this.formulaContainer.appendChild(container);
            
            // 保存容器引用
            this.categoryContainers[category.id] = container;
        });
        
        // 添加標籤切換事件
        tabsContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('formula-tab')) {
                // 更新標籤狀態
                tabsContainer.querySelectorAll('.formula-tab').forEach(tab => {
                    tab.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // 更新容器顯示
                Object.values(this.categoryContainers).forEach(container => {
                    container.classList.remove('active');
                    if (container.dataset.type === e.target.dataset.type) {
                        container.classList.add('active');
                    }
                });
            }
        });
        
        // 將標籤容器添加到主容器
        this.formulaContainer.parentElement.insertBefore(tabsContainer, this.formulaContainer);
    }

    renderFormulas(formulas, container) {
        formulas.forEach(formula => {
            const formulaElement = this.createFormulaElement(formula);
            container.appendChild(formulaElement);
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