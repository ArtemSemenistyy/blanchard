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

  $(document).ready(function () {
    $("a.header__nav-link").click(function () {
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 700,
        easing: "swing"
      });
      return false;
    });
  });

  //Catalog tab

  document.querySelectorAll('.section-catalog__lang').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.section-catalog__tab').forEach(function (tabContent) {
        tabContent.classList.remove('section-catalog__tab-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__tab-active');

      document.querySelectorAll('.section-catalog__lang').forEach(function (tabContent) {
        tabContent.classList.remove('section-catalog__lang-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('section-catalog__lang-active');
    });
  });

  //Accordion

  $(function () {
    $(".accordion").accordion();
  });

  $(function () {
    $(".g").accordion();
  });

  //Accordion tab

  const accordionButtons = document.querySelectorAll('.section-catalog__item-btn');
  const accordionMenus = document.querySelectorAll('.section-catalog__item-description');

  accordionButtons.forEach(el => {
    el.addEventListener('click', (e) => {
      const current = e.currentTarget;
      const accordionMenu = current.closest('.section-catalog__item-figure').querySelector('.section-catalog__item-description');
      accordionButtons.forEach(el => { el.classList.remove(('section-catalog__item-btn-active')) });
      accordionMenus.forEach(el => { el.classList.remove('section-catalog__item-description-active') })

      if (accordionMenu) {
        accordionMenu.classList.toggle('section-catalog__item-description-active');
        current.classList.add('section-catalog__item-btn-active');
      }
    });
  });

  //Show all button

  document.querySelector('.section-events__show-all-btn').addEventListener('click', function() {
    document.querySelectorAll('.section-events__item-hidden').forEach(function (hiddenItem) {
      hiddenItem.classList.toggle('section-events__item-hidden');
    });

    document.querySelector('.section-events__show-all-btn').classList.add('section-events__show-all-btn-hidden');
  });
});
