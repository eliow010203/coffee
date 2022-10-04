

const badgeEl = document.querySelector('.badges');

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY)
  if(500<=this.window.scrollY){
    // badgeEl.style.display='none'
    gsap.to(badgeEl,0.3,{
      opacity:0,
      display:'none'
    })
  }else{
    // badgeEl.style.display='block'
    gsap.to(badgeEl,0.3,{
      opacity:1,
      display:'block'
    })
  }
})

const fadeEl = document.querySelectorAll('.fadein');

fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay:(index+1)*0.4,//0.4초씩 딜레이
    opacity:1
  })
});
