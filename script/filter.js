$(function () {
    $('.li_all').click(function () {
        $('.product_preview ul li').fadeIn();
        $('.product_b_left,.sticky_text').fadeIn();
        $('.product_t_right').show();
        $('.hide_back').hide();
        $('hr').show();
        $('.li_all').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.product_t_right ul li a').not('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_all').mouseover(function () {
        $('.li_all').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_all').mouseout(function () {
        $('.li_all').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_green').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back1').hide();
        $('.pro_back1').fadeIn();
        $('hr').hide();
        $('.green').fadeIn();
        $('.product_preview ul li').not('.green').fadeOut();
        $('.li_green').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_green').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_green').mouseover(function () {
        $('.li_green').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_green').mouseout(function () {
        $('.li_green').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_woody').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back2').hide();
        $('.pro_back2').fadeIn();
        $('hr').hide();
        $('.woody').fadeIn();
        $('.product_preview ul li').not('.woody').fadeOut();
        $('.li_woody').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_woody').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_woody').mouseover(function () {
        $('.li_woody').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_woody').mouseout(function () {
        $('.li_woody').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_floral').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back3').hide();
        $('.pro_back3').fadeIn();
        $('hr').hide();
        $('.floral').fadeIn();
        $('.product_preview ul li').not('.floral').fadeOut();
        $('.li_floral').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_floral').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_floral').mouseover(function () {
        $('.li_floral').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_floral').mouseout(function () {
        $('.li_floral').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_citrus').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back4').hide();
        $('.pro_back4').fadeIn();
        $('hr').hide();
        $('.citrus').fadeIn();
        $('.product_preview ul li').not('.citrus').fadeOut();
        $('.li_citrus').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_citrus').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_citrus').mouseover(function () {
        $('.li_citrus').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_citrus').mouseout(function () {
        $('.li_citrus').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_musk').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back5').hide();
        $('.pro_back5').fadeIn();
        $('hr').hide();
        $('.musk').fadeIn();
        $('.product_preview ul li').not('.musk').fadeOut();
        $('.li_musk').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_musk').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_musk').mouseover(function () {
        $('.li_musk').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_musk').mouseout(function () {
        $('.li_musk').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
    $('.li_powdery').click(function () {
        $('.product_b_left,.sticky_text').hide();
        $('.product_t_right').not('body section:nth-child(4) .product_t_right').hide()
        $('.hide_back').not('pro_back6').hide();
        $('.pro_back6').fadeIn();
        $('hr').hide();
        $('.powdery').fadeIn();
        $('.product_preview ul li').not('.powdery').fadeOut();
        $('.li_powdery').css({
            'font-weight': '900',
            'border' : '2px solid #745449',
            'border-radius' : '5px'
        });
        $('.li_all').css({
            'font-weight': '400',
            'border' : ''
        });
        $('.product_t_right ul li a').not('.li_powdery').css({
            'font-weight': '400',
            'border' : ''
        });
    });
    $('.li_powdery').mouseover(function () {
        $('.li_powdery').css({
            'font-weight': '900',
            'text-decoration' : 'underline',
        });
    });
    $('.li_powdery').mouseout(function () {
        $('.li_powdery').css({
            'font-weight': '400',
            'text-decoration' : 'none',
        });
    });
});