document.addEventListener('DOMContentLoaded', function () {
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

  const element = document.querySelector('select');
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
  });

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
});
