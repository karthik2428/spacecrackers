const videoSelect = document.getElementById('video-select');
const playButton = document.getElementById('play-button');
const videoContainer = document.getElementById('video-container');

videoSelect.addEventListener('change', (e) => {
  const selectedVideo = e.target.value;
  // Store the selected video ID in a variable
  localStorage.setItem('selectedVideo', selectedVideo);
});

playButton.addEventListener('click', () => {
  const selectedVideo = localStorage.getItem('selectedVideo');
  if (selectedVideo) {
    const youtubeUrl = `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`;
    const iframe = document.createElement('iframe');
    iframe.src = youtubeUrl;
    iframe.frameBorder = '0';
    iframe.allowFullScreen = true;
    iframe.width = '640';
    iframe.height = '360';
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);
  } else {
    alert('Please select a video first!');
  }
});