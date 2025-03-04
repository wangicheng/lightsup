class FormulaManager {
    constructor() {
        this.formulaContainer = document.getElementById('formulaContainer');
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
        targetSection.innerHTML = this.createPatternGrid(formula.target, 'target');

        // 創建解法區域
        const solutionsSection = document.createElement('div');
        solutionsSection.className = 'formula-solutions';
        solutionsSection.innerHTML = `
            <div class="solutions-grid">
                ${formula.solutions.map(solution => `
                    <div class="solution-item">
                        ${this.createPatternGrid(solution.pattern, 'solution')}
                    </div>
                `).join('')}
            </div>
        `;

        contentContainer.appendChild(targetSection);
        contentContainer.appendChild(solutionsSection);
        formulaItem.appendChild(contentContainer);

        return formulaItem;
    }

    createPatternGrid(pattern, type) {
        const cells = pattern.flat().map(cell => 
            `<div class="${cell ? (type === 'target' ? 'on' : 'click') : ''}"></div>`
        ).join('');

        return `<div class="pattern-grid">${cells}</div>`;
    }
}

// 當 DOM 載入完成後初始化公式管理器
document.addEventListener('DOMContentLoaded', () => {
    new FormulaManager();
}); 