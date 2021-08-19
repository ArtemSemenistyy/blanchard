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
});
