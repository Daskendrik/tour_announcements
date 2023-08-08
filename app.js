
class Gallery {
    constructor(id) {
        this.gallery = document.querySelector(`#${id}`)
        this.upBtn = firstGallery.querySelector('.up-button')
        this.downBtn = firstGallery.querySelector('.down-button')
        this.sidebar = firstGallery.querySelector('.sidebar')
        this.mainSlide = firstGallery.querySelector('.main-slide')
        this.slidesCount = mainSlide.querySelectorAll('div').length
        this.container = firstGallery.querySelector('.gallery')
    }
}

// первая галлерея
const firstGallery = document.querySelector('#firstGallery')
let upBtn = firstGallery.querySelector('.up-button')
let downBtn = firstGallery.querySelector('.down-button')

let sidebar = firstGallery.querySelector('.sidebar')
let mainSlide = firstGallery.querySelector('.main-slide')
let slidesCount = mainSlide.querySelectorAll('div').length
let container = firstGallery.querySelector('.gallery')

let activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1) * 100}%`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    console.log(slidesCount)
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}

// вторая галлерея
const secondGallery = document.querySelector('#secondGallery')
upBtn = secondGallery.querySelector('.up-button')
downBtn = secondGallery.querySelector('.down-button')

sidebar = secondGallery.querySelector('.sidebar')
mainSlide = secondGallery.querySelector('.main-slide')
slidesCount = mainSlide.querySelectorAll('div').length
container = secondGallery.querySelector('.gallery')

activeSlideIndex = 0

sidebar.style.top = `-${(slidesCount-1) * 100}%`

upBtn.addEventListener('click', () => {
    changeSlide('up')
})
downBtn.addEventListener('click', () => {
    changeSlide('down')
})

function changeSlide(direction){
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }
    console.log(slidesCount)
    const height = container.clientHeight
    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}