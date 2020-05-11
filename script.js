let headerToggler = document.querySelector('.header_bd_icon');
let headerSubNav = document.querySelector('.header_menu');

headerToggler.addEventListener('click', () => {
  if (headerSubNav.getBoundingClientRect().height < 323) {
    headerSubNav.style.height = '323px';
  } else {
    headerSubNav.style.height = '0';
  }
});
