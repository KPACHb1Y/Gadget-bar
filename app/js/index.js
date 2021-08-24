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
const catalogBtnLists = document.querySelectorAll('.catalog-menu ul li a')
const subCatalogMenu = document.querySelector('.sub-catalog-menu')

const cartCounter = document.querySelector('.cart-counter')
const cartDelete = document.querySelector('.cart-delete')
const btnCart = document.querySelector('.btn-cart')

function toggleActiveModal(modal) {
    return modal.classList.toggle('active');
}

chooseCity.addEventListener('click', () => {
    toggleActiveModal(modalCity)
    modalAddress.classList.remove('active')
})

chooseAddress.addEventListener('click', () => {
    toggleActiveModal(modalAddress)
    modalCity.classList.remove('active')
})

callLink.addEventListener('click', () => {
    toggleActiveModal(modalCallback)
    body.style.overflow = 'hidden'
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

catalogBtn.addEventListener('click', (e) => {
    catalogMenu.classList.add('active')
    btnMenuCross.classList.toggle('active')
    if (btnMenuCross.classList.contains('active')) {
        btnMenu.style.display = 'none'
    } else {
        btnMenu.style.display = 'flex'
        catalogMenu.classList.remove('active')
    }
})

$(document).ready(function () {
    $('.dropBtn').each(function () {
        $(this).mouseover(function() {
            $('.sub-catalog-menu').each(function() {
                $(this).show()
            });
        }).mouseout(function() {
            let t = setTimeout(function() {
                $('.sub-catalog-menu').hide();
            }, 100);
            $('.sub-catalog-menu').on('mouseenter', function() {
                $('.sub-catalog-menu').show();
                clearTimeout(t);
            }).on('mouseleave', function() {
                $('.sub-catalog-menu').hide();
            })
        })
    })
    // $('.dropBtn').mouseover(function() {
    //     $('.sub-catalog-menu').show();
    // }).mouseout(function() {
    //     let t = setTimeout(function() {
    //         $('.sub-catalog-menu').hide();
    //     }, 100);
    //
    //     $('.sub-catalog-menu').on('mouseenter', function() {
    //         $('.sub-catalog-menu').show();
    //         clearTimeout(t);
    //     }).on('mouseleave', function() {
    //         $('.sub-catalog-menu').hide();
    //     })
    // })
})


