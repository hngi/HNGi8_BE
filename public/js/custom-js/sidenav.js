// sidebar toggle

const toggler = document.getElementById('sidebarToggler')
const sidebar = document.getElementById('sidebar')

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('show')
})

window.addEventListener('click', (e) => {
  // console.log(e.target);
  if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
    sidebar.classList.remove('show')
  }
})