const toggle = document.getElementById('theme-toggle');
const icon   = document.getElementById('theme-icon');
const html   = document.documentElement;

const saved = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', saved);
icon.textContent = saved === 'dark' ? '☀️' : '🌙';

toggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme');
  const next    = current === 'dark' ? 'light' : 'dark';

  html.setAttribute('data-theme', next);
  icon.textContent = next === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', next);
});

