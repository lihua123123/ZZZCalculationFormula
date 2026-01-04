const body = document.body;
const header = document.getElementById('header');
const modeBtn = document.getElementById('toggle-mode');
const modeText = modeBtn.querySelector('.mode-text');
const modeIcon = modeBtn.querySelector('.mode-icon');
const overlayModeBtn = document.getElementById('toggle-mode-overlay');
const overlayModeText = overlayModeBtn?.querySelector('.mode-text');
const overlayModeIcon = overlayModeBtn?.querySelector('.mode-icon');
const overlay = document.getElementById('changelog-overlay');
const openLog = document.getElementById('open-changelog');
let isDark = false;

function setDarkMode(state) {
    isDark = state;
    body.classList.toggle('dark-mode', isDark);
    const label = isDark ? '浅色模式' : '深色模式';
    const icon = isDark ? '☀️' : '🌙';
    modeText.textContent = label;
    modeIcon.textContent = icon;
    if (overlayModeText && overlayModeIcon) {
        overlayModeText.textContent = label;
        overlayModeIcon.textContent = icon;
    }
    try { localStorage.setItem('zzz-theme', isDark ? 'dark' : 'light'); } catch (_) { /* ignore */ }
}

function loadTheme() {
    try { isDark = localStorage.getItem('zzz-theme') === 'dark'; } catch (_) { isDark = false; }
    setDarkMode(isDark);
}

function toggleOverlay(show) {
    overlay.classList.toggle('active', show);
    body.classList.toggle('freeze-scroll', show);
}

function handleScroll() {
    header.classList.toggle('sticky-shadow', window.scrollY > 12);
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme();
    modeBtn.addEventListener('click', () => setDarkMode(!isDark));
    if (overlayModeBtn) overlayModeBtn.addEventListener('click', () => setDarkMode(!isDark));
    openLog.addEventListener('click', () => toggleOverlay(true));
    overlay.addEventListener('click', () => toggleOverlay(false));
    overlay.querySelector('.overlay-content').addEventListener('click', e => e.stopPropagation());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') toggleOverlay(false); });
    window.addEventListener('scroll', handleScroll, { passive: true });
});
