const search = document.querySelector('.search');
const btn = document.querySelector('.btnSearch');
const input = document.querySelector('.input');

btn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus()
})


const bg = document.querySelector('.blur')

let load = 0
let int = setInterval(blurring, 10)

function blurring(){
  load++
  if (load > 99){
    clearInterval(int)
  }

  bg.style.filter = `blur(${scale(load, 0, 50, 10, 0)}px)`

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
