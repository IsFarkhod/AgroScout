const productEl = document.querySelector('.production__row')
const modalWindow = document.querySelector('.modal_window')
const subtotal = document.querySelector('.subtotal')
const numberIndex = document.querySelector('.number__index')

function renderProduct() {
    content.forEach(element => {
        productEl.innerHTML += `
        <div class="production__card">
            <div class="production__header-img">
                <img class="production__img" src="${element.imgSrc}"
                    alt="${element.imgAlt}" />
            </div>
            <ul class="production__menu">
                <li class="production__item">
                    <h4 class="production__card-title">${element.title}</h4>
                </li>
                <li class="production__item">
                    <span class="production__card-subtitle">Брэнд:</span>
                    <p>${element.brand}</p>
                </li>
                <li class="production__item">
                    <span class="production__card-subtitle">Модель:</span>
                    <p>${element.model}</p>
                </li>
                <li class="production__item">
                    <p class="production__price">$${element.price}</p>
                </li>
                <p class="general__btn" onclick="addCardToBox(${element.id})">Добавить в корзину</p>
            </ul>
        </div>`
    });
}

renderProduct()

let card = []

function addCardToBox(id) {
    changeNumberOfUnits("plus", id)
    if (card.some((item) => item.id === id)) {
        alert("продукт добавлен в корзину")
    } else {
        const item = content.find((product) => product.id === id)
        card.push({ ...item, numberOfUnits: 1 })
        console.log(card)
    }
    updateCart()
}

function updateCart() {
    renderCardItems()
    renderSubtTotal()
}

function renderCardItems() {
    modalWindow.innerHTML = ""
    card.forEach(element => {
        modalWindow.innerHTML += `
        <div class="modal_window__card">
            <div class="modal_window__img-block">
                <img class="modal_window__img"
                    src="${element.imgSrc}" alt="${element.imgAlt}">
            </div>
            <div class="modal_window__content">
                <h3 class="modal_window__title">${element.title}</h3>
                <ul class="modal_window__menu">
                    <li class="modal_window__item">
                        <span class="modal_window__label">Брэнд:</span>
                        <p>${element.brand}</p>
                    </li>
                    <li class="modal_window__item">
                        <span class="modal_window__label">Модель:</span>
                        <p>${element.model}</p>
                    </li>
                </ul>
                <p class="modal_window__subtitle"><span>$</span>${element.price}</p>
            </div>
            <div class="modal_window__number" onclick="changeNumberOfUnits('plus', ${element.id})">
                <span class="modal_window__count">${element.numberOfUnits}</span>
            </div>
            <div class="modal_window__delete-box" onclick="changeNumberOfUnits('minus', ${element.id})">
                <span class="modal_window__delete"><img src="./assets/icons/removedBox.svg" alt="removedBox.svg"></span>
            </div>
    </div>  `
    });
}

function changeNumberOfUnits(action, id) {
    card = card.map((item) => {
        let numberOfUnits = item.numberOfUnits
        if (item.id === id) {
            if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits--
            } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++
            }
        }

        return {
            ...item,
            numberOfUnits,
        }
    })

    updateCart()
}

function renderSubtTotal() {
    let totalPrice = 0, totalItems = 0

    card.forEach((item) => {
        totalPrice += item.price * item.numberOfUnits;
        totalItems += item.numberOfUnits
    })
    subtotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`
   numberIndex.innerHTML = `${totalItems}`
}
