$(document).ready(function () {
  AOS.init();

  // main-visual products hover action
  const width = window.innerWidth;
  if (width < 768) {
    $(".prds li").hover(function () {
      $(this).find("div.info").show();
    });
  } else {
    $(".prds li").hover(function () {
      $(this).find("div.info").stop().slideToggle(300);
    });
  }

  // mgnb
  $(".mgnb ul").hide();
  $(".mgnb li div").click(function () {
    var $li = $(this).closest("li");
    $li.toggleClass("active");
    $(".mgnb ul").slideToggle();
  });

  $(".ham").click(function () {
    $(this).toggleClass("opened");
    if ($(".close").is(":visible")) {
      $(".mgnb-wrap").animate(
        {
          left: "0%",
        },
        500
      );
    } else {
      $(".mgnb-wrap").animate(
        {
          left: "100%",
        },
        500
      );
    }
  });

  // best seller section swiper
  const best_list = new Swiper(".best-list", {
    centeredSlides: true,
    mousewheel: false,
    loop: true,
    autoplay: {
      delay: 800,
      disableOnInteraction: false,
    },
    speed: 2000,
    breakpoints: {
      0: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      550: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
    },
  });

  // try section prds hover action
  $("#try .prds li .dim").hide();
  $("#try .prds li").hover(function () {
    $(this).find(".dim").stop().fadeToggle(300);
  });

  // try section tab actions
  let randomNumber = Math.floor(Math.random() * 4) + 1;
  $(".character")
    .children("img")
    .attr("src", "./img/characters/0" + randomNumber + ".png");

  $("#try .visual .character .patch li").hide();

  $("#try .message").hide();

  $("#try .prds li").click(function () {
    let order = $(this).index();
    $("#try .info .default-message").hide();
    $("#try .message").show();
    $("#try .message > li").hide().eq(order).show();
    $("#try .patch > li").hide().eq(order).show();
  });

  // try section responsive swiper managing
  let swiper = null;

  function initSwiper() {
    if (window.innerWidth <= 1279) {
      if (!swiper) {
        swiper = new Swiper(".prds-list", {
          slidesPerView: "auto",
          spaceBetween: 0,
          freeMode: true,
          freeModeMomentum: true,
          freeModeSticky: false,
          grabCursor: true,
          breakpoints: {
            360: {
              slidesPerView: 1.5,
            },
            550: {
              slidesPerView: 2.5,
            },
            720: {
              slidesPerView: 3.5,
            },
            1280: {
              slidesPerView: 4.5,
            },
          },
        });
      }
    } else {
      if (swiper) {
        swiper.destroy(true, true);
        swiper = null;
      }
    }
  }

  function handleResize() {
    initSwiper();
  }

  window.addEventListener("load", initSwiper);
  window.addEventListener("resize", handleResize);

  // star bar auto swiper
  $(".bar01, .bar02").each(function () {
    const swiperConfig = {
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      speed: 500,

      loop: true,
      slidesPerView: 7,
      breakpoints: {
        768: {
          slidesPerView: 15,
        },
        1400: {
          slidesPerView: 22,
        },
      },
    };

    new Swiper(this, swiperConfig);
  });

  // shorts card swiper
  var shorts_vid = new Swiper(".shorts-vid", {
    effect: "cards",
    grabCursor: true,
  });

  // faq click action
  $("#faq ul li .a").hide();
  $("#faq ul li").click(function () {
    $(this).find(".a").slideToggle(300);
  });
}); //end
