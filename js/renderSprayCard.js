const sprayCardEl = document.querySelector(".advantages_spray__row")

function renderSprayCard() {
    sprayData.forEach(item => {
        sprayCardEl.innerHTML += `
        <div class="advantages_spray__card" ${item.id}>
            <div class="advantages_spray__card-header">
                <div class="advantages_spray__card-img-block">
                    <img class="advantages_spray__card-img"
                        src="${item.imgSrc}" alt="${item.imgAlt}">
                </div>
                <h3 class="advantages_spray__card-title">${item.title}</h3>
            </div>
            <ul class="advantages_spray__card-menu">
                <li class="advantages_spray__card-item">
                    <div class="advantage_spray__card-item-img-block">
                        <img class="advantages_spray__card-item-img"
                            src="${item.imgChek}" alt="${item.imgChekAlt}">
                    </div>
                    <p class="advantages_spray__card-item-title">${item.subtitle.content_1}</p>
                </li>
                <li class="advantages_spray__card-item">
                    <div class="advantage_spray__card-item-img-block">
                        <img class="advantages_spray__card-item-img"
                            src="${item.imgChek}" alt="${item.imgChekAlt}">
                    </div>
                    <p class="advantages_spray__card-item-title">${item.subtitle.content_2}</p>
                </li>
                <li class="advantages_spray__card-item">
                    <div class="advantage_spray__card-item-img-block">
                        <img class="advantages_spray__card-item-img"
                            src="./assets/sprayImg/advantagesSpray/chek.svg" alt="chek.svg">
                    </div>
                    <p class="advantages_spray__card-item-title">${item.subtitle.content_3}</p>
                </li>
                <li class="advantages_spray__card-item">
                    <div class="advantage_spray__card-item-img-block">
                        <img class="advantages_spray__card-item-img"
                            src="${item.imgChek}" alt="${item.imgChekAlt}">
                    </div>
                    <p class="advantages_spray__card-item-title">${item.subtitle.content_4}</p>
                </li>
                <li class="advantages_spray__card-item">
                <div class="advantage_spray__card-item-img-block">
                    <img class="advantages_spray__card-item-img"
                        src="${item.imgChek}" alt="${item.imgChekAlt}">
                </div>
                <p class="advantages_spray__card-item-title">${item.subtitle.content_5}</p> 
            </li>
            </ul>
        </div>
        `
    });
}

renderSprayCard()