$(function () {
    $('.nav li').mouseover(function () {
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav li').mouseout(function () {
        $(this).children('.sub').stop().slideUp();
    });
    // sel_but1 START
    $('.sel_but1').mouseover(function () {
        $('.con3_back').css({
            'background': '#202a2d',
            'color': '#fff',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').show();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but1').mouseout(function () {
        $('.con3_back').css({
            'background': '#202a2d',
            'color': 'rgba(255,255,255,0.3)'
        });
        $('.con3_colortext h3:nth-child(1)').show();
    });
    // sel_but1 END


    // sel_but2 START
    $('.sel_but2').mouseover(function () {
        $('.con3_back').css({
            'background': '#4c3831',
            'color': '#fff',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').show();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but2').mouseout(function () {
        $('.con3_back').css({
            'background': '#4c3831',
            'color': 'rgba(255,255,255,0.3)'
        });
        $('.con3_colortext h3:nth-child(2)').show();
    });
    // sel_but2 END


    // sel_but3 START
    $('.sel_but3').mouseover(function () {
        $('.con3_back').css({
            'background': '#6494a8',
            'color': '#fff',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').show();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but3').mouseout(function () {
        $('.con3_back').css({
            'background': '#6494a8',
            'color': 'rgba(255,255,255,0.3)'
        });
        $('.con3_colortext h3:nth-child(3)').show();
    });
    // sel_but3 END


    // sel_but4 START
    $('.sel_but4').mouseover(function () {
        $('.con3_back').css({
            'background': '#745449',
            'color': '#fff',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').show();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();

    });
    $('.sel_but4').mouseout(function () {
        $('.con3_back').css({
            'background': '#745449',
            'color': 'rgba(255,255,255,0.3)'
        });
        $('.con3_colortext h3:nth-child(4)').show();
    });
    // sel_but4 END



    // sel_but5 START
    $('.sel_but5').mouseover(function () {
        $('.con3_back').css({
            'background': '#bbd5dd',
            'color': '#745449',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').show();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but5').mouseout(function () {
        $('.con3_back').css({
            'background': '#bbd5dd',
            'color': 'rgba(116, 84, 73,0.3)'
        });
        $('.con3_colortext h3:nth-child(5)').show();
    });
    // sel_but5 END



    // sel_but6 START
    $('.sel_but6').mouseover(function () {
        $('.con3_back').css({
            'background': '#ddcdc0',
            'color': '#745449',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').show();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but6').mouseout(function () {
        $('.con3_back').css({
            'background': '#ddcdc0',
            'color': 'rgba(116, 84, 73,0.3)'
        });
        $('.con3_colortext h3:nth-child(6)').show();
    });
    // sel_but6 END


    // sel_but7 START
    $('.sel_but7').mouseover(function () {
        $('.con3_back').css({
            'background': '#efbc67',
            'color': '#745449',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').show();
        $('.con3_colortext h3:nth-child(8)').hide();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but7').mouseout(function () {
        $('.con3_back').css({
            'background': '#efbc67',
            'color': 'rgba(116, 84, 73,0.3)'
        });
        $('.con3_colortext h3:nth-child(7)').show();
    });
    // sel_but7 END


    // sel_but8 START
    $('.sel_but8').mouseover(function () {
        $('.con3_back').css({
            'background': '#f5ccbe',
            'color': '#745449',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(1)').hide();
        $('.con3_colortext h3:nth-child(2)').hide();
        $('.con3_colortext h3:nth-child(3)').hide();
        $('.con3_colortext h3:nth-child(4)').hide();
        $('.con3_colortext h3:nth-child(5)').hide();
        $('.con3_colortext h3:nth-child(6)').hide();
        $('.con3_colortext h3:nth-child(7)').hide();
        $('.con3_colortext h3:nth-child(8)').show();
        $('.con3_colortext h3:nth-child(9)').hide();
    });
    $('.sel_but8').mouseout(function () {
        $('.con3_back').css({
            'background': '#f5ccbe',
            'color': 'rgba(116, 84, 73,0.3)'
        });
        $('.con3_colortext h3:nth-child(8)').show();
    });
    // sel_but8 END

    // sel_but9 START
    $('.sel_but9').mouseover(function () {
        $('.con3_back').css({
            'background': '#ffdaa4',
            'color': '#745449',
            'transition': 'all 0.5s linear'
        });
        $('.con3_colortext h3:nth-child(-n+8)').hide();
        $('.con3_colortext h3:nth-child(9)').show();
    });
    $('.sel_but9').mouseout(function () {
        $('.con3_back').css({
            'background': '#ffdaa4',
            'color': 'rgba(116, 84, 73,0.3)'
        });
        $('.con3_colortext h3:nth-child(9)').show();
    });
    // sel_but9 END


    // MMscent 스와이퍼

    // 시작버튼있는페이지

    $('.mmtext_inner a').mouseover(function () {
        $('.mmtext_inner h1').css({
            'color': '#745449',
            'border': '#745449 5px solid'
        });
    });
    $('.mmtext_inner a').mouseout(function () {
        $('.mmtext_inner h1').css({
            'color': '#fff',
            'border': '#fff 5px solid'
        });
    });

    $('.mmtext_inner a').click(function () {
        $('.mySwiper').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('#mmscent').css({
            'opacity': '0',
            'z-index': '-1'
        });
        $('.mySwiper2').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });

    // 향선택페이지
    $('.back_but').click(function () {
        $('.mySwiper').css({
            'opacity': '0',
            'z-index': '-1'
        });
        $('#mmscent').css({
            'opacity': '1',
            'z-index': '10'
        });
    });
    $('.a_but1').click(function () {
        $('.mySwiper1').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('.mySwiper,.mySwiper2,.mySwiper3,.mySwiper4,.mySwiper5').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });
    $('.a_but2').click(function () {
        $('.mySwiper2').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('.mySwiper,.mySwiper1,.mySwiper3,.mySwiper4,.mySwiper5').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });
    $('.a_but3').click(function () {
        $('.mySwiper3').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('.mySwiper,.mySwiper1,.mySwiper2,.mySwiper4,.mySwiper5').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });
    $('.a_but4').click(function () {
        $('.mySwiper4').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('.mySwiper,.mySwiper1,.mySwiper2,.mySwiper3,.mySwiper5').css({
            'opacity': '0',
            'z-index': '-1'
        });
    }); $('.a_but5').click(function () {
        $('.mySwiper5').css({
            'opacity': '1',
            'z-index': '10'
        });
        $('.mySwiper,.mySwiper1,.mySwiper2,.mySwiper3,.mySwiper4').css({
            'opacity': '0',
            'z-index': '-1'
        });
    });

    // 향선택페이지_1
    $('.back_but2').click(function () {
        $('.mySwiper1,.mySwiper2,.mySwiper3,.mySwiper4,.mySwiper5').css({
            'opacity': '0',
            'z-index': '1'
        });
        $('.mySwiper').css({
            'opacity': '1',
            'z-index': '10'
        });
    });
});

// event 페이지 시작

$(function () {
    $('.membership').click(function () {
        $('#membership').fadeIn();
        $('.box').hide();
        $('.pre_but').show();
    });
    $('.pre_but').click(function () {
        $('#membership').hide();
        $('.box').fadeIn();
        $('.pre_but').hide();
    });
});


// 상세페이지 js 작업
$(function () {
    $(document).ready(function () {
        $('.ul_memo li:nth-child(1) a').click();
    });
    $('.ul_memo li:nth-child(1) a').click(function () {
        $('.ul_memo01').fadeIn();
        $('.ul_memo02').hide();
        $('.ul_memo03').hide();
        $('.ul_memo li:nth-child(1) a').css({
            'font-weight': '900',
            'border-bottom': '3px solid #745449'
        });
        $('.ul_memo li:nth-child(2) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
        $('.ul_memo li:nth-child(3) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
    });
    $('.ul_memo li:nth-child(2) a').click(function () {
        $('.ul_memo01').hide();
        $('.ul_memo02').fadeIn();
        $('.ul_memo03').hide();
        $('.ul_memo li:nth-child(1) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
        $('.ul_memo li:nth-child(2) a').css({
            'font-weight': '900',
            'border-bottom': '3px solid #745449'
        });
        $('.ul_memo li:nth-child(3) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
    });
    $('.ul_memo li:nth-child(3) a').click(function () {
        $('.ul_memo01').hide();
        $('.ul_memo02').hide();
        $('.ul_memo03').fadeIn();
        $('.ul_memo li:nth-child(1) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
        $('.ul_memo li:nth-child(2) a').css({
            'font-weight': '400',
            'border-bottom': 'none'
        });
        $('.ul_memo li:nth-child(3) a').css({
            'font-weight': '900',
            'border-bottom': '3px solid #745449'
        });
    });
    $('.ul_ml li:nth-child(1) a').click(function () {
        $('.ul_won li:nth-child(1)').fadeIn()
        $('.ul_won li:nth-child(2)').hide();
        $('.ul_ml li:nth-child(1) a').css({
            'font-weight': '900'
        });
        $('.ul_ml li:nth-child(2) a').css({
            'font-weight': '400'
        });
    });
    $('.ul_ml li:nth-child(2) a').click(function () {
        $('.ul_won li:nth-child(1)').hide();
        $('.ul_won li:nth-child(2)').fadeIn();
        $('.ul_ml li:nth-child(1) a').css({
            'font-weight': '400'
        });
        $('.ul_ml li:nth-child(2) a').css({
            'font-weight': '900'
        });
    });
    $('.cart_but').click(function () {
        $('.cart_text').fadeIn(300);
    });
    $('.cart_text_inner a').click(function () {
        $('.cart_text').fadeOut();
    });
    $('.header_right>li:first-child>a').click(function () {
        $('.language').slideDown(500);
        $('.user').slideUp(500);
        $('.search').slideUp(500);
    });
    $('.header_right>li:nth-child(5)>a').click(function () {
        $('.language').slideUp(500);
        $('.user').slideDown(500);
        $('.search').slideUp(500);
    });
    $('.header_right>li:nth-child(4)>a').click(function () {
        $('.language').slideUp(500);
        $('.user').slideUp(500);
        $('.search').slideDown(500);
    });
    
});

// popup 열고닫기
$(document).mouseup(function (e){
	if($(".language,.user,.search,.cart_text").has(e.target).length === 0){
		$(".language,.user,.search").slideUp(500);
        $(".cart_text").fadeOut();
	}
});
$(document).keydown(function(e){
	//keyCode 구 브라우저, which 현재 브라우저
    var code = e.keyCode || e.which;
 
    if (code == 27) { // 27은 ESC 키번호
        $('.language,.user,.search').slideUp(500);
        $(".cart_text").fadeOut();
    }
});