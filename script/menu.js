//메뉴 클릭 시 체크박스 해제
$(function () {
    $(".sidebar a").click(function () {
        $('#menuicon').prop('checked', false);
    });
});

//숨긴 메뉴 보이기 
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.m_nav3').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta 
    if (Math.abs(lastScrollTop - st) <= delta) return;

    // If they scrolled down and are past the navbar, add class .nav-up. 
    // This is necessary so you never see what is "behind" the navbar. 
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down 
        $('.m_nav').removeClass('nav-down').addClass('nav-up');
        $('.m_nav2').removeClass('nav-down').addClass('nav-up');
        $('.m_nav3').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up 
        if (st + $(window).height() < $(document).height()) {
            $('.m_nav').removeClass('nav-up').addClass('nav-down');
            $('.m_nav2').removeClass('nav-up').addClass('nav-down');
            $('.m_nav3').removeClass('nav-up').addClass('nav-down');
        }
    }

    lastScrollTop = st;
}

