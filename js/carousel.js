const persons = [
    {
        id: 0,
        personImg: "./assets/aboutus/user.jpg",
        personTitle: "Олег Иванченко",
        personSubtitle: "Генеральный директор компнии",
        personDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi facilisi ultrices ut tur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida   pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem."
    },
    {
        id: 1,
        personImg: "./assets/aboutus/user2.jpg",
        personTitle: "Петр Иванченко",
        personSubtitle: "Главный инженер компании",
        personDescription: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisi tur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida   pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem."
    },
    {
        id: 2,
        personImg: "./assets/aboutus/user3.jpg",
        personTitle: "Иван Иванченко",
        personSubtitle: "Заместитель директора компании",
        personDescription: " Lorem ipsum dolor sit amet, adipiscing elit. Facilisi facilisi ultrices ut tur nibh tincidunt. Elit nunc, volutpat, eu ac egestas suspendisse vulputate. Sed feugiat gravida   pellentesque dictum nisi rhoncus montes. Duis tellus auctor eget nibh sed erat risus lorem."
    }
];

const img = document.querySelector(".command__img")
const author = document.querySelector(".command__title")
const proff = document.querySelector(".command__subtitle")
const description = document.querySelector(".command__description")

const prevBtn = document.querySelector(".carousel-btn--1")
const nextBtn = document.querySelector(".carousel-btn--2")

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
    showPerson(currentItem)
})

const showPerson = (person) => {
    const item = persons[person]
    img.src = item.personImg
    author.textContent = item.personTitle
    proff.textContent = item.personSubtitle
    description.textContent = item.personDescription
}

nextBtn.addEventListener('click', () => {
    currentItem++
    if (currentItem > persons.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
    nextBtn.classList.add("active")
    prevBtn.classList.remove("active")
})

prevBtn.addEventListener('click', () => {
    currentItem--
    if (currentItem < 0) {
        currentItem = persons.length - 1
    }
    showPerson(currentItem)
    nextBtn.classList.remove("active")
    prevBtn.classList.add("active")
})