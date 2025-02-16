document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission (if it exists)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you for contacting Ingenious Tutorial! We will get back to you soon.');
    });
  }

  // Dynamic Color Splash Animation
  const background = document.querySelector('.color-splash-background');

  function createColorSplash() {
    const splash = document.createElement('div');
    splash.classList.add('color-splash');

    // Randomize color and position
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#f9ff33'];
    splash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    splash.style.top = `${Math.random() * 100}%`;
    splash.style.left = `${Math.random() * 100}%`;

    // Add to background
    background.appendChild(splash);

    // Remove splash after animation ends
    setTimeout(() => {
      splash.remove();
    }, 5000);
  }

  // Create splashes every 500ms
  setInterval(createColorSplash, 500);

  // Panda Jump Effect
  const panda = document.getElementById('panda');

  if (panda) {
    panda.addEventListener('click', () => {
      panda.classList.add('jump');
      setTimeout(() => panda.classList.remove('jump'), 500);
    });

    panda.addEventListener('touchstart', () => {
      panda.classList.add('jump');
      setTimeout(() => panda.classList.remove('jump'), 500);
    });
  }
});
