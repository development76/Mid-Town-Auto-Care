const yearElement = document.getElementById('year');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const siteHeader = document.querySelector('header');
let lastScrollY = window.scrollY;

function handleMobileNavVisibility() {
  if (!siteHeader) {
    return;
  }

  const currentScrollY = window.scrollY;
  const isMobile = window.innerWidth <= 780;

  if (!isMobile || currentScrollY <= 10) {
    siteHeader.classList.remove('nav-hidden');
    lastScrollY = currentScrollY;
    return;
  }

  if (currentScrollY > lastScrollY + 5) {
    siteHeader.classList.add('nav-hidden');
  } else if (currentScrollY < lastScrollY - 5) {
    siteHeader.classList.remove('nav-hidden');
  }

  lastScrollY = currentScrollY;
}

window.addEventListener('scroll', handleMobileNavVisibility, { passive: true });
window.addEventListener('resize', handleMobileNavVisibility);
