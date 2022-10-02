$(document).ready(function(){
    $("#about2 ul.list div.wrap_2:gt(0)").css("opacity","0");
    $("#about2 ul.list div.wrap_2:gt(0)").hide();

    $("#about2 ul.list li.h5").click(
        function(){
            $(this).children().show();
            $(this).children().css("opacity","1");
            $(this).siblings().children().hide();
            $(this).siblings().children().css("opacity","0");
        }
    );    
});


$(function () {
    //skills
    if($('.body').hasClass('index')){
        $(window).scroll(function () {
    
            if ($('#about3').offset().top - 150 < $(this).scrollTop()) {
                var skill_bar = $('.skill_bar');
    
                skill_bar.parent().each(function () {
                     var bar = $(this).find('.bar'),
                        rate = $(this).find('.rate'),
                        data_rate = rate.attr('data-rate');
    
                    bar.stop().animate({
                        'width': data_rate + '%'
                    }, 2500);
    
                    var percent_number_step = $.animateNumber.numberStepFactories.append(' %');
                    rate.animateNumber({
                            number: data_rate,
                            numberStep: percent_number_step
                        },
                        2500
                    );
                }); //skill_bar each
     }});
    }
});