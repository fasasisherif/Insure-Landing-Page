
let body = document.querySelector('body')
let hamburger_icon = document.querySelector('#nav-hamburger')
let navigation_items = document.querySelector('.nav-items')
let click_count = 0

hamburger_icon.addEventListener('click', () => {
    click_count++

    if (click_count % 2 == 0) {
        hamburger_icon.src = './images/icon-hamburger.svg'
        navigation_items.classList.remove('open-nav-items')
        body.style.overflow = 'scroll'

    } else {
        hamburger_icon.src = './images/icon-close.svg'

        navigation_items.classList.add('open-nav-items')
        body.style.overflow = 'hidden'
    }
    
})


















