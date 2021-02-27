$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__top-list,.header__bottom').toggleClass('active');
    $('body').toggleClass('lock');
  });

  $('#ru').on('click', function () {
    $(this).toggleClass('active');
    $('#en').removeClass('active');
    $('#esp').removeClass('active');
  });

  $('#esp').on('click', function () {
    $(this).toggleClass('active');
    $('#en').removeClass('active');
    $('#ru').removeClass('active');
  });

  $('#en').on('click', function () {
    $(this).toggleClass('active');
    $('#ru').removeClass('active');
    $('#esp').removeClass('active');
  });

});
