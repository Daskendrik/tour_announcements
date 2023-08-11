

const circle = document.querySelector('.circle')
const table = document.querySelector('.table')
console.log(table)

// table.addEventListener('scroll', seeCircle)

function seeCircle(){
    console.log('1111')
    // circle.classList.contains('.hide-circle') ? circle.classList.remove('.hide-circle') : circle.classList.add('.hide-circle')
}


var Visible = function (target) {
    // Все позиции элемента
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      console.clear();
      console.log('Вы видите элемент :)');
    } else {
      // Если элемент не видно, то запускаем этот код
      console.clear();
    };
  };


  window.addEventListener("scroll", Visible(table))
// function findCircle(){
//     const leftCircle = document.querySelectorAll('.circle-left')
//     const rightCircle = document.querySelectorAll('.circle-right')
//     const allCircle



//     console.log(allCircle)
// }

// function findCircleBegin(){

// }

// function findCircleEnd(){

// }


// findCircle()