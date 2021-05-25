document.querySelector('.bars button').addEventListener('click', () => {
  document.querySelector('.nav-small-screen').style.display = 'block'
})

document.querySelector('.close').addEventListener('click', () => {
  document.querySelector('.nav-small-screen').style.display = 'none'
})
