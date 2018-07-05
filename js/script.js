'use strict';
(function () {
    var VISUALLY_HIDDEN = 'visually-hidden';

    var searchForm = document.querySelector('.search__form');
    var searchInput = searchForm.querySelector('.search__input');
    var searchButton = searchForm.querySelector('.search__button');
    var searchLabel = searchForm.querySelector('.search__label');
    var services = document.querySelector('.services');
    var gradientButtonDelivery = services.querySelector('.gradient-button__delivery');
    var gradientButtonWarranty = services.querySelector('.gradient-button__warranty');
    var gradientButtonCredit = services.querySelector('.gradient-button__credit');
    var servicesDescriptionList = services.querySelector('.services-description-list');
    var servicesDescriptionDelivery = servicesDescriptionList.querySelector('.services-description__delivery');
    var servicesDescriptionWarranty = servicesDescriptionList.querySelector('.services-description__warranty');
    var servicesDescriptionCredit = servicesDescriptionList.querySelector('.services-description__credit');
    var modalWriteUs = document.querySelector('.modal-write-us');
    var writeUsClose = modalWriteUs.querySelector('.modal-close');
    var writeUsOpen = document.querySelector('.write-us');
    var mapOpen = document.querySelector('.map__link');
    var modalMap = document.querySelector('.modal-map');
    var mapClose = modalMap.querySelector('.modal-close');
    var promo = document.querySelector('.promo');
    var promoSliderList = promo.querySelector('.promo-slider-list');
    var firstSlideLink = promoSliderList.querySelector('.first-slide__link');
    var secondSlideLink = promoSliderList.querySelector('.second-slide__link');
    var thirdSlideLink = promoSliderList.querySelector('.third-slide__link');
    var promoList = promo.querySelector('.promo-list');
    var firstSlide = promoList.querySelector('.first-slide');
    var secondSlide = promoList.querySelector('.second-slide');
    var thirdSlide = promoList.querySelector('.third-slide');
    var writeUsForm = document.querySelector('.write-us-form');
    var writeUsName = writeUsForm.querySelector('#write-us-name');
    var writeUsEmail = writeUsForm.querySelector('#write-us-email');
    var writeUsText = writeUsForm.querySelector('.write-us-text');
    var submit = writeUsForm.querySelector('.submit');
    var userName = '';
    var userEmail = '';
    var isStorageSupport = false;

    var hideSearchButton = function () {
        searchLabel.classList.remove('search__label_border');
        searchButton.classList.add(VISUALLY_HIDDEN);
    };

    var onSearchInput = function () {
        searchLabel.classList.add('search__label_border');
        searchButton.classList.remove(VISUALLY_HIDDEN);
    };

    searchInput.addEventListener('input', onSearchInput);

    var removeClassFromElements = function (parent, className) {
        var elements = parent.querySelectorAll('.' + className);
        Array.prototype.forEach.call(elements, function (item) {
            item.classList.remove(className);
        });
    };

    var onGradientButtonDeliveryClick = function () {
        removeClassFromElements(services, 'services-item_current');
        gradientButtonDelivery.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionDelivery.classList.add('services-description-item_current');
        servicesDescriptionDelivery.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionWarranty.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionCredit.classList.add(VISUALLY_HIDDEN);
    };

    gradientButtonDelivery.addEventListener('click', onGradientButtonDeliveryClick);

    var onGradientButtonWarrantyClick = function () {
        removeClassFromElements(services, 'services-item_current');
        gradientButtonWarranty.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionWarranty.classList.add('services-description-item_current');
        servicesDescriptionWarranty.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionDelivery.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionCredit.classList.add(VISUALLY_HIDDEN);
    };

    gradientButtonWarranty.addEventListener('click', onGradientButtonWarrantyClick);

    var onGradientButtonCreditClick = function () {
        removeClassFromElements(services, 'services-item_current');
        gradientButtonCredit.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionCredit.classList.add('services-description-item_current');
        servicesDescriptionCredit.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionDelivery.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionWarranty.classList.add(VISUALLY_HIDDEN);
    };

    gradientButtonCredit.addEventListener('click', onGradientButtonCreditClick);

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

    var onFirstSlideLinkClick = function () {
        removeClassFromElements(promoSliderList, 'promo-slider-item_current');
        firstSlideLink.classList.add('promo-slider-item_current');
        firstSlide.classList.remove(VISUALLY_HIDDEN);
        secondSlide.classList.add(VISUALLY_HIDDEN);
        thirdSlide.classList.add(VISUALLY_HIDDEN);
    };

    firstSlideLink.addEventListener('click', onFirstSlideLinkClick);

    var onSecondSlideLinkClick = function () {
        removeClassFromElements(promoSliderList, 'promo-slider-item_current');
        secondSlideLink.classList.add('promo-slider-item_current');
        secondSlide.classList.remove(VISUALLY_HIDDEN);
        firstSlide.classList.add(VISUALLY_HIDDEN);
        thirdSlide.classList.add(VISUALLY_HIDDEN);
    };

    secondSlideLink.addEventListener('click', onSecondSlideLinkClick);

    var onThirdSlideLinkClick = function () {
        removeClassFromElements(promoSliderList, 'promo-slider-item_current');
        thirdSlideLink.classList.add('promo-slider-item_current');
        thirdSlide.classList.remove(VISUALLY_HIDDEN);
        secondSlide.classList.add(VISUALLY_HIDDEN);
        firstSlide.classList.add(VISUALLY_HIDDEN);
    };

    thirdSlideLink.addEventListener('click', onThirdSlideLinkClick);

    var setup = function () {
        searchInput.value = "";
        hideSearchButton();

        if (typeof(Storage) !== 'undefined') {
            isStorageSupport = true;
            userName = localStorage.getItem('userName');
            userEmail = localStorage.getItem('userEmail');
        }


    };

    writeUsForm.addEventListener("submit", function (evt) {
        if (!writeUsName.value || !writeUsEmail.value || !writeUsText.value) {
            evt.preventDefault();
            console.log("Нужно ввести имя и электронную почту");
        } else {
            if (isStorageSupport) {
                localStorage.setItem('userName', writeUsName.value);
                localStorage.setItem('userEmail', writeUsEmail.value);
            }
        }
    });

    setup();
})();
