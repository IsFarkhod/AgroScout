const desc1 = document.querySelector(".desc1")
const descBtn2 = document.querySelector(".desc-title2")

const desc2 = document.querySelector(".desc2")
const descBtn1 = document.querySelector(".desc-title1")

const line1 = document.querySelector(".process__desc-title-line1")
const line2 = document.querySelector(".process__desc-title-line2")

const imgTab1 = document.querySelector(".cartoph__img1")
const imgTab2 = document.querySelector(".cartoph__img2")

descBtn2.addEventListener('click', () => {
    desc1.style.display = 'none'
    desc2.style.display = 'block'
    line2.style.backgroundColor = '#02E502'
    line1.style.backgroundColor = '#02e50262'
    imgTab1.style.display = 'none'
    imgTab2.style.display = 'block'
})

descBtn1.addEventListener('click', () => {
    desc1.style.display = 'block'
    desc2.style.display = 'none'
    line2.style.backgroundColor = '#02e50262'
    line1.style.backgroundColor = '#02E502'
    imgTab1.style.display = 'block'
    imgTab2.style.display = 'none'
})

