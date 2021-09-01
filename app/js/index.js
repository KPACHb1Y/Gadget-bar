const chooseCity = document.querySelector('.choose-city');
const chooseAddress = document.querySelector('.choose-address');
const modalCity = document.getElementById('modalCity');
const modalAddress = document.getElementById('modalAddress')
const callLink = document.querySelector('.call-link')
const modalCallback = document.getElementById('modalCallback')
const body = document.querySelector('body')


const catalogBtn = document.querySelector('.catalog-btn')
const catalogMenu = document.querySelector('.catalog-menu')
const btnMenuCross = document.querySelector('.btn-menu-cross')
const btnMenu = document.querySelector('.btn-menu')
const fixedMenuBtn = document.querySelector('.fixed-menu')
const catalogFixedMenu = document.querySelector('.catalog-fixed-menu')

const dropBtn = document.querySelectorAll('.dropBtn')
const subCatalogMenu = document.querySelectorAll('.sub-catalog-menu')

const cartCounter = document.querySelector('.cart-counter')
const cartDelete = document.querySelector('.cart-delete')
const btnCart = document.querySelector('.btn-cart')

const sendForm = document.querySelector('.send-form')
const nameInput = document.querySelector('.name-input input')
const telInput = document.querySelector('.phone-input input')
const privacyPolicy = document.querySelector('.privacy-policy input')

function toggleActiveModal(modal) {
    return modal.classList.toggle('active');
}

$(function() {
    // при нажатии на кнопку scrollup
    $('.scroll-up').on('click', function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop:0
        },500);
    })

    var tab = $('#tabs .tabs-items > div');
    tab.hide().filter(':first').show();

    // Клики по вкладкам.
    $('#tabs .tabs-nav a').click(function () {
        tab.hide();
        tab.filter(this.hash).show();
        $('#tabs .tabs-nav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':first').click();

    // Клики по якорным ссылкам.
    $('.tabs-target').click(function () {
        $('#tabs .tabs-nav a[href=' + $(this).data('id') + ']').click();
    });

    $('.dropBtn').on('click',function(e){
        e.stopPropagation()
        if($(this).next().hasClass('active')){
            $(this).next().removeClass('active');
        }
        else{
            $('.sub-catalog-menu').removeClass('active');
            $(this).next().addClass('active');
        }
    });
    $('.sub-catalog-menu').on('click', e => {
        e.stopPropagation()
    })
    $('.catalog-menu').on('click', e => {
        e.stopPropagation()
    })
    $('.catalog-fixed-menu').on('click', e => {
        e.stopPropagation()
    })
    $('.dropdown-toggle').on('click', () => {
        $('.catalog-menu').removeClass('active')
        $('.catalog-fixed-menu').removeClass('active')
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    let header = $('.search-block');
    let btnCatalog = $('.fixed-menu')
    let searchInput = $('.search-block__input')
    if($(this).scrollTop() > 100) {
        header.addClass('header_fixed');
        header.css('justify-content', 'center')
        btnCatalog.css({
            'display': 'flex',
            'margin' : '0 15px'
        })
        searchInput.css('margin-left', '15px')
    } else {
        header.removeClass('header_fixed');
        header.css('justify-content', 'start')
        btnCatalog.css({
            'display': 'none',
            'margin' : '0'
        })
        // searchInput.css('margin-left', '32px')
    }
    if ($(this).scrollTop()>2600) {
        // то сделать кнопку scrollup видимой
        $('.scroll-up').css('display', 'flex');
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scroll-up').css('display', 'none');
    }
});

chooseCity.addEventListener('click', () => {
    toggleActiveModal(modalCity)
    modalAddress.classList.remove('active')
})

chooseAddress.addEventListener('click', () => {
    toggleActiveModal(modalAddress)
    modalCity.classList.remove('active')
})

callLink.addEventListener('click', () => {
    modalAddress.classList.remove('active')
    modalCity.classList.remove('active')
    notEmptyInput()
})

btnCart.addEventListener('click', () => {
    if (cartCounter.style.display !== 'flex') {
        cartCounter.style.display = 'flex'
        btnCart.style.display = 'none'
    }
})

cartDelete.addEventListener('click', () => {
    if (cartCounter.style.display === 'flex') {
        cartCounter.style.display = 'none'
        btnCart.style.display = 'flex'
    }
})

fixedMenuBtn.addEventListener('click', () => {
    catalogFixedMenu.classList.add('active')
    btnMenuCross.classList.toggle('active')
    if (btnMenuCross.classList.contains('active')) {
        btnMenu.style.display = 'none'
    } else {
        btnMenu.style.display = 'flex'
        catalogFixedMenu.classList.remove('active')
        $('.sub-catalog-menu').removeClass('active')
    }
})


catalogBtn.addEventListener('click', function() {
    catalogMenu.classList.add('active')
    btnMenuCross.classList.toggle('active')
    if (btnMenuCross.classList.contains('active')) {
        btnMenu.style.display = 'none'
    } else {
        btnMenu.style.display = 'flex'
        catalogMenu.classList.remove('active')
        $('.sub-catalog-menu').removeClass('active')
    }
})

// dropBtn.forEach(item => {
//     item.addEventListener('click', e => {
//         e.stopPropagation();
//         console.log(true)
//         subCatalogMenu.forEach(item => {
//             item.classList.toggle('active')
//         })
//     })
// })

function notEmptyInput() {
    if (nameInput.length !== 0 && telInput.length !== 0) {
        sendForm.disabled = true
    }
}

var map;
DG.then(function () {
    map = DG.map('map-1', {
        center: [51.6910388043378, 39.183333047019026], /* Координаты центра карты */
        zoom: 12, /* Масштаб */
        scrollWheelZoom: false /* Запрет прокрутки карты колесом мыши */
    });
    mapicon = DG.icon({
        iconUrl: 'img/marker.png', /* Иконка маркера */
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [64, 64] /* Размер иконки */
    });
    DG.marker([51.718256, 39.174037], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2 class="map-adress">Владимира Невского 55Ж</h2><h2 class="map-time">с 10:00 до 20:00</h2><h2 class="map-tel">+7 980 544 66 66</h2></div>');     /* Координаты маркера и текст попапа */
    DG.marker([51.667174, 39.194381], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2 class="map-adress">Плехановская 22</h2><h2 class="map-time">с 10:00 до 20:00</h2><h2 class="map-tel">+7 980 544 66 66</h2></div>');     /* Координаты маркера и текст попапа */
    DG.marker([51.664299, 39.246596], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2 class="map-adress">Ленинский проспект 95Б</h2><h2 class="map-time">с 10:00 до 20:00</h2><h2 class="map-tel">+7 980 544 66 66</h2></div>');     /* Координаты маркера и текст попапа */
    DG.marker([51.667680, 39.206540], {icon: mapicon}).addTo(map).bindPopup('<div class="map-popup"><h2 class="map-adress">Проспект Революции 44</h2><h2 class="map-time">с 10:00 до 20:00</h2><h2 class="map-tel">+7 980 544 66 66</h2></div>');     /* Координаты маркера и текст попапа */
});

var map2;
DG.then(function () {
    map2 = DG.map('map-2', {
        center: [51.667174, 39.194381], /* Координаты центра карты */
        zoom: 16, /* Масштаб */
        scrollWheelZoom: false /* Запрет прокрутки карты колесом мыши */
    });
    mapicon = DG.icon({
        iconUrl: 'img/marker.png', /* Иконка маркера */
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [64, 64] /* Размер иконки */
    });
    DG.marker([51.667174, 39.194381], {icon: mapicon}).addTo(map2).bindPopup('<div class="map-popup"><h2>ATUIN</h2><br/>Быстрая настройка и установка<br/>карты на <b>API 2ГИС</b></div>');     /* Координаты маркера и текст попапа */
});

var map3;
DG.then(function () {
    map3 = DG.map('map-3', {
        center: [51.664299, 39.246596], /* Координаты центра карты */
        zoom: 16, /* Масштаб */
        scrollWheelZoom: false /* Запрет прокрутки карты колесом мыши */
    });
    mapicon = DG.icon({
        iconUrl: 'img/marker.png', /* Иконка маркера */
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [64, 64] /* Размер иконки */
    });
    DG.marker([51.664299, 39.246596], {icon: mapicon}).addTo(map3).bindPopup('<div class="map-popup"><h2>ATUIN</h2><br/>Быстрая настройка и установка<br/>карты на <b>API 2ГИС</b></div>');     /* Координаты маркера и текст попапа */
});

var map4;
DG.then(function () {
    map4 = DG.map('map-4', {
        center: [51.667680, 39.206540], /* Координаты центра карты */
        zoom: 16, /* Масштаб */
        scrollWheelZoom: false /* Запрет прокрутки карты колесом мыши */
    });
    mapicon = DG.icon({
        iconUrl: 'img/marker.png', /* Иконка маркера */
        iconAnchor: [32, 64],
        popupAnchor: [0, 24],
        className: 'map-icon',
        iconSize: [64, 64] /* Размер иконки */
    });
    DG.marker([51.667680, 39.206540], {icon: mapicon}).addTo(map4).bindPopup('<div class="map-popup"><h2>ATUIN</h2><br/>Быстрая настройка и установка<br/>карты на <b>API 2ГИС</b></div>');     /* Координаты маркера и текст попапа */
});


