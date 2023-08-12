const circle = document.querySelector('.circle')
let myCircle;
const tables = document.querySelectorAll('.table')
let firstDay;
let secondDay;

const blokSecondDay = document.querySelector('.day-num-two')
console.log(blokSecondDay)
let lineDay;

// table.addEventListener('scroll', seeCircle)



class TableTour {
  constructor(id,height, heightEnd){
    this.id = id
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}

class Circle {
  constructor(height, heightEnd){
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}

class LineDay {
  constructor(height, heightEnd){
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}

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
}

function createNewMyCircle(circle){
  let r = circle.getBoundingClientRect();
  myCircle = new Circle(r.y,r.bottom)
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
    }else {
      secondDay.heightBegin = r.y;
      secondDay.heightEnd = r.bottom;
    }
    num++
  }
}

function createNewObjTable(tables){
  let num = 1;
  for(let table of tables) {
  let r = table.getBoundingClientRect();
  num==1 ? firstDay = new TableTour(num,r.y,r.bottom) : secondDay = new TableTour(num,r.y,r.bottom)
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


window.addEventListener('scroll', () => {
  checkObjTable(tables)
  checkMyCircle(circle)
  checkLineDay(blokSecondDay)
  reloadHidden()
})