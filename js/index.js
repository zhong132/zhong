$('.z-hover').bind('mouseenter',function(){
    var index = $(this).index();
    $('.z-move').eq(index).animate({
        top : 0
    })
})
$('.z-hover').bind('mouseleave',function(){
    var index = $(this).index();
    $('.z-hover .z-move').eq(index).animate({
        top : 408
    })
})
