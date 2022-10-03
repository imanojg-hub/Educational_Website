const navbar = document.querySelector('.navbar')
const hiddenLinks = document.querySelector('.links-hidden')
const menuButton = document.querySelector('.menu-btn')

menuButton.addEventListener('click', () => {
  hiddenLinks.classList.toggle('block')
})

// window.addEventListener('click', () => {
//   if (hiddenLinks.classList.contains('block')) {
//     hiddenLinks.classList.remove('block')
//   }
// })
