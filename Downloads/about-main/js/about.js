$(document).ready(function(){
    // skill
    $("#about3 ul.list_2 li p").hide()
    $("#about3 ul.list_2 li h3").click(
        function(){
            $(this).next().slideToggle(500);
            $(this).parent().siblings().children("p").slideUp(500);
        }
    );

    $("#about4 ul li h2.2012").hover(
        function(){
            $("#about4 ul li img.2012").addClass("sizeUp");
            $("#about4 ul li h2.2012").not("#about4 ul li img.2012").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2012").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2013").hover(
        function(){
            $("#about4 ul li img.2013").addClass("sizeUp");
            $("#about4 ul li h2.2013").not("#about4 ul li img.2013").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2013").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2015").hover(
        function(){
            $("#about4 ul li img.2015").addClass("sizeUp");
            $("#about4 ul li h2.2015").not("#about4 ul li img.2015").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2015").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2016").hover(
        function(){
            $("#about4 ul li img.2016").addClass("sizeUp");
            $("#about4 ul li h2.2016").not("#about4 ul li img.2016").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2016").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2018").hover(
        function(){
            $("#about4 ul li img.2018").addClass("sizeUp");
            $("#about4 ul li h2.2018").not("#about4 ul li img.2018").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2018").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2019").hover(
        function(){
            $("#about4 ul li img.2019").addClass("sizeUp");
            $("#about4 ul li h2.2019").not("#about4 ul li img.2019").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2019").removeClass("sizeUp");
        }
    );
    $("#about4 ul li h2.2021").hover(
        function(){
            $("#about4 ul li img.2021").addClass("sizeUp");
            $("#about4 ul li h2.2021").not("#about4 ul li img.2021").removeClass("sizeUp");
        }
        ,
        function(){
            $("#about4 ul li img.2021").removeClass("sizeUp");
        }
    );
});