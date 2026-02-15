// 深色模式切换
function toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
    document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// 等待 DOM 加载完成后初始化脚本
document.addEventListener('DOMContentLoaded', function() {
    // 初始化深色模式
    const darkMode = localStorage.getItem('darkMode') === 'enabled';
    if (darkMode) document.body.classList.add('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.querySelectorAll('.mode-icon').forEach(el => el.textContent = isDark ? '☀️' : '🌙');
    document.querySelectorAll('.mode-text').forEach(el => el.textContent = isDark ? '浅色模式' : '深色模式');

    // 滚动时添加阴影
    window.addEventListener('scroll', () => {
        const headerBar = document.querySelector('.header-bar');
        if (window.scrollY > 0) {
            headerBar.classList.add('scrolled');
        } else {
            headerBar.classList.remove('scrolled');
        }
    });

    // 更新日志弹窗功能
    const overlay = document.getElementById('changelog-overlay');
    const overlayContent = document.querySelector('.overlay-content');
    const openButton = document.getElementById('open-changelog');

    if (openButton) {
        openButton.addEventListener('click', () => {
            if (!overlay) return;
            overlay.classList.add('active');
            overlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overlay-open');
        });
    }

    if (overlay) {
        overlay.addEventListener('click', e => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                overlay.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('overlay-open');
            }
        });
    }
    if (overlayContent) {
        overlayContent.addEventListener('click', e => e.stopPropagation());
    }

    // 异常积蓄阈值弹窗功能
    const thresholdOverlay = document.getElementById('threshold-overlay');
    const thresholdContent = thresholdOverlay ? thresholdOverlay.querySelector('.overlay-content') : null;
    const openThresholdBtn = document.getElementById('open-threshold-btn');
    const closeThresholdBtn = document.getElementById('close-threshold-btn');

    if (openThresholdBtn) {
        openThresholdBtn.addEventListener('click', () => {
            if (!thresholdOverlay) return;
            thresholdOverlay.classList.add('active');
            thresholdOverlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overlay-open');
        });
    }

    if (closeThresholdBtn) {
        closeThresholdBtn.addEventListener('click', () => {
            if (!thresholdOverlay) return;
            thresholdOverlay.classList.remove('active');
            thresholdOverlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overlay-open');
        });
    }

    if (thresholdOverlay) {
        thresholdOverlay.addEventListener('click', e => {
            if (e.target === thresholdOverlay) {
                thresholdOverlay.classList.remove('active');
                thresholdOverlay.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('overlay-open');
            }
        });
    }
    if (thresholdContent) {
        thresholdContent.addEventListener('click', e => e.stopPropagation());
    }

    // 异放倍率弹窗功能
    const yifangOverlay = document.getElementById('yifang-overlay');
    const yifangContent = yifangOverlay ? yifangOverlay.querySelector('.overlay-content') : null;
    const openYifangBtn = document.getElementById('open-yifang-btn');
    const closeYifangBtn = document.getElementById('close-yifang-btn');

    if (openYifangBtn) {
        openYifangBtn.addEventListener('click', () => {
            if (!yifangOverlay) return;
            yifangOverlay.classList.add('active');
            yifangOverlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overlay-open');
        });
    }

    if (closeYifangBtn) {
        closeYifangBtn.addEventListener('click', () => {
            if (!yifangOverlay) return;
            yifangOverlay.classList.remove('active');
            yifangOverlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overlay-open');
        });
    }

    if (yifangOverlay) {
        yifangOverlay.addEventListener('click', e => {
            if (e.target === yifangOverlay) {
                yifangOverlay.classList.remove('active');
                yifangOverlay.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('overlay-open');
            }
        });
    }
    if (yifangContent) {
        yifangContent.addEventListener('click', e => e.stopPropagation());
    }

    // 异常倍率表弹窗功能
    const abnormalOverlay = document.getElementById('abnormal-overlay');
    const abnormalContent = abnormalOverlay ? abnormalOverlay.querySelector('.overlay-content') : null;
    const openAbnormalBtn = document.getElementById('open-abnormal-btn');
    const closeAbnormalBtn = document.getElementById('close-abnormal-btn');

    if (openAbnormalBtn) {
        openAbnormalBtn.addEventListener('click', () => {
            if (!abnormalOverlay) return;
            abnormalOverlay.classList.add('active');
            abnormalOverlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overlay-open');
        });
    }

    if (closeAbnormalBtn) {
        closeAbnormalBtn.addEventListener('click', () => {
            if (!abnormalOverlay) return;
            abnormalOverlay.classList.remove('active');
            abnormalOverlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overlay-open');
        });
    }

    if (abnormalOverlay) {
        abnormalOverlay.addEventListener('click', e => {
            if (e.target === abnormalOverlay) {
                abnormalOverlay.classList.remove('active');
                abnormalOverlay.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('overlay-open');
            }
        });
    }
    if (abnormalContent) {
        abnormalContent.addEventListener('click', e => e.stopPropagation());
    }

    // 毕业计算器弹窗功能
    const gradCalcOverlay = document.getElementById('grad-calc-overlay');
    const gradCalcContent = gradCalcOverlay ? gradCalcOverlay.querySelector('.overlay-content') : null;
    const openGradCalcBtn = document.getElementById('open-grad-calc');
    const closeGradCalcBtn = document.getElementById('close-grad-calc-btn');

    if (openGradCalcBtn) {
        openGradCalcBtn.addEventListener('click', () => {
            if (!gradCalcOverlay) return;
            gradCalcOverlay.classList.add('active');
            gradCalcOverlay.setAttribute('aria-hidden', 'false');
            document.body.classList.add('overlay-open');
        });
    }

    if (closeGradCalcBtn) {
        closeGradCalcBtn.addEventListener('click', () => {
            if (!gradCalcOverlay) return;
            gradCalcOverlay.classList.remove('active');
            gradCalcOverlay.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('overlay-open');
        });
    }

    if (gradCalcOverlay) {
        gradCalcOverlay.addEventListener('click', e => {
            if (e.target === gradCalcOverlay) {
                gradCalcOverlay.classList.remove('active');
                gradCalcOverlay.setAttribute('aria-hidden', 'true');
                document.body.classList.remove('overlay-open');
            }
        });
    }
    if (gradCalcContent) {
        gradCalcContent.addEventListener('click', e => e.stopPropagation());
    }

    // 毕业计算器核心逻辑
    initGraduationCalculator();
});

// 毕业计算器初始化函数
function initGraduationCalculator() {
    let allCalculationResults = null;

    const STAT_TYPES = ["hpPercent", "atkPercent", "crit", "hpFlat", "atkFlat"];
    const SUBSTAT_VALUE = {
        hpPercent: 0.03,
        atkPercent: 0.03,
        crit: 0.024,
        hpFlat: 112,
        atkFlat: 19
    };
    const MAIN_VALUES = {
        slot1HpFlat: 2200,
        slot2AtkFlat: 316,
        slot4HpPercent: 0.3,
        slot4AtkPercent: 0.3,
        slot4Crit: 0.24,
        slot5HpPercent: 0.3,
        slot5AtkPercent: 0.3,
        slot6HpPercent: 0.3,
        slot6AtkPercent: 0.3
    };
    const SET_VALUES = {
        hp10: 0.1,
        atk10: 0.1,
        crit8: 0.08,
        other: 0
    };
    const STAT_LABELS = {
        hpPercent: "大生命值",
        atkPercent: "大攻击力",
        crit: "暴击率",
        hpFlat: "小生命值",
        atkFlat: "小攻击力",
        defFlat: "防御力"
    };
    const MAIN_LABELS = {
        hpPercent: "30%生命值",
        atkPercent: "30%攻击力",
        crit: "24%暴击率",
        other: "其他"
    };
    const SET_LABELS = {
        hp10: "10%生命值",
        atk10: "10%攻击力",
        crit8: "8%暴击率",
        other: "其他"
    };

    function toggleBlocks() {
        document.getElementById("hp-block").classList.toggle("hidden", !document.getElementById("choose-hp").checked);
        document.getElementById("atk-block").classList.toggle("hidden", !document.getElementById("choose-atk").checked);
        document.getElementById("crit-block").classList.toggle("hidden", !document.getElementById("choose-crit").checked);
    }

    function parseInput() {
        const chooseHp = document.getElementById("choose-hp").checked;
        const chooseAtk = document.getElementById("choose-atk").checked;
        const chooseCrit = document.getElementById("choose-crit").checked;
        const weaponBonus = Number(document.getElementById("weapon-tier").value || 0);
        return {
            agent: document.getElementById("agent-name").value.trim(),
            chooseHp,
            chooseAtk,
            chooseCrit,
            baseHp: Number(document.getElementById("hp-base").value || 0),
            targetHp: Number(document.getElementById("hp-target").value || 0),
            passiveHp: Number(document.getElementById("hp-passive").value || 0) / 100,
            baseAtk: Number(document.getElementById("atk-base").value || 0) + weaponBonus,
            targetAtk: Number(document.getElementById("atk-target").value || 0),
            passiveAtk: Number(document.getElementById("atk-passive").value || 0) / 100,
            baseCrit: Number(document.getElementById("crit-base").value || 0) / 100,
            targetCrit: Number(document.getElementById("crit-target").value || 0) / 100,
            passiveCrit: Number(document.getElementById("crit-passive").value || 0) / 100
        };
    }

    function buildSetPairs() {
        const pool = ["hp10", "atk10", "crit8", "other"];
        const results = [];
        for (let i = 0; i < pool.length; i++) {
            for (let j = i + 1; j < pool.length; j++) {
                results.push([pool[i], pool[j]]);
            }
        }
        results.push(["atk10", "atk10"]);
        return results;
    }

    function buildMainCombos() {
        const slot4 = ["hpPercent", "atkPercent", "crit", "other"];
        const slot5 = ["hpPercent", "atkPercent", "other"];
        const slot6 = ["hpPercent", "atkPercent", "other"];
        const combos = [];
        slot4.forEach(s4 => {
            slot5.forEach(s5 => {
                slot6.forEach(s6 => {
                    combos.push({ slot4: s4, slot5: s5, slot6: s6 });
                });
            });
        });
        return combos;
    }

    function getAllowedSubstats(mainType, slotIndex) {
        const allowed = new Set(STAT_TYPES);
        if (slotIndex === 1) allowed.delete("hpFlat");
        if (slotIndex === 2) allowed.delete("atkFlat");
        if (mainType === "hpPercent") allowed.delete("hpPercent");
        if (mainType === "atkPercent") allowed.delete("atkPercent");
        if (mainType === "crit") allowed.delete("crit");
        return Array.from(allowed);
    }

    function computeBaseline(build, input, setPair) {
        let hpPercent = input.passiveHp;
        let atkPercent = input.passiveAtk;
        let critBonus = input.passiveCrit;

        if (setPair) {
            hpPercent += SET_VALUES[setPair[0]] * (setPair[0] === "hp10" ? 1 : 0);
            hpPercent += SET_VALUES[setPair[1]] * (setPair[1] === "hp10" ? 1 : 0);
            atkPercent += SET_VALUES[setPair[0]] * (setPair[0] === "atk10" ? 1 : 0);
            atkPercent += SET_VALUES[setPair[1]] * (setPair[1] === "atk10" ? 1 : 0);
            critBonus += SET_VALUES[setPair[0]] * (setPair[0] === "crit8" ? 1 : 0);
            critBonus += SET_VALUES[setPair[1]] * (setPair[1] === "crit8" ? 1 : 0);
        }

        if (build.slot4 === "hpPercent") hpPercent += MAIN_VALUES.slot4HpPercent;
        if (build.slot4 === "atkPercent") atkPercent += MAIN_VALUES.slot4AtkPercent;
        if (build.slot4 === "crit") critBonus += MAIN_VALUES.slot4Crit;
        if (build.slot5 === "hpPercent") hpPercent += MAIN_VALUES.slot5HpPercent;
        if (build.slot5 === "atkPercent") atkPercent += MAIN_VALUES.slot5AtkPercent;
        if (build.slot6 === "hpPercent") hpPercent += MAIN_VALUES.slot6HpPercent;
        if (build.slot6 === "atkPercent") atkPercent += MAIN_VALUES.slot6AtkPercent;

        const hpFlat = MAIN_VALUES.slot1HpFlat;
        const atkFlat = MAIN_VALUES.slot2AtkFlat;

        const baseHpTotal = input.baseHp * (1 + hpPercent) + hpFlat;
        const baseAtkTotal = input.baseAtk * (1 + atkPercent) + atkFlat;
        const baseCritTotal = input.baseCrit + critBonus;

        return {
            hpPercent,
            atkPercent,
            critBonus,
            baseHpTotal,
            baseAtkTotal,
            baseCritTotal,
            hpFlat,
            atkFlat
        };
    }

    function createComboArray(baseValue, delta, percentValue, flatValue) {
        const combos = [];
        let bigCount = 0;
        while (true) {
            const remain = delta - bigCount * baseValue * percentValue;
            if (remain <= 0) {
                combos.push({ big: bigCount, small: 0, total: bigCount });
                break;
            }
            const smallCount = Math.ceil(remain / flatValue);
            combos.push({ big: bigCount, small: smallCount, total: bigCount + smallCount });
            bigCount++;
            if (bigCount > 50) break;
        }
        return combos;
    }

    function distributeUpgrades(disks, statType, totalUpgrades, upgradesPerDisk) {
        const availableDisks = disks.filter(d => d.lines[statType]);
        if (availableDisks.length === 0) return true;
        if (totalUpgrades === 0) return true;

        for (let i = 0; i < totalUpgrades; i++) {
            let minDisk = null;
            let minTotal = Infinity;

            for (const disk of availableDisks) {
                const totalDiskUpgrades = Object.values(disk.upgrades).reduce((a, b) => a + (b || 0), 0);
                if (totalDiskUpgrades < upgradesPerDisk && totalDiskUpgrades < minTotal) {
                    minTotal = totalDiskUpgrades;
                    minDisk = disk;
                }
            }

            if (!minDisk) {
                return false;
            }

            if (!minDisk.upgrades[statType]) {
                minDisk.upgrades[statType] = 0;
            }
            minDisk.upgrades[statType]++;
        }

        return true;
    }

    function calculateDiskProbWithWeights(disk, upgradesPerDisk) {
        const substats = [];
        const required = [];

        for (const stat of Object.keys(disk.lines)) {
            substats.push(stat);
            required.push(disk.upgrades[stat] || 0);
        }

        while (substats.length < 4) {
            substats.push(`other${substats.length}`);
            required.push(0);
        }

        const memo = new Map();

        function dfs(step, counts, weights) {
            if (step === upgradesPerDisk) {
                for (let i = 0; i < 4; i++) {
                    if (counts[i] < required[i]) return 0;
                }
                return 1;
            }

            const key = `${step},${counts.join(',')},${weights.map(w => w.toFixed(6)).join(',')}`;
            if (memo.has(key)) return memo.get(key);

            const totalWeight = weights.reduce((a, b) => a + b, 0);
            let prob = 0;

            for (let i = 0; i < 4; i++) {
                const p = weights[i] / totalWeight;
                const newCounts = [...counts];
                newCounts[i]++;
                const newWeights = [...weights];
                newWeights[i] *= 0.8;
                prob += p * dfs(step + 1, newCounts, newWeights);
            }

            memo.set(key, prob);
            return prob;
        }

        const initialWeights = [25, 25, 25, 25];
        return dfs(0, [0, 0, 0, 0], initialWeights);
    }

    function allocateBuild(build, input, setPair, upgradesPerDisk) {
        const baseline = computeBaseline(build, input, setPair);

        const baseDisks = [
            { slot: 1, main: "hpFlat" },
            { slot: 2, main: "atkFlat" },
            { slot: 3, main: "defFlat" },
            { slot: 4, main: build.slot4 },
            { slot: 5, main: build.slot5 },
            { slot: 6, main: build.slot6 }
        ].map(disk => ({
            ...disk,
            allowed: getAllowedSubstats(disk.main, disk.slot),
            lines: {},
            upgrades: {}
        }));

        const baselineStats = [];
        if (input.chooseHp) {
            baselineStats.push("hpPercent", "hpFlat");
        }
        if (input.chooseAtk) {
            baselineStats.push("atkPercent", "atkFlat");
        }
        if (input.chooseCrit) {
            baselineStats.push("crit");
        }

        for (const stat of baselineStats) {
            for (const disk of baseDisks) {
                if (disk.allowed.includes(stat)) {
                    disk.lines[stat] = 1;
                }
            }
        }

        const hpDelta = input.targetHp - baseline.baseHpTotal;
        const atkDelta = input.targetAtk - baseline.baseAtkTotal;
        const critDelta = input.targetCrit - baseline.baseCritTotal;

        const hpCombos = (input.chooseHp && hpDelta > 0)
            ? createComboArray(input.baseHp, hpDelta, SUBSTAT_VALUE.hpPercent, SUBSTAT_VALUE.hpFlat)
            : [{ big: 0, small: 0, total: 0 }];

        const atkCombos = (input.chooseAtk && atkDelta > 0)
            ? createComboArray(input.baseAtk, atkDelta, SUBSTAT_VALUE.atkPercent, SUBSTAT_VALUE.atkFlat)
            : [{ big: 0, small: 0, total: 0 }];

        const critUpgrades = (input.chooseCrit && critDelta > 0)
            ? Math.ceil(critDelta / SUBSTAT_VALUE.crit)
            : 0;

        let bestResult = null;
        const allResults = [];

        for (const hpCombo of hpCombos) {
            for (const atkCombo of atkCombos) {
                const totalUpgrades = hpCombo.total + atkCombo.total + critUpgrades;
                if (totalUpgrades > upgradesPerDisk * 6) continue;

                const disks = JSON.parse(JSON.stringify(baseDisks));

                let allocationSuccess = true;
                if (hpCombo.big > 0 && !distributeUpgrades(disks, 'hpPercent', hpCombo.big, upgradesPerDisk)) allocationSuccess = false;
                if (allocationSuccess && hpCombo.small > 0 && !distributeUpgrades(disks, 'hpFlat', hpCombo.small, upgradesPerDisk)) allocationSuccess = false;
                if (allocationSuccess && atkCombo.big > 0 && !distributeUpgrades(disks, 'atkPercent', atkCombo.big, upgradesPerDisk)) allocationSuccess = false;
                if (allocationSuccess && atkCombo.small > 0 && !distributeUpgrades(disks, 'atkFlat', atkCombo.small, upgradesPerDisk)) allocationSuccess = false;
                if (allocationSuccess && critUpgrades > 0 && !distributeUpgrades(disks, 'crit', critUpgrades, upgradesPerDisk)) allocationSuccess = false;
                
                if (!allocationSuccess) continue;

                const diskResults = disks.map(disk => {
                    const substats = Object.keys(disk.lines);
                    while (substats.length < 4) {
                        substats.push(`other${substats.length}`);
                    }
                    const constraints = substats.map(stat => disk.upgrades[stat] || 0);
                    const prob = calculateDiskProbWithWeights(disk, upgradesPerDisk);
                    return { ...disk, substats, constraints, prob };
                });

                const sumProb = diskResults.reduce((acc, disk) => {
                    let coef;
                    if ([1, 2, 3].includes(disk.slot)) {
                        coef = 30 / 103;
                    } else if ([4, 6].includes(disk.slot)) {
                        coef = 5 / 103;
                    } else if (disk.slot === 5) {
                        coef = 3 / 103;
                    } else {
                        coef = 1 / 6;
                    }
                    return acc + disk.prob * coef;
                }, 0);

                const result = {
                    diskResults,
                    sumProb,
                    needed: {
                        hpPercent: hpCombo.big,
                        hpFlat: hpCombo.small,
                        atkPercent: atkCombo.big,
                        atkFlat: atkCombo.small,
                        crit: critUpgrades
                    },
                    baseline
                };

                allResults.push(result);

                if (!bestResult || sumProb > bestResult.sumProb) {
                    bestResult = result;
                }
            }
        }

        return { bestResult, allResults };
    }

    function buildFromSelectors() {
        return {
            slot4: document.getElementById("slot4-main").value,
            slot5: document.getElementById("slot5-main").value,
            slot6: document.getElementById("slot6-main").value
        };
    }

    function setSelectors(build, setPair) {
        document.getElementById("slot4-main").value = build.slot4;
        document.getElementById("slot5-main").value = build.slot5;
        document.getElementById("slot6-main").value = build.slot6;
        document.getElementById("set-1").value = setPair[0];
        document.getElementById("set-2").value = setPair[1];
    }

    function formatResult(input, build, setPair, result, upgradesPerDisk) {
        const agentText = input.agent ? `<div>代理人：${input.agent}</div>` : "";
        const baseInfo = `
            <div>主词条：4号(${MAIN_LABELS[build.slot4]}) 5号(${MAIN_LABELS[build.slot5]}) 6号(${MAIN_LABELS[build.slot6]})</div>
            <div>套装：${SET_LABELS[setPair[0]]} + ${SET_LABELS[setPair[1]]}</div>
            <div>每盘副词条提升次数：${upgradesPerDisk}</div>
        `;

        const needed = result.needed;
        const needLines = [];
        if (input.chooseHp) {
            needLines.push(`生命值副词条：大生命值 ${needed.hpPercent || 0} 次，小生命值 ${needed.hpFlat || 0} 次`);
        }
        if (input.chooseAtk) {
            needLines.push(`攻击力副词条：大攻击力 ${needed.atkPercent || 0} 次，小攻击力 ${needed.atkFlat || 0} 次`);
        }
        if (input.chooseCrit) {
            needLines.push(`暴击率副词条：${needed.crit || 0} 次`);
        }
        const needHtml = needLines.length ? `<div>需求汇总：${needLines.join("；")}</div>` : "";
        const sumPercent = (result.sumProb * 100).toFixed(4);
        const summaryHtml = [
            agentText,
            baseInfo,
            needHtml,
            `<div>概率总和：${sumPercent}%</div>`
        ].join("");

        const diskHtml = result.diskResults.map(disk => {
            const percentText = (disk.prob * 100).toFixed(4);
            const subLines = disk.substats.map((s, idx) => {
                const statName = s.startsWith("other") ? "其他" : (STAT_LABELS[s] || s);
                const need = disk.constraints[idx] || 0;
                return `<div class="grad-sub-line">${statName}：+${need}</div>`;
            }).join("");
            return `
                <div class="grad-disk-card">
                    <h4>盘${disk.slot}</h4>
                    ${subLines}
                    <div class="grad-disk-meta">命中概率：${percentText}%</div>
                </div>
            `;
        }).join("");

        return { summaryHtml, diskHtml };
    }

    function calculate(autoMode) {
        const input = parseInput();
        const resultBox = document.getElementById("result");
        const diskBox = document.getElementById("disk-results");
        const exportBtn = document.getElementById("export-btn");
        const mainCombos = buildMainCombos();
        const setPairs = buildSetPairs();

        const forcedBuild = buildFromSelectors();
        const forcedSet = [document.getElementById("set-1").value, document.getElementById("set-2").value];

        let best = null;
        const allCombinations = [];

        function tryBuild(build, setPair) {
            if (build.slot4 === "auto" || build.slot5 === "auto" || build.slot6 === "auto") {
                return;
            }
            if (setPair.includes("auto")) return;
            const result4 = allocateBuild(build, input, setPair, 4);
            const result5 = allocateBuild(build, input, setPair, 5);
            
            if (result4 && result4.bestResult) {
                result4.allResults.forEach(r => {
                    allCombinations.push({
                        build,
                        setPair,
                        upgrades: 4,
                        ...r
                    });
                });
                if (!best || result4.bestResult.sumProb > best.res.sumProb) {
                    best = { build, setPair, res: result4.bestResult, upgrades: 4 };
                }
            }
            
            if (result5 && result5.bestResult) {
                result5.allResults.forEach(r => {
                    allCombinations.push({
                        build,
                        setPair,
                        upgrades: 5,
                        ...r
                    });
                });
                if (!best || result5.bestResult.sumProb > best.res.sumProb) {
                    best = { build, setPair, res: result5.bestResult, upgrades: 5 };
                }
            }
        }

        if (autoMode) {
            mainCombos.forEach(build => {
                setPairs.forEach(setPair => tryBuild(build, setPair));
            });
        } else {
            const build = {
                slot4: forcedBuild.slot4 === "auto" ? "other" : forcedBuild.slot4,
                slot5: forcedBuild.slot5 === "auto" ? "other" : forcedBuild.slot5,
                slot6: forcedBuild.slot6 === "auto" ? "other" : forcedBuild.slot6
            };
            const setPair = [
                forcedSet[0] === "auto" ? "other" : forcedSet[0],
                forcedSet[1] === "auto" ? "other" : forcedSet[1]
            ];
            tryBuild(build, setPair);
        }

        allCalculationResults = {
            input,
            allCombinations,
            best
        };

        if (!best) {
            resultBox.textContent = "当前配装无法毕业";
            diskBox.innerHTML = "";
            exportBtn.style.display = "none";
            return;
        }

        exportBtn.style.display = "inline-block";

        setSelectors(best.build, best.setPair);
        const formatted = formatResult(input, best.build, best.setPair, best.res, best.upgrades);
        resultBox.innerHTML = formatted.summaryHtml;
        diskBox.innerHTML = formatted.diskHtml;
    }

    function exportAllCombinations() {
        if (!allCalculationResults) {
            alert("请先进行计算！");
            return;
        }

        const { input, allCombinations, best } = allCalculationResults;
        
        const sortedCombos = [...allCombinations].sort((a, b) => b.sumProb - a.sumProb);
        
        let output = "=".repeat(80) + "\n";
        output += "毕业计算器 - 所有组合导出\n";
        output += "=".repeat(80) + "\n\n";
        
        if (input.agent) {
            output += `代理人：${input.agent}\n`;
        }
        output += `生命值：${input.baseHp} → ${input.targetHp}\n`;
        output += `攻击力：${input.baseAtk} → ${input.targetAtk}\n`;
        output += `暴击率：${(input.baseCrit * 100).toFixed(1)}% → ${(input.targetCrit * 100).toFixed(1)}%\n`;
        output += `\n总组合数：${sortedCombos.length}\n`;
        output += `最优组合概率：${(best.res.sumProb * 100).toFixed(4)}%\n`;
        output += "\n" + "=".repeat(80) + "\n\n";
        
        sortedCombos.forEach((combo, index) => {
            output += `【组合 ${index + 1}】`;
            if (combo === sortedCombos[0] && combo.sumProb === best.res.sumProb) {
                output += " ★ 最优方案";
            }
            output += "\n";
            output += "-".repeat(80) + "\n";
            
            output += `主词条：4号(${MAIN_LABELS[combo.build.slot4]}) 5号(${MAIN_LABELS[combo.build.slot5]}) 6号(${MAIN_LABELS[combo.build.slot6]})\n`;
            output += `套装：${SET_LABELS[combo.setPair[0]]} + ${SET_LABELS[combo.setPair[1]]}\n`;
            output += `每盘副词条提升次数：${combo.upgrades}\n`;
            
            const needed = combo.needed;
            const needLines = [];
            if (input.chooseHp) {
                needLines.push(`生命值(大${needed.hpPercent}次, 小${needed.hpFlat}次)`);
            }
            if (input.chooseAtk) {
                needLines.push(`攻击力(大${needed.atkPercent}次, 小${needed.atkFlat}次)`);
            }
            if (input.chooseCrit) {
                needLines.push(`暴击率(${needed.crit}次)`);
            }
            output += `需求：${needLines.join(", ")}\n`;
            output += `总概率：${(combo.sumProb * 100).toFixed(4)}%\n\n`;
            
            combo.diskResults.forEach(disk => {
                const diskProb = (disk.prob * 100).toFixed(4);
                output += `  盘${disk.slot}：`;
                
                const subDetails = disk.substats.map((stat, idx) => {
                    const statName = stat.startsWith("other") ? "其他" : (STAT_LABELS[stat] || stat);
                    const upgrades = disk.constraints[idx] || 0;
                    return `${statName}+${upgrades}`;
                });
                
                output += subDetails.join(", ");
                output += ` [概率: ${diskProb}%]\n`;
            });
            
            output += "\n";
        });
        
        output += "=".repeat(80) + "\n";
        output += "导出完成\n";
        
        const blob = new Blob([output], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        a.download = `毕业计算_${input.agent || '导出'}_${timestamp}.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }

    document.getElementById("choose-hp").addEventListener("change", toggleBlocks);
    document.getElementById("choose-atk").addEventListener("change", toggleBlocks);
    document.getElementById("choose-crit").addEventListener("change", toggleBlocks);
    document.getElementById("auto-calc").addEventListener("click", () => calculate(true));
    document.getElementById("manual-calc").addEventListener("click", () => calculate(false));
    document.getElementById("export-btn").addEventListener("click", exportAllCombinations);
    toggleBlocks();
}
