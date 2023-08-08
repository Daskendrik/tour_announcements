
class Gallery {
    constructor(id) {
        this.gallery = document.querySelector(`#${id}`)
        this.upBtn = this.gallery.querySelector('.up-button')
        this.downBtn = this.gallery.querySelector('.down-button')
        this.sidebar = this.gallery.querySelector('.sidebar')
        this.mainSlide = this.gallery.querySelector('.main-slide')
        this.slidesCount = this.mainSlide.querySelectorAll('div').length
        this.container = this.gallery.querySelector('.gallery')
        this.sidebar.style.top = `-${(this.slidesCount-1) * 100}%`
        this.activeSlideIndex = 0
    }

    changeSlide(direction){
        if(direction === 'up') {
            this.activeSlideIndex++
            if(this.activeSlideIndex === this.slidesCount) {
                this.activeSlideIndex = 0
            }
        } else if(direction === 'down') {
            this.activeSlideIndex--
            if (this.activeSlideIndex < 0) {
                this.activeSlideIndex = this.slidesCount - 1
            }
        }
        console.log(this.slidesCount)
        const height = this.container.clientHeight
        this.mainSlide.style.transform = `translateY(-${this.activeSlideIndex * height}px)`
        this.sidebar.style.transform = `translateY(${this.activeSlideIndex * height}px)`
    }

}

const firstGallery = new Gallery('firstGallery')
firstGallery.upBtn.addEventListener('click', () => {
    firstGallery.changeSlide('up')
})
firstGallery.downBtn.addEventListener('click', () => {
    firstGallery.changeSlide('down')
})

const secondGallery = new Gallery('secondGallery')
secondGallery.upBtn.addEventListener('click', () => {
    secondGallery.changeSlide('up')
})
secondGallery.downBtn.addEventListener('click', () => {
    secondGallery.changeSlide('down')
})