const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')
const circles = document.querySelectorAll('.circle ')

// variable pour increment le btn next on l'initialise à 1
let currentActive = 1

// Avec l'event  Click on incremente ou desicremente
next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }
  update()
})

//creation de la fonction Update
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  // on vient chercher la classe active pour faire avancer la progresse barre qui est a 0% dans le css jusque 100% selon l'action.

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%' // ne pas oublié le % pour aller rechercher la proprieter CSS et les deux -1 pour que la barre soit exactement sur la bulle et non à sa valeur absolue
  if (currentActive === 1) {
    prev.disabled = true
  } else if (currentActive === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
