console.log('hi')

const dropMenus = document.getElementsByClassName('menuBar')
const dropMenu = dropMenus[0]

const menuButtons = document.getElementsByClassName('menuButton')
const menuButton = menuButtons[0]

function fadeAway(container) {
    if ( container.classList.contains('menu-animate')) {
        container.classList.remove('menu-animate');
    } else {
        container.classList.add('menu-animate');
    }
}

menuButton.addEventListener('click', () => fadeAway(dropMenu))