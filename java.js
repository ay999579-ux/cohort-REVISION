const tl = gsap.timeline()


tl.from("nav,nav .list,nav .toggle, a,nav .toggle button,nav .toggle .ri-search-line,nav .toggle .switch",{
    y:-50,
    opacity:0,
    duration:0.2,
    ease:"power2.out",
    yoyo:true,
    stagger:0.2
})

tl.from(".page1 .top h1,p,.page1 .fields  .field h2",{
    y:200,
    opacity:0,
    duration:1,
    stagger:0.2,
    ease:"power2.out",
    yoyo:true,
},[0.5])

gsap.registerPlugin(ScrollTrigger);

// loop through each card
gsap.utils.toArray(".page2 .Features").forEach((card) => {

    // LEFT animation
    gsap.from(card.querySelector(".left"), {
        x: -150,
        opacity: 0,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
            // markers:true
        }
    });

    gsap.from(card.querySelector(".left h1"), {
        y: -50,
        opacity: 0,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    }); 

    // RIGHT animation
    gsap.from(card.querySelector(".right"), {
        x: 150,
        opacity: 0,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

  

});


