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
const catalogBtnLists = document.querySelectorAll('.catalog-menu ul li')
const subCatalogMenu = document.querySelector('.sub-catalog-menu')


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

catalogBtn.addEventListener('click', () => {
    catalogMenu.classList.toggle('active')
    btnMenuCross.classList.toggle('active')
    if (btnMenuCross.classList.contains('active')) {
        btnMenu.style.display = 'none'
    } else {
        btnMenu.style.display = 'flex'
    }
})

catalogBtnLists.forEach(item => {
    item.addEventListener('mouseover', () => {
        subCatalogMenu.classList.add('active')
    })
})

catalogBtnLists.forEach(item => {
    item.addEventListener('mouseout', () => {
        if (item.classList.contains('active')) {
            subCatalogMenu.classList.remove('active')
        } else {
            subCatalogMenu.classList.add('active')
        }
    })
})

