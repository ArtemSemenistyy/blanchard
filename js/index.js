document.addEventListener('DOMContentLoaded', function () {

  //tab+dropdown(header)

  const dropdownButtons = document.querySelectorAll('.header-bottom__btn');
  const dropdownMenus = document.querySelectorAll('.header__dropdown-list');

  dropdownButtons.forEach(el => {
    el.addEventListener('click', (e) => {
      const curr = e.currentTarget;
      const dropMenu = curr.closest('.dropdown').querySelector('.header__dropdown-list');
      dropdownButtons.forEach(el => { el.classList.remove(('header-bottom__btn-active')) });
      dropdownMenus.forEach(el => { el.classList.remove('dropdown-active') })

      if (dropMenu) {
        dropMenu.classList.toggle('dropdown-active');
        curr.classList.add('header-bottom__btn-active');
      }
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('dropdown') && !e.target.classList.contains('header-bottom__btn')) {
      dropdownButtons.forEach(el => { el.classList.remove(('header-bottom__btn-active')) });
      dropdownMenus.forEach(el => { el.classList.remove(('dropdown-active')) })
    }
  });

  //Custom select

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

  //Swiper

  var swiper = new Swiper(".section-gallery__swiper", {
    slidesPerView: 3,
    slidesPerColumn: 2,
    slidesPerGroup: 3,
    spaceBetween: 50,
    allowTouchMove: false,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //Smooth scroll

  $(document).ready(function(){
     $("a.header__nav-link").click(function(){
       $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top + "px"
       }, {
         duration: 700,
         easing: "swing"
       });
       return false;
     });
  });
});
