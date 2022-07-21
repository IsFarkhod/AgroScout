const arrow = document.querySelector('.about_company__img')
const show = document.querySelector('.about_company__show')


arrow.addEventListener('click', () => {
    if (show.classList.toggle("about_company--active")) {
        arrow.classList.add("about_company--rotate")
    } else {
        arrow.classList.remove("about_company--rotate")
    }
})
