

const circle = document.querySelector('.circle')
let myCircle;
const tables = document.querySelectorAll('.table')
let firstDay;
let secondtDay;

// table.addEventListener('scroll', seeCircle)



class TableTour {
  constructor(id,height, heightEnd){
    this.id = id
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}

class Circle {
  constructor(id,height, heightEnd){
    this.id = id
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
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
  myCircle = new Circle(num,r.y,r.bottom)
}

function checkObjTable(tables){
  if(firstDay && secondtDay) {
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
      secondtDay.heightBegin = r.y;
      secondtDay.heightEnd = r.bottom;
    }
    num++
  }
}

function createNewObjTable(tables){
  let num = 1;
  for(let table of tables) {
  let r = table.getBoundingClientRect();
  num==1 ? firstDay = new TableTour(num,r.y,r.bottom) : secondtDay = new TableTour(num,r.y,r.bottom)
  num++
  }
}

window.addEventListener('scroll', () => {
  checkObjTable(tables)

})