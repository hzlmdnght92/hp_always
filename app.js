const splashText = document.querySelector('#splash-text')
const splashImage = document.querySelector('#splash-img')
const pageWrapper = document.querySelector('#page-wrapper')

let imgClick = 0

splashImage.addEventListener('click', () => {
    imgClick += 1
    splashText.style.display = "block"
    if (imgClick > 1) {
        splashText.style.display = "none"
        splashImage.style.display = "none"
        pageWrapper.style.filter = "blur(0px)"
    }
})