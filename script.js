gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

//page1
gsap.to("#page1 #line1",{
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page1",
        start: "top top",
        // scrub: 2,
        // markers: "true"
    },
    x: -100,
    ease: Expo.easeInOut,
    duration: .09,
    // stagger: 1,
})
gsap.to("#page1 #line2",{
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page1",
        start: "top top",
        // scrub: 2,
        // markers: "true"
    },
    x: -100,
    delay:.1,
    ease: Expo.easeInOut,
    duration: .010,
    // stagger: 1,
})
gsap.to("#page1 #line3",{
    scrollTrigger: {
        scroller: "#main",
        trigger: "#page1",
        start: "top top",
        // scrub: 2,
        // markers: "true"
    },
    x: -100,
    delay:.2,
    ease: Expo.easeInOut,
    duration: .09,
    // stagger: 1,
})

//page2

gsap.from("#images #a",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2",
        start:"top top", 
        // markers:"true"
    },
    width:0,
    duration:.3,
    ease:Expo.ease
    
})
gsap.from("#images #b",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2",
        start:"top top", 
        // markers:"true"
    },
    width:0,
    duration:.3,
    delay:1,
    ease:Expo.ease
})
gsap.from("#images #c",{
    scrollTrigger:{
        scroller: "#main",
        trigger:"#page2",
        start:"top top", 
        // markers:"true"
    },
    width:0,
    duration:.3,
    delay:2,
    ease:Expo.ease
})

//page3

// var page3 = document.querySelector("#page3");
// var cursor = document.querySelector("#cursor");
// var h2 = document.querySelector("h2");

// page3.addEventListener("mousemove", function(dets){
//     cursor.style.left = (dets.x + 10) +"px";
//     cursor.style.top = (dets.y + 10) +"px";
// })
// h2.addEventListener("mouseenter", function(){
//     cursor.style.scale = 2;
// })
// h2.addEventListener("mouseleave", function(){
//     cursor.style.scale = 1;
// })

//page5

//  var photos = document.querySelector(".photos");
//  var box = document.querySelector(".box");

//  var i = document.querySelector(".photos i");

//  i.addEventListener("click", function(){
    
//  })