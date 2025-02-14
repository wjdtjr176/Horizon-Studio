



const menuMotion = gsap.timeline({
    paused:true,
    onStart:function(){
        $('.nav-detail').addClass('active');
    },
    onReverseComplete:function(){
        $('.nav-detail').removeClass('active');
    }
})

menuMotion.to('.nav-detail',0.5,{
    '--height':'100%'
})
menuMotion.from('.nav-detail .left li',{
    opacity:0,
    stagger:0.1
},'a')
menuMotion.from('.nav-detail .group-top .inner1 > *',{
    opacity:0,
    stagger:0.1
},'a')
menuMotion.from('.nav-detail .contact-list > *',{
    opacity:0,
    stagger:0.1
},'a')
menuMotion.from('.nav-detail .group-bottom > *',{
    opacity:0,
    stagger:0.1
},'a')
menuMotion.from('.nav-detail .group-bottom',{
    opacity:0,
    stagger:0.1,
    '--width':'0%'
},'a')
menuMotion.from('.nav-detail .btn-close',{
    opacity:0,
    stagger:0.1,
},'a')



$('.award-fixed').hover(function(){
    
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
})



$('#header .btn-nav-detail').click(function(){
    $(this).addClass('on');
    menuMotion.play();
    $('body').addClass('no-scroll')
})



$('.nav-detail .btn-close').click(function(){
    $('#header .btn-nav-detail').removeClass('on')
    menuMotion.reverse();
    $('body').removeClass('no-scroll')
})



$('#footer .btn-top').click(function(){
    window.scrollTo({top:0,behavior:"smooth"})
})