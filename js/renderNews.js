const newsEl = document.querySelector(".news_block__row")

function renderNewsCard() {
    news.forEach(item => {
        newsEl.innerHTML += `
        <div class="news_block__card" ${item.id}>
            <div class="news_block__card-img-block">
                <img class="news_block__img" src="${item.imgSrc}" alt="${item.alt}">
            </div>
            <div class="news_block__desc-block">
                <h3 class="desc-block__title">
                    ${item.title}
                </h3>
                <p class="desc-block__subtitle">
                    ${item.desc}
                </p>
                <a class="desc-block__link" href="/">Читайте полностью</a>
            </div>
        </div>
        `
    });
}

renderNewsCard()