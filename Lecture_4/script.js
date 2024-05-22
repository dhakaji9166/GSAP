
gsap.to('#page1 #box' ,{

    duration:2,
    rotate : 360,

});


gsap.from("#page2 #box" ,{
    duration:2,
    rotate : 360,
    scale : 0.8,
    delay:0.5,
    scrollTrigger :"#page2 #box"
})