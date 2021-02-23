let goTopBtn = document.querySelector('.backToTop')

window.addEventListener('scroll', trackScroll)
goTopBtn.addEventListener('click', topFunction)

window.onscroll = function showMenu() {
  let menu = document.querySelector('#menu')
  let heightOverlay = document.querySelector('.overlay').clientHeight
  if(window.pageYOffset > heightOverlay){
    menu.classList.add('menu-fixed')
  } else{
    menu.classList.remove('menu-fixed')
  }
}

function trackScroll() {
  let scrolled = window.pageYOffset
  let coords = document.documentElement.clientHeight

  if (scrolled > coords) {
    goTopBtn.classList.add('backToTopShow')
  } else{
    goTopBtn.classList.remove('backToTopShow')
  }
}

function topFunction(){
  setTimeout(()=>{
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
  }, 100)
}

document.body.onload = function(){

  setTimeout(function() {
    var preloader = document.getElementById('page-preloader');
    if( !preloader.classList.contains('done') )
    {
      preloader.classList.add('done')
    }
  }, 1000);

}








