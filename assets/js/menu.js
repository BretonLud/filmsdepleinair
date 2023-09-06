function toggleMenu(){
    const menu = document.querySelector('.menu');
    const burger = document.querySelector('.burger');
    const ul = menu.querySelector('ul');

    burger.addEventListener('click', () => {

        menu.classList.toggle('menu__show');
        ul.classList.toggle('menu__visibility')
    })
}

function eventMenu()
{
    const links = document.querySelectorAll('.menu__link');
    const menu = document.querySelector('.menu');
    const ul = menu.querySelector('ul');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            if (e.target === link.querySelector('a')){
                menu.classList.remove('menu__show');
                ul.classList.remove('menu__visibility')
            }
        })
    })
}

function scrollEvent()
{
    const header = document.querySelector('header');
    let currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 0) {
        header.classList.add('scrolled-down');
        header.classList.remove('scrolled-up');
    }

    window.addEventListener('scroll', () => {
        currentScrollPosition = window.scrollY

        if (currentScrollPosition > 0) {

            header.classList.add('scrolled-down');
            header.classList.remove('scrolled-up');
        } else if (currentScrollPosition === 0) {

            header.classList.remove('scrolled-down');
            header.classList.add('scrolled-up');
        }
    });
}

toggleMenu();
scrollEvent();
eventMenu();