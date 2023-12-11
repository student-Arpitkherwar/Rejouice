

function cursor(){
  let page1content = document.querySelector(".page1-content");
let cursor = document.querySelector(".mousemover");

page1content.addEventListener("mousemove",function(dets){
 gsap.to(cursor,{
  x:dets.x,
  y:dets.y
 })
})
page1content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
      scale:1,
      opacity:1
    })
})
page1content.addEventListener("mouseleave",function(){
   gsap.to(cursor,{
    scale:0,
    opacity:0
  })
})
}
cursor();
function page2animation(){
  gsap.from(" .page2 .nav1,.page2 .nav2,.page2-content h1",{
    y:50,
    duration:0.5,
    opacity:0,
    stagger:0.2,
    scrollTrigger:{
      trigger:".page2",
      scroller:"body",
      start:"top 40%",
    }
  })
}
page2animation();

// let mouse = documen.querySelector("#cursor");
// let page4 = documen.querySelector(".page4");

// page4.addEventListener("mousemove",function(){
//   gsap.to
// })

var tl = gsap.timeline();
tl.from(".shutter h3",{
  x:40,
  opacity:0,
 duration:1,
  stagger:0.3
})
tl.to(".shutter h3",{
  x:-40,
  duration:1,
  opacity:0,
  stagger:0.3
})
tl.to(".shutter",{
  opacity:0
})
tl.to(".shutter",{
  display:"none"
})
tl.form(".page1-content h2 span",{
  y:100,
  opacity:0,
  stagger:0.2
})

