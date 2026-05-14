const themeToggle = document.querySelector('.js-theme-toggle');


// load saved theme from localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark-theme');
  themeToggle.innerHTML = '☀️';
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