const img = document.querySelector('#img-ampliada')
const background = document.querySelector('#background')
const closeButton = document.querySelector('.close')

const imgNavbar = document.querySelector('#logo-navbar')

const section = document.querySelector('.img-ampliada')

const body = document.querySelector('body')

imgNavbar.addEventListener('click', (ev) => {
    onStyles(img, 10)
    onStyles(background, 5)
    onStyles(closeButton, 10)
    onStyles(section, 100)
    body.style.overflow = 'hidden'
})

background.addEventListener('click', (ev) => {
    offStyles(img)
    offStyles(background)
    offStyles(closeButton)
    offStyles(section)
    body.style.overflow = 'visible'
})

closeButton.addEventListener('click', (ev) => {
    offStyles(img)
    offStyles(background)
    offStyles(closeButton)
    offStyles(section)
    body.style.overflow = 'visible'
})

function onStyles(element, zIndex) {
    element.style.display = 'flex'
    element.style.zIndex = zIndex
}

function offStyles(element) {
    element.style.display = 'none'
    element.style.zIndex = '-100'
}

