 // number validation 
let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);


$(document).ready(function () {
    function windowSize(){
        let windowW = $(window).width()
        if (windowW > 1700){
            $('.window').animate({
                right: 0
            }, 0);
        } else if (windowW <= 1700 && windowW > 1330){
             $('.window').animate({
                right: 184
            }, 0);
        } else if (windowW <= 1330 && windowW > 990){
            $('.window').animate({
                right: 364
            }, 0);
        } else if (windowW <= 990 && windowW > 780){
            $('.window').animate({
                right: 542
            }, 0);
        } else if (windowW <= 780 && windowW > 615){
            $('.window').animate({
                right: 515
            }, 0);
        }  else {
            $('.window').animate({
                right: 635
            }, 0);
        } 
    }

    $(window).on('load resize', windowSize)

    for (i = 0; i < 1; i++) {
        $(".list li").clone().appendTo(".list");
    }
    $('.button').click(function () {
        $('.li-big').removeClass('li-big')
        $(this).prop('disabled',true)
        let x
        setTimeout(function(){

            function selfRandom(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            x = selfRandom(16, 34);
            // исключаем 7, 10, 14
            if((x == 24) || (x == 27) || (x == 31)) x++
            let padding = 108
            let itemW = 181
            if($(window).width() < 781) {
                padding = 104
                itemW = 175
            }
            let wrappW = $('.wraper').width() / 2
            $('.window').animate({
                right: ((x*itemW) + padding - wrappW)
            }, 4000);
            setTimeout(function(){
                $('.list li:eq('+x+')').addClass('li-win')
                $('.arrow-bl').css('opacity','0')
                $('.arrow-gr').css('opacity','1')
                $('.items').addClass('.items-shadow')
                $('.card_num').val($('.li-win').attr('data-card'))
            },4300)
        },300)
        setTimeout(function(){
            setTimeout(function(){
                $('.button').css('display','none')
                $('.btn-modal').css('display','block')
                $('.btn-modal').click()
                $('.btn-modal').css('box-shadow','none')
            },1000)
        },4600)
    });

   
});
