$(function() {

  $(document).ready(function() {

    var scrollOffset = $('.scroll-menu').offset();

    $(window).scroll(function() {
      if ($(document).scrollTop() > scrollOffset.top) {
        $('.scroll-menu').addClass('scroll-fixed');
      }
      else {
        $('.scroll-menu').removeClass('scroll-fixed');
      }
    });
  });
});
