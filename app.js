const nav = document.querySelector('.nav-container');
const dropdownName = document.querySelectorAll('.dropdown-name');
const dropdownMenu = document.querySelectorAll('.dropdown-menu');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerClose = document.querySelector('.hamburger-close');


if (window.innerWidth < 1024) {
    nav.classList.add('hidden');
} else {
    nav.classList.remove('hidden');
}

const mobileNav = () => {
    nav.classList.toggle('hidden');
    hamburgerIcon.classList.toggle('hidden');
    hamburgerClose.classList.toggle('hidden');
}



for (let i = 0; i < dropdownName.length; i++) {
    dropdownName[i].addEventListener('click', () => {
        if (dropdownMenu[i].classList.contains('hidden')) {
            dropdownMenu.forEach(drop => {
                drop.classList.add('hidden');
            });
            dropdownMenu[i].classList.remove('hidden');
        } else {
            dropdownMenu.forEach(drop => {
                drop.classList.add('hidden');
            });
        }
    });
}
hamburgerIcon.addEventListener('click', mobileNav);
hamburgerClose.addEventListener('click', mobileNav);