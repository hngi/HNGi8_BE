// sidebar toggle

const toggler = document.getElementById('sidebarToggler');
const sidebar = document.getElementById('sidebar');

toggler.addEventListener('click', () => {
  sidebar.classList.toggle('hide');
});

window.addEventListener('click', (e) => {
  // console.log(e.target);
  if (!sidebar.contains(e.target) && !toggler.contains(e.target)) {
    sidebar.classList.add('hide');
  }
});
