

const circle = document.querySelector('.circle')
const tables = document.querySelectorAll('.table')
let firstDay;
let secondtDay;

// table.addEventListener('scroll', seeCircle)

function seeCircle(){
    console.log('1111')
    // circle.classList.contains('.hide-circle') ? circle.classList.remove('.hide-circle') : circle.classList.add('.hide-circle')
}

class TableTour {
  constructor(id,height, heightEnd){
    this.id = id
    this.heightBegin = height
    this.heightEnd = heightEnd
  }
}


let num = 1;
for(let table of tables) {
  let r = table.getBoundingClientRect();
  num==1 ? firstDay = new TableTour(num,r.y,r.bottom) : secondtDay = new TableTour(num,r.y,r.bottom)
  num++
}

function createNewObjTable(tables){
  let num = 1;
  for(let table of tables) {
  let r = table.getBoundingClientRect();
  num==1 ? firstDay = new TableTour(num,r.y,r.bottom) : secondtDay = new TableTour(num,r.y,r.bottom)
  num++
  }
}
console.log(firstDay)
console.log(secondtDay)