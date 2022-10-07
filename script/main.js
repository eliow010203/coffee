

const badgeEl = document.querySelector('.badges');
const topBtnEl = document.querySelector('.top_btn')

topBtnEl.addEventListener('click',function(){
  gsap.to(window, .6, { //브라우저를 선택하여 0.6초만에
    scrollTo:0 //스크롤 끝까지 올라간다
  })
})

window.addEventListener('scroll', function(e) {
  console.log(window.scrollY)
  if(500<=this.window.scrollY){
    // badgeEl.style.display='none'
    gsap.to(badgeEl,0.3,{
      opacity:0,
      display:'none'
    })

    gsap.to(topBtnEl,0.1,{
      opacity:1,
      
    })
  }else{
    // badgeEl.style.display='block'
    gsap.to(badgeEl,0.3,{
      opacity:1,
      display:'block'
    })

    gsap.to(topBtnEl,0.1,{
      opacity:0,
      
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


const promotionEl = document.querySelector('section.promotion');
const buttonEl = document.querySelector('.toggle_btn');
let keypage = 0;

buttonEl.addEventListener('click', function() {
  if(keypage==0) {
    // 높이가 0이되어야
    promotionEl.classList.add('hide')
    keypage=1
  }else{
    // 높이가 원래대로
    promotionEl.classList.remove('hide')
    keypage=0
  }
})

// 6, 7, 8, 10콘텐츠가 화면의 80%지점에 보일 때 동작하는 스크립트


const spyEl = document.querySelectorAll('section.scroll-spy')

spyEl.forEach(function(spyEl){

  new ScrollMagic
  .Scene({
    triggerElement:spyEl,
    triggerHook:0.8 //화면의 80%지점에서 동작
  })
  .setClassToggle(spyEl, 'show') //show라는 클래스를 적용하거나 해제하기
  .addTo(new ScrollMagic.Controller()); //컨트롤러에 장면을 할당한다.
})


