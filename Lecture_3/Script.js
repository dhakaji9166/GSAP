

const ani = gsap.timeline();


ani.from("h2", {
    y: -40,
    opacity: 0,
    duration: 1,
    delay: 0.5,
});



ani.from("h4", {
    y: -40,
    opacity: 0,
    duration: 1,
    stagger :0.4

});

ani.from('h1' ,{
    opacity :0, 
    duration: 1,
})
