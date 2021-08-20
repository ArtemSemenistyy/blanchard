document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.header-bottom__btn').forEach(function (tabsBtn) {
    tabsBtn.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.header-bottom__dropdown').forEach(function (tabContent) {
        tabContent.classList.remove('header-bottom__dropdown-active');
      });

      document.querySelector(`[data-target="${path}"]`).classList.add('header-bottom__dropdown-active');

      document.querySelectorAll('.header-bottom__btn').forEach(function (tabContent) {
        tabContent.classList.remove('header-bottom__btn-active');
      });

      document.querySelector(`[data-path="${path}"]`).classList.add('header-bottom__btn-active');
    });
  });

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.header-bottom__dropdown') && !target.closest('.header-bottom__btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        document.querySelector('.header-bottom__dropdown').classList.remove('header-bottom__dropdown-active') // то закрываем окно навигации, удаляя активный класс
    };
  });
});
