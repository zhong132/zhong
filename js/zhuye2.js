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
loop: false,
// loopFillGroupWithBlank: true,
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
        $('.c2_lunbo_game').eq(index).stop().animate({
            top:150
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){
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
            top:456
        },{
            queue: true,//加入队列(排队)
            duration: 500,
            easing: 'swing',
            complete: function (){}
        })
    }
 );
//json图片调用
 $(function(){
    $.ajax({
        url:'./zhuye2.json',
        type:'get',
        dataType:'json',
        cache:false,
        success:function (jsonArr){
            var results = '';
            var results2 = '';
            var results3 = '';
            var results4 = '';
            var results5 = '';
            $.each(jsonArr,function (index,item){
                results=`
                    <div class="c2_line1_1s1"></div>
                    <img src="${item.imgurl}">
                    <video class="c2_video11" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio}" type="video/webm">
                    </video>`;
                results2=`
                    <div class="c2_line2_1s1"></div>
                    <img src="${item.imgurl2}">
                    <video class="c2_video21" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio2}" type="video/webm">
                    </video>`;
                    results3=`
                    <div class="c2_line3_1s1"></div>
                    <img src="${item.imgurl3}">
                    <video class="c2_video31" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio3}" type="video/webm">
                    </video>`;
                results4=`
                    <div class="c2_line3_1s1"></div>
                    <img src="${item.imgurl4}">
                    <video class="c2_video31" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio4}" type="video/webm">
                    </video>`;
                results5=`
                    <div class="c2_line2_1s1"></div>
                    <img src="${item.imgurl5}">
                    <video class="c2_video21" autoplay="autoplay" loop="loop" preload="none" muted="muted">
                        <source src="${item.vedio5}" type="video/webm">
                    </video>`;
                $('.c2_line1_1s').eq(index).html(results);
                $('.c2_line2_1s').eq(index).html(results2);
                $('.c2_line3_1s').eq(index).html(results3);
                $('.sb1').eq(index).html(results4);
                $('.sb2').eq(index).html(results5);
            });            
        }
    });
});

// $(function(){
//     $.ajax({
//         url:'./zhuye2too.json',
//         type:'get',
//         dataType:'json',
//         cache:false,
//         success:function (jsonArr){
//             var results = '';                            
//             $.each(jsonArr,function (index,item){
//                 results+=`
//                     <a class="c2_line1_1" href="#">
//                 <div class="c2_line1_1s">
//                 <div class="c2_line1_1s1"></div>
//                     <img src="${item.imgurl}" >
//                     <video class="c2_video11" autoplay="autoplay" loop="loop" preload="none" muted="muted">
//                         <source src="${item.vedio}" type="video/webm">
//                     </video>
//                 </div>
//                 <div class="c2_line1_1x">
//                     <div class="c2_discount">-80%</div>
//                     <div class="c2_discount_prices">
//                         <div class="c2_discount_original_price">¥ 120</div>
//                         <div class="c2_discount_final_price">¥ 24</div>
//                     </div>
//                 </div>
                
//             </a>`;
                
//             });
            
//             var sb321=document.createElement('div');
//             sb321.className = "c2_line1_1y";
//             var sb123 = `
//             <div class="c2_1y1">
//             <h4 class="c2_1h4">Jurassic World Evolution</h4>
//             <p>发行日期:2018年6月12日</p>
//             <p>身临其境地沉浸在侏罗纪系列的舞台中，打造您自己的侏罗纪世界。这些通过生物工程打造的恐龙拥有高度智慧，能够对周遭的环境进行思考、感知，并作出反应。而在这个未知的世界里，生命总会找到自己的出路。同时您还要面对商业间谍活动、展品出逃，以及破坏性的热带风暴带来的威胁。</p>
//             </div>
//             <div class="c2_1y2">
//                 <p>总体用户评测</p>
//                 <p><span>多半好评</span>19,351篇评测</p>
//             </div>
//             <ul class="c2_1y3">
//                 <p>用户标签</p>
//                 <li>建造</li>
//                 <li>恐龙</li>
//                 <li>建造</li>
//                 <li>恐龙</li>
//                 <li>建造</li>
//                 <li>恐龙</li>
//                 <li>建造</li>
//             </ul>`;
//             $(sb321).html(sb123);
        
//             $('.c2_line1').html(results);
//             $('.c2_line1').on('mouseenter','c2_line1_1',function(){
               
//                 $(this).append(sb321);
//             });
//             $('.c2_line1').on('mouseleave','c2_line1_1',function(){
//                 $(this).removeChild(sb321);
//             })
//         }
//     });
// });
