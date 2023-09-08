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
        const height = this.container.clientHeight
        this.mainSlide.style.transform = `translateY(-${this.activeSlideIndex * height}px)`
        this.sidebar.style.transform = `translateY(${this.activeSlideIndex * height}px)`
    }

}

const firstGallery = new Gallery('firstGallery')
const secondGallery = new Gallery('secondGallery')
function addListEvent(...arg) {
    arg.map(item => addEvent(item))
    function addEvent(gallery) {
        gallery.upBtn.addEventListener('click', () => {
            gallery.changeSlide('up')
        })
        gallery.downBtn.addEventListener('click', () => {
            gallery.changeSlide('down')
        })
          
    }
}

addListEvent(firstGallery, secondGallery)

let playfirstGallery = setInterval(() => firstGallery.changeSlide('up'),5000)
let timePlaySecondGallery = setTimeout(() => {
    let playsecondGallery = setInterval(() => secondGallery.changeSlide('up'),5000)
}, 1000)