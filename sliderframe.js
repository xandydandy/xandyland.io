const panel = document.getElementById('panel');
const overlay = document.getElementById('overlay');
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const frame = document.getElementById('panel-frame');

function openPanel() {
    if (!frame.src) frame.src = frame.dataset.src;   // lazy-load
    panel.classList.add('open');
    overlay.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
    openBtn.setAttribute('aria-expanded', 'true');
    closeBtn.focus();
}

function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    openBtn.setAttribute('aria-expanded', 'false');
    openBtn.focus();
}

openBtn.addEventListener('click', openPanel);
closeBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);
document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && panel.classList.contains('open')) closePanel();
});