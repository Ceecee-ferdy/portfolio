const themeToggle = document.querySelector('.js-theme-toggle');


// load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '☀️';
} else {
  themeToggle.innerHTML = '🌙';
}


// toggle theme
themeToggle.addEventListener('click', () => {

  document.body.classList.toggle('dark-theme');

  
  const isDarkTheme = document.body.classList.contains('dark-theme');

  
  if (isDarkTheme) {
    themeToggle.innerHTML = '☀️';
    localStorage.setItem('theme', 'dark');

  } else {
    themeToggle.innerHTML = '🌙';
    localStorage.setItem('theme', 'light');
  }

});



const menuToggle = document.querySelector('.js-menu-toggle');

const navLinks = document.querySelector('.nav-links');


menuToggle.addEventListener('click', () => {

  navLinks.classList.toggle('active');

  const isOpen = navLinks.classList.contains('active');


  if (isOpen) {

    menuToggle.innerHTML = '✕';

  } else {

    menuToggle.innerHTML = `
      <img src="images/Icons/hamburger-menu.png" alt="">
    `;
  }

});

const navItems = document.querySelectorAll('.nav-links a');


navItems.forEach((link) => {

  link.addEventListener('click', () => {


      navLinks.classList.remove('active');


    menuToggle.innerHTML = `
      <img src="images/Icons/hamburger-menu.png" alt="">
    `;
    
  });

});

const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {

  let currentSection = '';

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;

    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute('id');
    }

  });

  // FIX FOR CONTACT SECTION AT PAGE BOTTOM
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - 50
  ) {
    currentSection = 'contact';
  }

  navItems.forEach((link) => {

    link.classList.remove('active');

    if (
      link.getAttribute('href') === `#${currentSection}`
    ) {
      link.classList.add('active');
    }

  });

});


const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {

      entry.target.classList.add('show');

    }

  });

}, {
 threshold: 0.25
});

fadeElements.forEach((element) => {
  observer.observe(element);
});