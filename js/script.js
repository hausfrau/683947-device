var body = document.querySelector('body');
var VISUALLY_HIDDEN = 'visually-hidden';

var initSearch = function () {
    var searchForm = document.querySelector('.search__form');
    var searchInput = searchForm.querySelector('.search__input');
    var searchButton = searchForm.querySelector('.search__button');
    var searchLabel = searchForm.querySelector('.search__label');

    var hideSearchButton = function () {
        if (!searchInput.value) {
            searchLabel.classList.remove('search__label_border');
            searchButton.classList.add(VISUALLY_HIDDEN);
            searchButton.blur();
        }
    };

    var onSearchInput = function () {
        searchLabel.classList.add('search__label_border');
        searchButton.classList.remove(VISUALLY_HIDDEN);
    };

    searchInput.addEventListener('input', onSearchInput);

    searchInput.addEventListener('blur', hideSearchButton);

    searchForm.addEventListener('submit', function () {
        searchInput.value = '';
        hideSearchButton();
    });

    searchInput.value = '';
    hideSearchButton();
};

var loadMainPage = function () {
    var services = document.querySelector('.services');
    var servicesButtons = services.querySelectorAll('.services-button');
    var servicesSliders = services.querySelectorAll('.services-description-item');
    var modalWriteUs = document.querySelector('.modal-write-us');
    var writeUsClose = modalWriteUs.querySelector('.modal-close');
    var writeUsOpen = document.querySelector('.write-us');
    var mapOpen = document.querySelector('.map__link');
    var modalMap = document.querySelector('.modal-map');
    var mapClose = modalMap.querySelector('.modal-close');
    var promo = document.querySelector('.promo');
    var promoSliderButtons = promo.querySelectorAll('.promo-slider-item');
    var promoSliders = promo.querySelectorAll('.promo-item');
    var writeUsForm = document.querySelector('.write-us-form');
    var writeUsName = writeUsForm.querySelector('#write-us-name');
    var writeUsEmail = writeUsForm.querySelector('#write-us-email');
    var writeUsText = writeUsForm.querySelector('.write-us-text');
    var userName = '';
    var userEmail = '';
    var isStorageSupport = false;

    var removeClassFromElements = function (elements, className) {
        Array.prototype.forEach.call(elements, function (item) {
            item.classList.remove(className);
        });
    };

    var onWriteUsOpenClick = function (evt) {
        evt.preventDefault();
        modalWriteUs.classList.remove(VISUALLY_HIDDEN);

        if (userName) {
            writeUsName.value = userName;
            if (userEmail) {
                writeUsEmail.value = userEmail;
                writeUsText.focus();
            } else {
                writeUsEmail.focus();
            }
        } else {
            writeUsName.focus();
        }
    };

    writeUsOpen.addEventListener('click', onWriteUsOpenClick);

    var onWriteUsCloseClick = function () {
        modalWriteUs.classList.add(VISUALLY_HIDDEN);
    };

    writeUsClose.addEventListener('click', onWriteUsCloseClick);

    var onMapOpenClick = function (evt) {
        evt.preventDefault();
        modalMap.classList.remove(VISUALLY_HIDDEN);
    };

    mapOpen.addEventListener('click', onMapOpenClick);

    var onMapCloseClick = function () {
        modalMap.classList.add(VISUALLY_HIDDEN);
    };

    mapClose.addEventListener('click', onMapCloseClick);

    var getCurrentIndex = function (buttons, className) {
        for (var i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains(className)) {
                return i;
            }
        }
    };

    var toggleVisibility = function (buttons, className, sliders) {
        var current = getCurrentIndex(buttons, className);
        for (var i = 0; i < buttons.length; i++) {
            if (i != current) {
                buttons[i].classList.remove(className);
                sliders[i].classList.add(VISUALLY_HIDDEN);
            } else {
                sliders[i].classList.remove(VISUALLY_HIDDEN);
            }
        }
    };

    var bindSlidersListeners = function (buttons, className, sliders) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function () {
                if (!this.classList.contains(className)) {
                    removeClassFromElements(buttons, className);
                    this.classList.add(className);
                    toggleVisibility(buttons, className, sliders);
                }
            });
        }
    };

    var setupDefault = function () {
        initSearch();

        bindSlidersListeners(promoSliderButtons, 'promo-slider-item_current', promoSliders);
        bindSlidersListeners(servicesButtons, 'services-item_current', servicesSliders);

        if (typeof(Storage) !== 'undefined') {
            isStorageSupport = true;
            userName = localStorage.getItem('userName');
            userEmail = localStorage.getItem('userEmail');
        }
    };

    writeUsForm.addEventListener('submit', function (evt) {
        if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
            evt.preventDefault();
            console.log('Нужно ввести имя и электронную почту');
        } else {
            if (isStorageSupport) {
                localStorage.setItem('userName', writeUsName.value);
                localStorage.setItem('userEmail', writeUsEmail.value);
            }
        }
    });

    setupDefault();
};

var loadInnerPage = function () {
    initSearch();
};

if (body.id == 'main-page') {
    loadMainPage();
} else {
    loadInnerPage();
}


