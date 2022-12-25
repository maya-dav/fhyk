let count = document.querySelector('.main')
let counterNumber = 0;

function counter(){
  counterNumber++
  count.innerHTML = counterNumber
  if(counterNumber >= 100){
    clearInterval(stop)
  }
}

let stop = setInterval(function(){
  counter()
}, 400);
