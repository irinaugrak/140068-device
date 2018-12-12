'use strict';
let openCatalog = document.querySelector('.header-navigation-plus');
openCatalog.onclick = function() {
  let catalogList = document.querySelector('.header-navigation__catalog-list');
  catalogList.classList.toggle('show');
}
