(function () {
  'use strict';

  var menuButton = document.querySelector('.portfolio-home .greedy-nav > button');
  var menu = document.querySelector('.portfolio-home .greedy-nav .visible-links');

  if (!menuButton || !menu) return;

  var sectionLinks = menu.querySelectorAll('[data-section] a');

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

  if (!sectionLinks.length || !('IntersectionObserver' in window)) return;

  var sections = Array.prototype.map.call(sectionLinks, function (link) {
    return document.getElementById(link.closest('[data-section]').getAttribute('data-section'));
  }).filter(Boolean);

  var setActiveSection = function (sectionId) {
    Array.prototype.forEach.call(sectionLinks, function (link) {
      var item = link.closest('[data-section]');
      var isActive = item.getAttribute('data-section') === sectionId;
      item.classList.toggle('selected', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  };

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) setActiveSection(entry.target.id);
    });
  }, { rootMargin: '-20% 0px -65% 0px', threshold: 0 });

  sections.forEach(function (section) {
    observer.observe(section);
  });
}());
