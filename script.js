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
});

