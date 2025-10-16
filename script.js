// Add a light/dark mode toggle
const toggle = document.createElement('button');
toggle.textContent = '🌙 Dark Mode';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
document.body.appendChild(toggle);

toggle.onclick = () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    document.body.style.background = '#1e1e1e';
    document.body.style.color = 'white';
    toggle.textContent = '☀️ Light Mode';
  } else {
    document.body.style.background = '#f8f9fa';
    document.body.style.color = '#333';
    toggle.textContent = '🌙 Dark Mode';
  }
};
