document.addEventListener('DOMContentLoaded', function() {
  var percentage = document.getElementById('percentage');
  var progressIn = document.getElementById('progress-in');
  var progress = 0;

  function updateProgress() {
    if (progress < 100) {
      progress += 1;
      progressIn.style.width = progress + '%';
      percentage.textContent = 'Downloading ' + progress + '%';
      setTimeout(updateProgress, 100); // Adjust the speed here
    } else {
      percentage.textContent = 'Download Complete!';
      document.querySelector('p').textContent = 'Thank you for your patience.';
    }
  }

  updateProgress();
});
