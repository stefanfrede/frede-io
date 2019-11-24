function obfuscateEmail() {
  /**
   * Email obfuscator script 2.1 by Tim Williams, University of Arizona
   * Random encryption key feature coded by Andrew Moulden
   * This code is freeware provided these four comment lines remain intact
   * A wizard to generate this code is at http://www.jottings.com/obfuscator/
   */
  const coded = 'NP29iN9@pxZ7Z.LP';
  const key = 'nG8lYLjzT5uwEmAb2Wc3SfHQD6qdv1MCUoNaOprVtRe740kyJPgiXKxF9BZIsh';
  const shift = coded.length;

  let ltr = '';
  let link = '';

  for (let i = 0; i < coded.length; i++) {
    if (key.indexOf(coded.charAt(i)) === -1) {
      ltr = coded.charAt(i);
      link = link + ltr;
    } else {
      ltr = (key.indexOf(coded.charAt(i)) - shift + key.length) % key.length;
      link = link + key.charAt(ltr);
    }
  }

  const emails = document.querySelectorAll('.js-email');
  emails.forEach(email => email.setAttribute('href', `mailto:${link}`));
}

function updateCopyright() {
  document.querySelector('.js-year').textContent = new Date().getFullYear();
}

function run() {
  obfuscateEmail();
  updateCopyright();
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
      navigator.serviceWorker.register('/service-worker.js');
    } catch (error) {
      console.error('service worker registration failed: ', error);
    }
  });
}
