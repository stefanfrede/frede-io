import 'alpinejs';

function showTestimonial() {
  const t = document.querySelectorAll('.js-reviews > .h-review');
  const n = t[Math.floor(Math.random() * t.length)];

  n.classList.remove('hidden');
}

function run() {
  showTestimonial();
}

if (document.readyState !== 'loading') {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run);
}

// Check that service workers are supported
if ('serviceWorker' in navigator) {
  // use the window load event to keep the page load performant
  window.addEventListener('load', () => {
    try {
      navigator.serviceWorker.register('/sw.js');
    } catch (error) {
      console.error('Service worker registration failed: ', error);
    }
  });
}
