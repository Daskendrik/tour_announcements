const circle = document.querySelector('.circle')
const tables = document.querySelectorAll('.table')
const blokSecondDay = document.querySelector('.day-num-two')
const cityNames =  document.querySelectorAll('.head-block-top h3')
const cityBlocks =  document.querySelectorAll('.head-block-top h3')
const cityKirovsk = document.querySelector('#blockKirovsk')
const cityMurmansk = document.querySelector('#blockMurmansk')
const cityTeriberka = document.querySelector('#blockTeriberka')
let firstDay;
let secondDay;
let myCircle;
let lineDay;


for (const cityName of cityNames) {
    console.log(cityName)
    cityName.addEventListener('click',() => activeBlock(event))
}

function activeBlock(event) {
    console.log(event.target)
    if(!event.target.classList.contains('active-city')) {
        addInactiveCityName()
        let city = event.target.id
        reloadActiveBlock(city)
        // addInactiveBlock()
        event.target.classList.add('active-city')
    }
}

function addInactiveCityName(){
    for (const cityName of cityNames) {
        cityName.classList.remove('active-city')
    } 
}

function reloadActiveBlock(city) {
  console.log(city)
  let activeBlock = document.querySelector('.active-block')
  activeBlock.classList.remove('active-block')
  switch (city) {
    case 'kirovsk':
      cityKirovsk.classList.add('active-block')
      break;
    case 'murmansk':
      console.log(cityMurmansk)
      cityMurmansk.classList.add('active-block')
      break;
    case 'teriberka':
      cityTeriberka.classList.add('active-block')
      break;
    default:
      break;
  }
}


//Реализация кружка
class TableTour {
  constructor(id,height, heightEnd, width, left){
    this.id = id
    this.heightBegin = height
    this.heightEnd = heightEnd
    this.width = width
    this.left = left
  }
}

class Circle {
  constructor(height, heightEnd, width){
    this.heightBegin = height
    this.heightEnd = heightEnd
    this.width = width
  }
}

class LineDay {
  constructor(height, heightEnd){
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}

window.addEventListener('scroll', () => {
  checkObjTable(tables)
  checkMyCircle(circle)
  checkLineDay(blokSecondDay)
  reloadHidden()
})

function checkLineDay(blokSecondDay){
  if(lineDay) {
    reloadLineDay(blokSecondDay)
  } else {
    createNewLineDay(blokSecondDay)
  }
}

function reloadLineDay(blokSecondDay){
  let r = blokSecondDay.getBoundingClientRect();
  lineDay.heightBegin = r.y;
  lineDay.heightEnd = r.bottom;
}

function createNewLineDay(blokSecondDay){
  console.log(blokSecondDay)
  let r = blokSecondDay.getBoundingClientRect();
  lineDay = new LineDay(r.y,r.bottom)
}

function checkMyCircle(circle){
  if(myCircle) {
    reloadMyCircle(circle)
  } else {
    createNewMyCircle(circle)
  }
}

function reloadMyCircle(circle){
  let r = circle.getBoundingClientRect();
  myCircle.heightBegin = r.y;
  myCircle.heightEnd = r.bottom;
  let left = Number(firstDay.width/2)-(myCircle.width/4)+firstDay.left
  circle.style.left = `${left}px`
}

function createNewMyCircle(circle){
  let r = circle.getBoundingClientRect();
  myCircle = new Circle(r.y,r.bottom,r.width)
  let left = Number(firstDay.width/2)-(myCircle.width/4)+firstDay.left
  circle.style.left = `${left}px`
}

function checkObjTable(tables){
  if(firstDay && secondDay) {
    reloadObjTable(tables)
  } else {
    createNewObjTable(tables)
  }
}

function reloadObjTable(tables){
  let num = 1;
  for(let table of tables) {
    let r = table.getBoundingClientRect();
    if (num==1){
      firstDay.heightBegin = r.y;
      firstDay.heightEnd = r.bottom;
      firstDay.width = r.width;
      firstDay.left = r.left;
    }else {
      secondDay.heightBegin = r.y;
      secondDay.heightEnd = r.bottom;
      secondDay.width = r.width;
      secondDay.left = r.left;
    }
    num++
  }
}

function createNewObjTable(tables){
  let num = 1;
  for(let table of tables) {
  let r = table.getBoundingClientRect();
  num==1 ? firstDay = new TableTour(num,r.y,r.bottom, r.width, r.left) : secondDay = new TableTour(num,r.y,r.bottom, r.width, r.left)
  num++
  }
}

function reloadHidden(){
  if(myCircle.heightBegin <= lineDay.heightBegin) {
    checkCircleOnFirstTable()
  } else {
    checkCircleOnSecondTable()
  }
  
}

function checkCircleOnFirstTable(){
  if(myCircle.heightBegin >= firstDay.heightBegin && myCircle.heightBegin <= firstDay.heightEnd){ 
    removeHidden() 
  } else {
    addHidden()
  }
}

function checkCircleOnSecondTable(){
  if(myCircle.heightBegin >= secondDay.heightBegin && myCircle.heightBegin <= secondDay.heightEnd){ 
    removeHidden() 
  } else {
    addHidden()
  }
}

function addHidden(){
  circle.classList.add('hide-circle')
}

function removeHidden(){
  circle.classList.remove('hide-circle')
}


//Код взяла с https://webgolovolomki.com/poyavlenie-elementov-pri-skrolle/  - лень было придумывать = )
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('opacity-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.opacity');

for (let elm of elements) {
  observer.observe(elm);
}




const slides = document.querySelectorAll('.slide') //берем все слайды

for (const slide of slides){
    slide.addEventListener('click',() => {
        clearActiveClasses()
        slide.classList.add('active')
    })
}

function clearActiveClasses(){
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}