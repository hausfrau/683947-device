var VISUALLY_HIDDEN = 'visually-hidden';

var searchForm = document.querySelector('.search__form');
var searchInput = searchForm.querySelector('.search__input');
var searchButton = searchForm.querySelector('.search__button');
var searchLabel = searchForm.querySelector('.search__label');
var navigationSiteList = document.querySelector('.navigation-site-list');
var openCatalog = navigationSiteList.querySelector('.open-catalog');
var catalogMenuList = navigationSiteList.querySelector('.catalog-menu-list');

var onSearchInput = function (evt) {
    searchLabel.classList.add('search__label_border');
    searchButton.classList.remove(VISUALLY_HIDDEN);
};

searchInput.addEventListener('input', onSearchInput);

var onOpenCatalogClick = function () {
    var classList = catalogMenuList.classList;
    classList.contains(VISUALLY_HIDDEN) ? classList.remove(VISUALLY_HIDDEN) : classList.add(VISUALLY_HIDDEN);
};

openCatalog.addEventListener('click', onOpenCatalogClick);

var setup = function () {
    searchInput.value = "";
};

setup();
