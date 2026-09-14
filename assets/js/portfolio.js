(function () {
  'use strict';

  var menuButton = document.querySelector('.portfolio-home .greedy-nav > button');
  var menu = document.querySelector('.portfolio-home .greedy-nav .visible-links');

  if (!menuButton || !menu) return;

  menuButton.setAttribute('aria-label', 'Open navigation');
  menuButton.setAttribute('aria-expanded', 'false');

  menuButton.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });

  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    }
  });
}());
