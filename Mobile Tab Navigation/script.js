const images = document.querySelectorAll('.content')
const nav_buttons = document.querySelectorAll('nav ul li')

nav_buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        nav_buttons.forEach(button => button.classList.remove('active'))
        images.forEach(image => image.classList.remove('show'))
        button.classList.add('active')
        images[idx].classList.add('show')
    })
})