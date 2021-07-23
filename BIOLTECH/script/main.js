jQuery(function($){
  $('.products-slider').slick({
          dots: true,
          infinite: true,
          // speed: 600,
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<div class="prev"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.08423L1.01615 7.08423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M6.6167 1.00008L1.38526 6.23152C1.14819 6.47001 1.01512 6.79261 1.01512 7.12888C1.01512 7.46515 1.14819 7.78776 1.38526 8.02625L6.47668 13.1177" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
          nextArrow: '<div class="next"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.03345L20.9839 7.03345" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.3833 13.1176L20.6147 7.88616C20.8518 7.64767 20.9849 7.32506 20.9849 6.98879C20.9849 6.65252 20.8518 6.32991 20.6147 6.09143L15.5233 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
  });
  $('.standarts-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<div class="prev"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.08423L1.01615 7.08423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M6.6167 1.00008L1.38526 6.23152C1.14819 6.47001 1.01512 6.79261 1.01512 7.12888C1.01512 7.46515 1.14819 7.78776 1.38526 8.02625L6.47668 13.1177" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
    nextArrow: '<div class="next"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.03345L20.9839 7.03345" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.3833 13.1176L20.6147 7.88616C20.8518 7.64767 20.9849 7.32506 20.9849 6.98879C20.9849 6.65252 20.8518 6.32991 20.6147 6.09143L15.5233 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
  });

  if($(window).width() > 1024.98){
    $(window).scroll(function() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();
        if (scroll >= 70) {
            sticky.addClass('sticky');
        } else {
            sticky.removeClass('sticky');
        }
    });
  }
  // let card = document.querySelector('.card');
  // card.click(function() {
  //   card.classList.toggle('is-flipped');
  // });
  $('.prod-slider').slick({
    speed: 1000,
    centerMode: true,
    centerPadding: '0px',
    dots: true,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          slidesToShow: 1
        }
      }
    ],
    prevArrow: '<div class="prev"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 7.08423L1.01615 7.08423" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M6.6167 1.00008L1.38526 6.23152C1.14819 6.47001 1.01512 6.79261 1.01512 7.12888C1.01512 7.46515 1.14819 7.78776 1.38526 8.02625L6.47668 13.1177" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
    nextArrow: '<div class="next"><svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 7.03345L20.9839 7.03345" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/><path d="M15.3833 13.1176L20.6147 7.88616C20.8518 7.64767 20.9849 7.32506 20.9849 6.98879C20.9849 6.65252 20.8518 6.32991 20.6147 6.09143L15.5233 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="bevel"/></svg></div>',
  });

  if($('.certificate.one').hasClass('slick-current')){
    $('.sertificate-descr.one').addClass('active');
  }
 $('.slick-arrow').click(function(){
  if($('.certificate.one').hasClass('slick-current')){
    $('.sertificate-descr.one').addClass('active');
    $('.sertificate-descr.two').removeClass('active');
    $('.sertificate-descr.three').removeClass('active');
    $('.sertificate-descr.four').removeClass('active');
  }
  if($('.certificate.two').hasClass('slick-current')){
    $('.sertificate-descr.one').removeClass('active');
    $('.sertificate-descr.two').addClass('active');
    $('.sertificate-descr.three').removeClass('active');
    $('.sertificate-descr.four').removeClass('active');
  }
  if($('.certificate.three').hasClass('slick-current')){
    $('.sertificate-descr.one').removeClass('active');
    $('.sertificate-descr.two').removeClass('active');
    $('.sertificate-descr.three').addClass('active');
    $('.sertificate-descr.four').removeClass('active');
  }
  if($('.certificate.four').hasClass('slick-current')){
    $('.sertificate-descr.one').removeClass('active');
    $('.sertificate-descr.two').removeClass('active');
    $('.sertificate-descr.three').removeClass('active');
    $('.sertificate-descr.four').addClass('active');
  }
 })
 if($(window).width() > 1280.98){
    let skroll = new Skroll();
    new Skroll()
  .add(".slick-current .bag", {
    animation: "fadeInLeft",
    duration: 1500,
    triggerTop: 1,
    delay: 500
  })
  // .add(".slick-current .slide-name", {
  //   animation: "slideInRight",
  //   duration: 1500,
  //   delay: 500
  // })
  // .add(".slick-current .about-product", {
  //   animation: "slideInRight",
  //   duration: 1500,
  //   delay: 500
  // })
  // .add(".slick-current .slider-back", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   triggerTop: 1,
  //   delay: 200
  // })
  .add(".sertificate-descr.active", {
    animation: "fadeInRight",
    duration: 1500,
    delay: 200
  })
  .add(".standarts-slider .slick-active", {
    animation: "fadeInRight",
    duration: 1500,
    triggerTop: 1,
    delay: 200
  })
  .add(".coop-content img:last-child", {
    animation: "fadeInRight",
    duration: 1500,
    triggerTop: 1,
    delay: 200
  })
  .add(".title-with-lines", {
    animation: "fadeInLeft",
    duration: 1500,
    delay: 200
  })
  .add(".about-content .title-with-lines", {
    animation: "fadeInRight",
    duration: 1500,
    delay: 200
  })
  .add(".about-company .company", {
    animation: "fadeInLeft",
    duration: 1500,
    delay: 1000
  })
  .add(".company-descr", {
    animation: "fadeInLeft",
    duration: 1500,
    delay: 200
  })
  // .add(".text-about", {
  //   animation: "fadeInRight",
  //   duration: 1500,
  //   delay: 1500
  // })
  // .add(".ul-name", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 200
  // })
  // .add(".advantage-ul ul", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 200
  // })
  // .add(".coop", {
  //   animation: "fadeInLeft",
  //   duration: 1500,
  //   delay: 200
  // })
  // .add(".now-item", {
  //   animation: "fadeInRight",
  //   duration: 1500,
  //   delay: 400
  // })
  // .add(".prod-title", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 400,
  //   triggerTop: 0.5
  // })
  .add(".main-text", {
    animation: "fadeInDown",
    duration: 1500,
    delay: 400,
  })
  .add(".leon-title", {
    animation: "fadeInDown",
    duration: 1500,
    delay: 400,
  })
  .add(".leon-descr", {
    animation: "fadeInLeft",
    duration: 1500,
    delay: 400,
  })
  // .add(".green-title", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 400,
  // })
  // .add(".green-descr", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 400,
  // })
  // .add(".micro", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 400,
  // })
  // .add(".impact-green ul", {
  //   animation: "fadeInDown",
  //   duration: 1500,
  //   delay: 400,
  // })
  .add(".impact-content .about-ul-impact ul li", {
    animation: "fadeInDown",
    duration: 500,
    delay: 400,
  })
  // .add(".recs .green", {
  //   animation: "fadeInDown",
  //   duration: 500,
  //   delay: 400,
  // })
  // .add(".recs .under-green-text", {
  //   animation: "fadeInDown",
  //   duration: 500,
  //   delay: 400,
  // })
  .add(".quality-img img", {
    animation: "fadeInLeft",
    duration: 500,
    delay: 1000,
  })
  .add(".qual-content-wrap a", {
    animation: "fadeInUp",
    duration: 1500,
    delay: 500,
  })
  .add(".adv-ul .ul-item", {
    animation: "fadeInDown",
    duration: 700,
    delay: 500,
  })
  .add(".factory-text span", {
    animation: "fadeInleft",
    duration: 700,
    delay: 500,
  })
  .add(".factory-text a", {
    animation: "fadeInleft",
    duration: 700,
    delay: 500,
  })
  // .add(".info-title", {
  //   animation: "fadeInDown",
  //   duration: 700,
  //   delay: 200,
  // })
  // .add(".info-content a", {
  //   animation: "fadeInDown",
  //   duration: 700,
  //   delay: 200,
  // })
  // .add(".info-descr", {
  //   animation: "fadeInDown",
  //   duration: 700,
  //   delay: 200,
  // })
  .init();
}

  // BURGER-MENU JS
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    let overlay = menu.find('.burger-menu_overlay');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());
    
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overflow', 'hidden');
      } else {
        $('body').css('overflow', 'visible');
      }
    }
  }
  
  burgerMenu('.burger-menu');
})