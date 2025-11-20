// 스크롤 시 메뉴바
let lastScrollTop = 0;
  const menuBar = document.querySelector('.menu-bar');

  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // 아래로 스크롤 시 메뉴 숨기기
    if (currentScroll > lastScrollTop && currentScroll > 100) {
      menuBar.classList.add('hidden');
    } 
    // 위로 스크롤 시 메뉴 다시 보이기
    else {
      menuBar.classList.remove('hidden');
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 음수 방지
  });


// 메인 슬라이드
const swiperMain = new Swiper('.main-swiper', {
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  speed: 800,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      // moveProgressBar(this.realIndex);
    },
    slideChangeTransitionStart: function () {
      // moveProgressBar(this.realIndex);
    }
  }
});

// sec-2 스와이퍼 구현
const swiperBest = new Swiper('.best-swiper', {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: '.sec2-pagination',
    type: "progressbar",
    loop: false,
  },
});

// sec-4 탭 메뉴 구현
document.addEventListener("DOMContentLoaded", function () {
  const swipers = [];
  document.querySelectorAll(".sec-4 .swiper").forEach((el) => {
    swipers.push(
      new Swiper(el, {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 120,
        pagination: {
          el: el.querySelector(".swiper-pagination"),
          type: "progressbar",
        },
      })
    );
  });

  // 탭 전환
  const tabs = document.querySelectorAll(".sec-4 .tab-menu p[data-index]");
  const contents = document.querySelectorAll(".sec-4 > .con > div");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const index = parseInt(tab.dataset.index);
      contents.forEach((c, i) => (c.style.display = i === index ? "block" : "none"));

      swipers[index].update();
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  spaceBetween: -300,
  pagination: {
    // el: ".swiper-pagination",
    clickable: true,
  },
});