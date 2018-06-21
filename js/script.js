'use strict';
(function () {
    var VISUALLY_HIDDEN = 'visually-hidden';

    var searchForm = document.querySelector('.search__form');
    var searchInput = searchForm.querySelector('.search__input');
    var searchButton = searchForm.querySelector('.search__button');
    var searchLabel = searchForm.querySelector('.search__label');
    var navigationSiteList = document.querySelector('.navigation-site-list');
    var openCatalog = navigationSiteList.querySelector('.open-catalog');
    var catalogMenuList = navigationSiteList.querySelector('.catalog-menu-list');
    var services = document.querySelector('.services');
    var appearanceButtonDelivery = services.querySelector('.appearance-button__delivery');
    var appearanceButtonWarranty = services.querySelector('.appearance-button__warranty');
    var appearanceButtonCredit = services.querySelector('.appearance-button__credit');
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
    var manufacturersList = document.querySelector('.manufacturers-list');
    var dji = manufacturersList.querySelector('.dji');
    var djiHover = manufacturersList.querySelector('.dji-hover');
    var spgadgets = manufacturersList.querySelector('.spgadgets');
    var spgadgetsHover = manufacturersList.querySelector('.spgadgets-hover');
    var gopro = manufacturersList.querySelector('.gopro');
    var goproHover = manufacturersList.querySelector('.gopro-hover');
    var vive = manufacturersList.querySelector('.vive');
    var viveHover = manufacturersList.querySelector('.vive-hover');

    var changeImage = function (firstImage, secondImage) {
        firstImage.classList.add(VISUALLY_HIDDEN);
        secondImage.classList.remove(VISUALLY_HIDDEN);
    };

    var onDjiMouseover = function () {
        changeImage(dji, djiHover);
    };

    var onDjiHoverMouseout = function () {
        changeImage(djiHover, dji);
    };

    dji.addEventListener('mouseover', onDjiMouseover);
    djiHover.addEventListener('mouseout', onDjiHoverMouseout);

    var onSpgadgetsMouseover = function () {
        changeImage(spgadgets, spgadgetsHover);
    };

    var onSpgadgetsHoverMouseout = function () {
        changeImage(spgadgetsHover, spgadgets);
    };

    spgadgets.addEventListener('mouseover', onSpgadgetsMouseover);
    spgadgetsHover.addEventListener('mouseout', onSpgadgetsHoverMouseout);

    var onGoproMouseover = function () {
        changeImage(gopro, goproHover);
    };

    var onGoproHoverMouseout = function () {
        changeImage(goproHover, gopro);
    };

    gopro.addEventListener('mouseover', onGoproMouseover);
    goproHover.addEventListener('mouseout', onGoproHoverMouseout);

    var onViveMouseover = function () {
        changeImage(vive, viveHover);
    };

    var onViveHoverMouseout = function () {
        changeImage(viveHover, vive);
    };

    vive.addEventListener('mouseover', onViveMouseover);
    viveHover.addEventListener('mouseout', onViveHoverMouseout);

    var onOpenCatalogClick = function () {
        var classList = catalogMenuList.classList;
        classList.contains(VISUALLY_HIDDEN) ? classList.remove(VISUALLY_HIDDEN) : classList.add(VISUALLY_HIDDEN);
    };

    openCatalog.addEventListener('click', onOpenCatalogClick);

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

    var onAppearanceButtonDeliveryClick = function () {
        removeClassFromElements(services, 'services-item_current');
        appearanceButtonDelivery.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionDelivery.classList.add('services-description-item_current');
        servicesDescriptionDelivery.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionWarranty.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionCredit.classList.add(VISUALLY_HIDDEN);
    };

    appearanceButtonDelivery.addEventListener('click', onAppearanceButtonDeliveryClick);

    var onAppearanceButtonWarrantyClick = function () {
        removeClassFromElements(services, 'services-item_current');
        appearanceButtonWarranty.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionWarranty.classList.add('services-description-item_current');
        servicesDescriptionWarranty.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionDelivery.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionCredit.classList.add(VISUALLY_HIDDEN);
    };

    appearanceButtonWarranty.addEventListener('click', onAppearanceButtonWarrantyClick);

    var onAppearanceButtonCreditClick = function () {
        removeClassFromElements(services, 'services-item_current');
        appearanceButtonCredit.classList.add('services-item_current');
        removeClassFromElements(servicesDescriptionList, 'services-description-item_current');
        servicesDescriptionCredit.classList.add('services-description-item_current');
        servicesDescriptionCredit.classList.remove(VISUALLY_HIDDEN);
        servicesDescriptionDelivery.classList.add(VISUALLY_HIDDEN);
        servicesDescriptionWarranty.classList.add(VISUALLY_HIDDEN);
    };

    appearanceButtonCredit.addEventListener('click', onAppearanceButtonCreditClick);

    var onWriteUsOpenClick = function () {
        modalWriteUs.classList.remove(VISUALLY_HIDDEN);
    };

    writeUsOpen.addEventListener('click', onWriteUsOpenClick);

    var onWriteUsCloseClick = function () {
        modalWriteUs.classList.add(VISUALLY_HIDDEN);
    };

    writeUsClose.addEventListener('click', onWriteUsCloseClick);

    var onMapOpenClick = function () {
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
    };

    setup();
})();
