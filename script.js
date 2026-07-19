function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
locomotiveAnimation()

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();
    tl.to("#nav-bottom", {
      height: "21vh",
    });
    tl.to(".nav-part2 h5", {
      display: "block",
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      // duration:0.3,
      stagger: {
        amount: 0.6,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();
    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.2,
      },
    });
    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });
    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.2,
    });
  });

}

navAnimation()

function page2Animation(){
  let rightElems = document.querySelectorAll(".right-elem")
rightElems.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    //  elem.childNodes[3].style.opacity = 1
    gsap.to(elem.childNodes[3],{
      opacity:1,
      scale:1
    })
  })
  elem.addEventListener("mouseleave",function(){
    //  elem.childNodes[3].style.opacity = 0
    gsap.to(elem.childNodes[3],{
      opacity:0,
      scale:0
    })
  })
  elem.addEventListener("mousemove",function(dets){
    // console.log(elem.getBoundingClientRect())
    gsap.to(elem.childNodes[3],{
      x:dets.x - elem.getBoundingClientRect().x-50,
      y:dets.y - elem.getBoundingClientRect().y-150
    })
  })

})
}
page2Animation()

function page3VideoAnimation(){
  let page3Center = document.querySelector(".page3-center")
let video = document.querySelector("#page3 video")
page3Center.addEventListener("click",function(){
  video.play()
  gsap.to(video,{
    transform:"scaleX(1) scaleY(1)",
    opacity:1,
    borderRadius:0
  })
})
video.addEventListener("click",function(){
  video.pause()
  gsap.to(video,{
    transform:"scaleX(0.7) scaleY(0)",
    opacity:0,
    borderRadius:"30px"
  })

})

}
page3VideoAnimation()

function videoAnimation(){
  let sections = document.querySelectorAll(".sec-right")

  sections.forEach(function(elem){
    let video = elem.querySelector("video")

    elem.addEventListener("mouseenter",function(){
      video.play().then(function(){
        video.style.opacity = 1
      }).catch(function(){
        video.style.opacity = 0
      })
    })

    elem.addEventListener("mouseleave",function(){
      video.pause()
      video.currentTime = 0
      video.style.opacity = 0
    })
  })
}
videoAnimation()


function page6Animations(){
  gsap.from("#btm6-part2 h4",{
  x:0,
  duration:1,
  scrollTrigger:{
    trigger:"#btm6-part2",
    scroller:"#main",
    start:"top 80%",
    end:"top 10%",
    scrub:true
  }
})
}
page6Animations()


function loadingAnimation() {
    var tl = gsap.timeline({ defaults: { ease: "power3.out" } })

    tl.set(["#page1", "nav"], { autoAlpha: 0 })
      .set("#page1", { transformOrigin: "center center" })
      .to("#page1", { autoAlpha: 1, duration: 0.15 })
      .fromTo("#page1",
        { scaleX: 0.7, scaleY: 0.2, yPercent: 80, borderRadius: 150 },
        { scaleX: 1, scaleY: 1, yPercent: 0, borderRadius: 0, duration: 1.8, ease: "expo.out" }
      )
      .to("nav", { autoAlpha: 1, duration: 0.3 }, "-=0.35")
      .from("#page1 h1, #page1 p, #page1-circle, #moving-div", {
        autoAlpha: 0,
        y: 30,
        duration: 0.55,
        stagger: 0.1
      }, "-=0.3")
      .set("#page1", { clearProps: "transform,borderRadius" })
}
requestAnimationFrame(loadingAnimation)
