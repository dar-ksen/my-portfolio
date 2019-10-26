'use strict';
(() => {
  const menu = document.querySelector('.main-nav');
  const toggle = document.querySelector('.header__toggle');

  const toggleMenu = () => {
    menu.classList.toggle('main-nav--hidden');
    toggle.classList.toggle('header__toggle--show');
  };

  toggle.addEventListener('click', () => {
    toggleMenu();
  });

  menu.addEventListener('click', ( {target} ) => {
    const element = target;
    if (element.classList.contains('main-nav__link')) {
      toggleMenu();
    }
  })
})();
