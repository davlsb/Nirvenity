const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

const targetDiv1 = document.getElementById("firstQ");
const targetDiv2 = document.getElementById("secondQ");
const targetDiv3 = document.getElementById("thirdQ");
const targetDiv4 = document.getElementById("fourthQ");


let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }

    showQuizQ(currentActive)

    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }

    showQuizQ(currentActive)

    update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx <currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circles.length){
        next.disabled =true
    } else {
        prev.disabled = false
        next.disabled = false
    }

}

function showQuizQ(num){


    if (currentActive === 1) {
        targetDiv1.style.display = "block";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";
    }

    if (currentActive === 2) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "block";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "none";
      }

    if (currentActive === 3) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "block";
        targetDiv4.style.display = "none";
      }

    if (currentActive === 4) {
        targetDiv1.style.display = "none";
        targetDiv2.style.display = "none";
        targetDiv3.style.display = "none";
        targetDiv4.style.display = "block";
      }

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
