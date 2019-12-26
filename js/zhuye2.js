 $(".c2_line1_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line1_1y').eq(index).show();
        $(".c2_line1_1y").on("mouseenter", function(){ //未来元素无效 
            $('.c2_line1_1y').eq(index).hide();
        });
    },
    function () {
        var index = $(this).index();
        $('.c2_line1_1y').eq(index).hide();
    }
 );
 $(".c2_line2_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line2_1y').eq(index).show();
        $(".c2_line2_1y").on("mouseenter", function(){ //未来元素无效
            $('.c2_line2_1y').eq(index).hide();
        });        
    },
    function () {
        var index = $(this).index();
        $('.c2_line2_1y').eq(index).hide();
    }
 );
 $(".c2_line3_1").hover(
    function () {
        var index = $(this).index();
        $('.c2_line3_1y').eq(index).show();
        $(".c2_line3_1y").on("mouseenter", function(){ //未来元素无效
            $('.c2_line3_1y').eq(index).hide();
        });        
    },
    function () {
        var index = $(this).index();
        $('.c2_line3_1y').eq(index).hide();
    }
 );

 $(".c2_qq1").hover(
    function () {
        $('.c2_cy1').show();
        $(".c2_cy1").on("mouseenter", function(){ //未来元素无效 
            $('.c2_cy1').hide();
        });
    },
    function () {
        $('.c2_cy1').hide();
    }
 );
 $(".c2_qq2").hover(
    function () {
        $('.c2_cy2').show();
        $(".c2_cy2").on("mouseenter", function(){ //未来元素无效
            $('.c2_cy2').hide();
        }); 
        
    },
    function () {
        $('.c2_cy2').hide();
    }
 );
 $(".c2_qq3").hover(
    function () {
        $('.c2_cy3').show();
        $(".c2_cy3").on("mouseenter", function(){ //未来元素无效
            $('.c2_cy3').hide();
        });        
    },
    function () {
        $('.c2_cy3').hide();
    }
 ); 

//轮播图插件
var swiper = new Swiper('.swiper-container', {
slidesPerView: 3,
spaceBetween: 30,
slidesPerGroup: 3,
loop: true,
loopFillGroupWithBlank: true,
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
});
 
//说明隐藏与出现
$(".c2_game1").on("mouseenter", function(){ //未来元素无效         
    $('.c2_game1_y').show();
});
$(".c2_game1").on("mouseleave", function(){ //未来元素无效
    $('.c2_game1_y').hide();
}); 
$(".c2_game1_y").on("mouseenter", function(){ //未来元素无效  
    $('.c2_game1_y').hide();
}); 
$(".c2_game2").on("mouseenter", function(){ //未来元素无效              
    $('.c2_game2_y').show();
});
$(".c2_game2").on("mouseleave", function(){ //未来元素无效
    $('.c2_game2_y').hide();
}); 
$(".c2_game2_y").on("mouseenter", function(){ //未来元素无效
    $('.c2_game2_y').hide();
}); 
//最后一个向左展示
$(".c2_game1").on("mouseenter", function(){ //未来元素无效         
    $('.c2_yy1').show();
});
$(".c2_game1").on("mouseleave", function(){ //未来元素无效
    $('.c2_yy1').hide();
}); 
$(".c2_yy1").on("mouseenter", function(){ //未来元素无效  
    $('.c2_yy1').hide();
}); 
$(".c2_game2").on("mouseenter", function(){ //未来元素无效              
    $('.c2_yy2').show();
});
$(".c2_game2").on("mouseleave", function(){ //未来元素无效
    $('.c2_yy2').hide();
}); 
$(".c2_yy2").on("mouseenter", function(){ //未来元素无效
    $('.c2_yy2').hide();
});

//模块上移动画
$(".swiper-slide").hover(
    function () {
        var index = $(this).index();
       $('.franchise_logo').eq(index).stop().animate({
            top:0
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
        // $('.c2_lunbo_game').css('top','200px')
        $('.c2_lunbo_game').eq(index).stop().animate({
            top:150
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){
                console.log(123)
            }
        })
    },
    function () {
        var index = $(this).index();
        $('.franchise_logo').eq(index).stop().animate({
            top:170
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
        $('.c2_lunbo_game').eq(index).stop().animate({
            top:440
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
    }
 );


