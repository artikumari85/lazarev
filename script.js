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
  // The desktop hover dropdown should not run on touch / mobile layouts.
  if (window.matchMedia("(max-width: 900px)").matches) return;

  var navMenu = document.querySelector(".nav-part2");

  navMenu.addEventListener("mouseenter", function () {
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

  navMenu.addEventListener("mouseleave", function () {
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

function mobileMenu() {
  const menuButton = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-part2");

  function toggleMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    const isOpen = navLinks.classList.toggle("mobile-open");
    menuButton.classList.toggle("is-open", isOpen);
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  }

  menuButton.addEventListener("click", toggleMenu);
}

mobileMenu()

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
      video.muted = true
      video.play().then(function(){
        video.style.opacity = 1
      }).catch(function(){
        video.style.opacity = 0
      })
    })

    elem.addEventListener("mouseleave",function(){
      video.pause()
      video.currentTime = 0
      video.muted = true
      video.controls = false
      video.style.opacity = 0
    })

    function enableSound(){
      video.muted = false
      video.defaultMuted = false
      video.volume = 1
      video.controls = true
      video.play()
      video.style.opacity = 1
    }

    elem.addEventListener("click", enableSound)
    video.addEventListener("click", function(event){
      event.stopPropagation()
      enableSound()
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

    var tl = gsap.timeline()
    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })
    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 2,
        ease: "expo.out"
    })
    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })
    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })
}
loadingAnimation()
