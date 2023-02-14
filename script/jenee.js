$(function(){
    $('.nav>a:nth-child(1)').click(function(){
        $('.sub').slideDown();
        $('.nav>a:nth-child(1)').hide();
        $('.nav>a:nth-child(2)').show();
    });
    $('.nav>a:nth-child(2)').click(function(){
        $('.sub').slideUp();
        $('.nav>a:nth-child(1)').show();
        $('.nav>a:nth-child(2)').hide();
    });
});







// popup 열고닫기
$(document).mouseup(function (e){
	if($(".language,.user,.search,.cart_text,.sub").has(e.target).length === 0){
		$(".language,.user,.search,.sub").slideUp(500);
        $(".cart_text").fadeOut();
	}
});
$(document).keydown(function(e){
	//keyCode 구 브라우저, which 현재 브라우저
    var code = e.keyCode || e.which;
 
    if (code == 27) { // 27은 ESC 키번호
        $('.language,.user,.search,.sub').slideUp(500);
        $(".cart_text").fadeOut();
    }
});