
const lenis = new Lenis();

lenis.on('scroll', (e) => {
  
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});

gsap.ticker.lagSmoothing(0);





const loading = gsap.timeline({
    onComplete:function(){
        $('.loading').remove();
        intro.play();
    }
})
loading.to('.loading .logo-txt:nth-child(1)',{
    delay:0.3,
    yPercent:100
},'a')
loading.to('.loading .logo-txt:nth-child(2)',{
    delay:0.3,
    yPercent:-100
},'a')
loading.to('.loading .logo-dot',{
    delay:0.3,
    scale:0
},'a')
loading.to('.loading .line .cont',{
    height:0
})






const intro = gsap.timeline({
    paused:true,
})
intro.from('#header',{
    '--width':'0%'
})
intro.from('[data-motion="up"]',{
    yPercent:250,
    stagger:0.1,
})
intro.from('.sc-intro .top-area .title',{
    yPercent:100,
    opacity:0,
},'a')
intro.from('.sc-intro .top-area .thin',{
    yPercent:100,
    opacity:0,
},'a')
intro.from('.sc-intro .img-area .thumb',1,{
    '--width':'100%'
})



$('.sc-main .thumb').hover(function(){
    $('.sc-main .overlay').hasClass('on');
})





$('[data-motion="thumb"]').each(function(i,el){
    gsap.fromTo($(el).find('img'),{
        y:'-10%',
        scale:1.1
    },{
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            markers:false,
            scrub:0
        },
        y:'10%',
        scale:1.1,
        ease:"none",
    })
})



$('[data-motion1="white"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        '--height':'100%',
        stagger:0.1,
        duration:1,
    })
})


$('[data-motion2="fade"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        opacity:0,
        stagger:0.1,
        duration:1,
    })
})

$('[data-motion3="up"]').each(function(i,el){
    gsap.from($(el).find('span'),{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        yPercent:100,
        stagger:0.3,
        duration:1,
    })
})

$('[data-motion4="up1"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        yPercent:100,
        opacity:0,
        stagger:0.3,
        duration:1,
    })
})

$('[data-motion5="up2"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 100%",
            end:"100% 0%",
            markers:false,
        },
        yPercent:100,
        opacity:0,
        stagger:0.3,
        duration:1,
    })
})

$('[data-motion6="line"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 90%",
            end:"100% 0%",
            markers:false,
        },
        '--width':'0%',
        duration:1,
    })
})
$('[data-motion7="bold-line"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"80% 80%",
            end:"100% 0%",
            markers:false,
        },
        '--width':'0%',
        duration:1,
    })
})
$('[data-motion8="line-black"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        '--width':'0%',
        duration:1,
    })
})
$('[data-motion9="line-black-down"]').each(function(i,el){
    gsap.from(el,{
  
        scrollTrigger:{
            trigger:el,
            start:"0% 80%",
            end:"100% 0%",
            markers:false,
        },
        '--height':'0%',
        duration:1,
    })
})
