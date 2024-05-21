
// gsap.to("#box1", {
//     x: 1200,
//     duration: 2,
//     delay: 0.2,
//     rotate :360,
//     backgroundColor : "yellow",
//     borderRadius:"20%",
//     scale : 0.8,
//     repeat :-1,
//     stagger :0.6,
//     yoyo : "true"
// });

// gsap.from("#box2", {
//     x:1300,
//     y:0,
//     y: -100,
//     duration:2,
//     delay:0.4,
//     borderRadius : "50%",
//     repeat :-1,
//     stagger :0.6,
//     yoyo : "true"
// });

// gsap.to("#box" ,{
//     x:1300,
//     duration:2,
//     delay:1,
//     rotate:360,
//     repeat :-1,
//     borderRadius : "50%",
//     scale : 0.5,
//     stagger :0.6,
//     yoyo : "true"
// });


const Animation = gsap.timeline();


Animation.to('#box1', {
    x: 1300,
    duration: 2,
    delay: 1,
    rotate: 360,
    repeat: -1,
    borderRadius: "50%",
    scale: 0.5,
    stagger: 0.6,
    yoyo: "true"
});


Animation.from('#box2', {
    x: 1300,
    duration: 2,
    rotate: 360,
    repeat: -1,
    borderRadius: "50%",
    scale: 0.5,
    stagger: 0.6,
    yoyo: "true",
    y:-300,
});


Animation.to('#box', {
    x: 1300,
    y:-600,
    duration: 2,
    rotate: 360,
    repeat: -1,
    borderRadius: "50%",
    scale: 0.5,
    stagger: 0.6,
    yoyo: "true"
});