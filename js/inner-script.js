var VISUALLY_HIDDEN = 'visually-hidden';

var searchForm = document.querySelector('.search__form');
var searchInput = searchForm.querySelector('.search__input');
var searchButton = searchForm.querySelector('.search__button');
var searchLabel = searchForm.querySelector('.search__label');

var onSearchInput = function (evt) {
    searchLabel.classList.add('search__label_border');
    searchButton.classList.remove(VISUALLY_HIDDEN);
};

searchInput.addEventListener('input', onSearchInput);

var setup = function () {
    searchInput.value = "";
};


setup();
