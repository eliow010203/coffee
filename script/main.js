

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


const promotionEl = document.querySelector('section.promotion');
const buttonEl = document.querySelector('.toggle_btn');
let keypage = 0;

console.log(promotionEl.classList)
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


// 저거뭐냐 저거 어.... 그 뭐엿더라 그거 그 아 아이스 뭐시기
const ice01 = document.querySelector('.coffee01');
const ice02 = document.querySelector('.coffee02');
const ice03 = document.querySelector('.coffee03');

window.addEventListener('scroll', function anime(e) {
  console.log(window.scrollY)

  // 커피 이미지

  if(1660<=this.window.scrollY){
    gsap.to(ice01,0.6,{
      opacity:1,
      display:'block',
      left: 0
    })
  }else{
    gsap.to(ice01,0.6,{
      opacity:0,
      display:'none',
      left: -50
    })
  }

  // 커피 택스트
  if(1660<=this.window.scrollY){
    gsap.to(ice02,0.6,{
      delay:.3,
      opacity:1,
      right: 100
    })
  }else{
    gsap.to(ice02,0.6,{
      delay:.6,
      opacity:0,
      right: 50
    })
  }

  // 커피 더보기
  if(1660<=this.window.scrollY){
    gsap.to(ice03,0.6,{
      opacity:1,
      right: 550
    })
  }else{
    gsap.to(ice03,0.6,{
      opacity:0,
      right: 500
    })
  }

})
