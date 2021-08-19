$(document).ready(function () {

  


	 $('.mainslider-for').on('init', function(event, slick){

     
     

    	setTimeout(
		  function() 
		  {
		    $('.mainslider__slide.slick-current .mainblock__svg').addClass("fade-out");
		    $('.mainslider__slide.slick-current .mainblock__img img').addClass("fade-in");
		  }, 6000);
		});

  
          $('.mainslider-for').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: false,
          autoplaySpeed: 5000,
          arrows: false,
          fade: true,
          dots: false,
          asNavFor: '.mainslider-nav'
    });
      




	$('.mainslider-nav').slick({
    infinite: false,
	  slidesToShow: 7,
	  slidesToScroll: 1,
	  asNavFor: '.mainslider-for',
	  dots: false,
	  centerMode: false,
	  focusOnSelect: true,
	  variableWidth: true
	});

	  $('.mainslider-for').on('afterChange', function(event, slick, currentSlide, nextSlide){


        $('.mainslider__slide.slick-current').addClass("hideBg");
      $('.mainslider__slide .mainblock__svg').removeClass("fade-out");
      $('.mainslider__slide .mainblock__img img').removeClass("fade-in");
        $('.mainslider__slide .mainblock__img').find('svg').attr("class", "");
               $('.mainslider__slide.slick-current .mainblock__img').find('svg').attr("class", "path");
       setTimeout(
    		  function() 
    		  {
    		    $('.mainslider__slide.slick-current .mainblock__svg').addClass("fade-out");
    		    $('.mainslider__slide.slick-current .mainblock__img img').addClass("fade-in");
    		  }, 3000);

    		});

   

  $(".productslider__slider").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    arrows: true,
    dots: false,
    prevArrow: $(".productslider__arrow_left"),
    nextArrow: $(".productslider__arrow_right"),
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  });

  $('.product-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.product-nav'
  });
  $('.product-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.product-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrow: true,
    prevArrow: $('.productslider__left'),
    nextArrow: $('.productslider__right'),

  });
  $("input[type=tel]").mask("+7 (999) 999-99-99");

  var counterTeaserL = $('.stats');
  var winHeight = $(window).height();
  if (counterTeaserL.length) {
    var firEvent = false,
      objectPosTop = $('.stats').offset().top;

    //when element shows at bottom
    var elementViewInBottom = objectPosTop - winHeight;
    $(window).on('scroll', function () {
      var currentPosition = $(document).scrollTop();
      //when element position starting in viewport
      if (currentPosition > elementViewInBottom && firEvent === false) {
        firEvent = true;
        animationCounter1();


      }
    });
  }

  //counter function will animate by using external js also add seprator "."
  function animationCounter1() {
    $('.stats__number span').each(function () {
      $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
      }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
          $(this).text(Math.ceil(now));
        }
      });
    });

  }

  lightbox.option({
    'resizeDuration': 30,
    'wrapAround': true
  })


  function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    if (!isNaN(currentVal)) {
      parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(1);
    }
  }

  function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);
    if (!isNaN(currentVal) && currentVal > 1) {
      parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
      parent.find('input[name=' + fieldName + ']').val(1);
    }
  }
  $('.quantity').on('click', '.quantity-plus', function (e) {
    incrementValue(e);
  });
  $('.quantity').on('click', '.quantity-minus', function (e) {
    decrementValue(e);
  });


  $('.searchbutton').click(function (e) {
    $('.headermain__search').slideToggle();
  });
  $('.closesearch').click(function (e) {
    $('.headermain__search').slideToggle();
  });


  $('.menubtn-js').click(function (e) {
    $('.bglayer').toggle();
    $('.mainmenu').toggle('slide');
  });

  $('.mainmenu__close').on('click', function () {
    $('.mainmenu').hide();
    $('.bglayer').hide();
  });


  $('.mobilefilter').on('click', function () {
    $('.filter').slideToggle();
  });


  (function ($) {
    $(function () {

      $('.producttabs__header ul').on('click', 'li:not(.active)', function () {
        $(this)
          .addClass('active').siblings().removeClass('active')
          .closest('div.producttabs').find('div.producttabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });

    });
  })(jQuery);


  if ($(window).width() > 1023) {
    $(window).scroll(function () {
      scroll = $(window).scrollTop();

      if (scroll >= 164) {
        $('.header').addClass('fixed');
        $('body').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
        $('body').removeClass('fixed');
      }
    });
  } else {
    $(window).scroll(function () {
      scroll = $(window).scrollTop();

      if (scroll >= 136) {
        $('.header').addClass('fixed');
        $('body').addClass('fixed');
      } else {
        $('.header').removeClass('fixed');
        $('body').removeClass('fixed');
      }
    });
  };


  $('.pageaccordion__title').click(function (event) {
    $(this).toggleClass('active');
    $(this).next('.pageaccordion__content').slideToggle();
  });


  $('.filter__header').on('click', function () {
    $(this).closest('.filter__item').toggleClass('filter__item_open');
    $(this).siblings('.filter__form').slideToggle();
  });


  if ($(window).width() > 1023) {
    (function () { // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
      var a = document.querySelector('#ordertotal__wrapper'),
        b = null; // селектор блока, который нужно закрепить
      window.addEventListener('scroll', Ascroll, false);
      document.body.addEventListener('scroll', Ascroll, false); // если у html и body высота равна 100%
      function Ascroll() {
        if (b == null) { // добавить потомка-обёртку, чтобы убрать зависимость с соседями
          var Sa = getComputedStyle(a, ''),
            s = '';
          for (var i = 0; i < Sa.length; i++) { // перечислить стили CSS, которые нужно скопировать с родителя
            if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
              s += Sa[i] + ': ' + Sa.getPropertyValue(Sa[i]) + '; '
            }
          }
          b = document.createElement('div'); // создать потомка
          b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
          a.insertBefore(b, a.firstChild); // поместить потомка в цепляющийся блок первым
          var l = a.childNodes.length;
          for (var i = 1; i < l; i++) { // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + 'px'; // если под скользящим элементом есть другие блоки, можно своё значение
          a.style.padding = '0';
          a.style.border = '0'; // если элементу присвоен padding или border
        }
        if (a.getBoundingClientRect().top <= 0) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
          b.className = 'sticky'; //Класс для контейнера
        } else {
          b.className = '';
        }
        window.addEventListener('resize', function () {
          a.children[0].style.width = getComputedStyle(a, '').width
        }, false); // если изменить размер окна браузера, измениться ширина элемента
      }
    })();
  }
});