const panels = document.querySelectorAll('.panel')


panels.forEach(panel => {

  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')

  })

})

function removeActiveClasses(){

  panels.forEach(panel => {

    panel.classList.remove('active')

  })

}


const bg2 = document.querySelector('.blur2')

let load = 0
let int = setInterval(blurring, 10)

function blurring(){
  load++
  if (load > 99){
    clearInterval(int)
  }

  bg2.style.filter = `blur(${scale(load, 0, 50, 10, 0)}px)`

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
