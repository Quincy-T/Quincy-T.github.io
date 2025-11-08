// Check for saved theme preference or default to dark mode
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'dark') {
  document.body.classList.add('dark-mode');
}

// Add a light/dark mode toggle
const toggle = document.createElement('button');
toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
toggle.style.zIndex = '1000';
document.body.appendChild(toggle);

toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', currentTheme);
  
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
};

// Photo collage functionality
const playPauseBtn = document.getElementById('playPauseBtn');
const photoRows = document.querySelectorAll('.photo-row');

if (playPauseBtn && photoRows.length > 0) {
  let isPlaying = true;
  
  // Duplicate images in each row for seamless loop
  photoRows.forEach(row => {
    const images = row.innerHTML;
    row.innerHTML = images + images;
  });
  
  playPauseBtn.onclick = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      photoRows.forEach(row => row.classList.remove('paused'));
      playPauseBtn.textContent = '⏸️'; // Pause icon
    } else {
      photoRows.forEach(row => row.classList.add('paused'));
      playPauseBtn.textContent = '▶️'; // Play icon
    }
  };
}
