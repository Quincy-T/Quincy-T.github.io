// Enable dark mode by default
document.body.classList.add('dark-mode');

// Add a light/dark mode toggle
const toggle = document.createElement('button');
toggle.textContent = '☀️ Light Mode';
toggle.style.position = 'fixed';
toggle.style.bottom = '20px';
toggle.style.right = '20px';
toggle.style.zIndex = '1000';
document.body.appendChild(toggle);

toggle.onclick = () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    toggle.textContent = '☀️ Light Mode';
  } else {
    toggle.textContent = '🌙 Dark Mode';
  }
};

// Photo collage functionality
const playPauseBtn = document.getElementById('playPauseBtn');
const photoCollage = document.querySelector('.photo-collage');

if (playPauseBtn && photoCollage) {
  let isPlaying = true;
  
  // Duplicate images for seamless loop
  const images = photoCollage.innerHTML;
  photoCollage.innerHTML = images + images;
  
  playPauseBtn.onclick = () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
      photoCollage.classList.remove('paused');
      playPauseBtn.textContent = '⏸️'; // Pause icon
    } else {
      photoCollage.classList.add('paused');
      playPauseBtn.textContent = '▶️'; // Play icon
    }
  };
}
