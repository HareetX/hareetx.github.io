// Progressive enhancement: all content and links work without JavaScript.
const navigationLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
const sections = navigationLinks.map(link => document.querySelector(link.getAttribute('href')));

function updateCurrentSection() {
  const marker = document.querySelector('.site-header').getBoundingClientRect().bottom + 100;
  let current = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= marker) current = section;
  }
  if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
    current = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (link.getAttribute('href') === `#${current.id}`) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  }
}

let scheduled = false;
window.addEventListener('scroll', () => {
  if (scheduled) return;
  scheduled = true;
  window.requestAnimationFrame(() => { updateCurrentSection(); scheduled = false; });
}, {passive: true});
window.addEventListener('resize', updateCurrentSection);
updateCurrentSection();
