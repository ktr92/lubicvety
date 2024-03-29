$(document).ready(function () {

	  window.addEventListener('load', function () {
    [].forEach.call(document.querySelectorAll('img[data-src]'), function (img) {
      img.setAttribute('src', img.getAttribute('data-src'));
      img.onload = function () {
        img.removeAttribute('data-src');
      };
    });

    $('.productcard__thumbs i').hover(function () {
      /* $(this).parents(".sentence__item__img").find('img').css('opacity', 0); */

      var this_img = $(this).parent(".productcard__thumbs").siblings('.productcard__image').find("img");
      var all_thmbs = $(this).parent().find("i");

      all_thmbs.removeClass("is-active");
      $(this).addClass("is-active");
      $(this).parents(".productcart__images").css('opacity', 1);

      this_img.css('opacity', 0).eq($(this).index()).css('opacity', 1);
    });


    var $frame = $('.frame');
    var $wrap = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'mouseenter',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 400,
      elasticBounds: 1,
      easing: 'swing',
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 0,
      pauseOnHover: 1,

      // Buttons
      prev: $wrap.find('.productslider__arrow_left'),
      next: $wrap.find('.productslider__arrow_right'),
    });

    $('.filter__header-js').on('click', function () {
      $(this).parent().toggleClass('filter__item_open');
      $(this).siblings('.filter__form').slideToggle();
    });


  });	


  $('.productimg__images').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinite: true,
    fade: true,
    dots: false,
    asNavFor: '.productimg__previews',

  });

  $('.productimg__previews').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: false,
    dots: false,
    infinite: true,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    centerMode: false,
    asNavFor: '.productimg__images',
    focusOnSelect: true,
    responsive: [

      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
        }
      },

    ]

  });

  $(".productselect input[type='radio']").on("change", function (e) {
    $(this).closest('.productselect').find('.productselect__value').text($(this).val());
  });

  $(".radiotype_list input[type='radio']").on("change", function (e) {
    $(this).closest('.radiotype_list').find('input[type="radio"]').not($(this)).siblings('.picked').removeClass('active');
    $(this).closest('.radiotype_list').find('input[type="radio"]').not($(this)).siblings('.pick').addClass('active');
    $(this).closest('label').find('.pick').toggleClass('active');
    $(this).closest('label').find('.picked').toggleClass('active');
  });

  $('.productselect__toggle').click(function (e) {
    $(this).toggleClass('active');
    $(this).siblings('.productselect__values').toggleClass('active');
  });

  $('.parent_catalog > a').click(function (e) {
    e.preventDefault();
    $('.bglayer').show();
    $(this).closest('.parent_catalog').find('.subnav').addClass('active');
  });

  $('.parent_menu > a').click(function (e) {
    e.preventDefault();
    $('.bglayer').show();
    $('.navpanel').removeClass('hidden').addClass('active');
  });

  $('.leftmenu__header').click(function (e) {
    e.preventDefault();
    $(this).next('.leftmenu__list').slideToggle();
  });

  $('.filterbutton').click(function (e) {
    e.preventDefault();
    $('.filter').slideToggle();
  });


  $('.close-js').click(function (e) {
    e.preventDefault();
    $('.bglayer').hide();
    $('.navpanel').removeClass('active').addClass('hidden');
  });


  $('.showtext').click(function (e) {
    e.preventDefault();
    $(this).siblings('.text').removeClass('text_hidden');
    $(this).hide();
  });
  $('.ordersuccess__link').click(function (e) {
    e.preventDefault();
    $(this).closest('.ordersuccess').removeClass('active');
  });

  $("input[type=tel]").mask("+7 (999) 999-99-99");


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

  $(document).mouseup(function (e) {
    var container = $(".bgtoggle-js");
    var ext1 = $(".bgtoggler-js");
    var ext2 = $(".bgtoggle-js");

    if ($(".bgtoggle-js").is(":visible")) {
      if (!ext1.is(e.target) && !container.is(e.target) && ext1.has(e.target).length === 0 && ext2.has(e.target).length === 0) {
        container.removeClass('active').addClass('hidden');
        $('.bglayer').hide();
      }
    }

  });

  $('.accordeon-js .accordeon__title').click(function (event) {
    $('.accordeon__content').not($(this).next()).hide().removeClass('active');
    $('.accordeon__title').not($(this)).removeClass('active');
    $(this).toggleClass('active');
    $(this).next('.accordeon__content').slideToggle();
    $(this).find('.accordeon__status_close').toggleClass('active');
    $(this).find('.accordeon__status_open').toggleClass('active');

  });




});


window.onload = function () {

  if ($("#sliderprice1").length) {

    $('input#maxCost1').on('focusin', function () {
      $(this).val("");
    });

    $('input#minCost1').on('focusin', function () {
      $(this).val("");
    });
    $('input#maxCost2').on('focusin', function () {
      $(this).val("");
    });

    $('input#minCost2').on('focusin', function () {
      $(this).val("");
    });


    $("#maxCost1").val($('#limitMax1').val());
    $("#minCost1").val($('#limitMin1').val());

    $("#maxCost1").prop("placeholder", $("#limitMax1").val());
    $("#minCost1").prop("placeholder", $("#limitMin1").val());

    
    try {


      jQuery("#sliderprice1").slider({
        min: +jQuery("input#limitMin1").val(),
        max: +jQuery("input#limitMax1").val(),
        values: [+jQuery("input#limitMin1").val(), +jQuery("input#limitMax1").val()],
        range: "min",
        stop: function (event, ui) {
          jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
          jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

          //var val1 = $test1.prop("value");
          //$test1.prop("value", prettify(val1));

          if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
            jQuery("input#minCost1").addClass('notchanged');
          } else {
            jQuery("input#minCost1").removeClass('notchanged');
          }

          if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
            jQuery("input#maxCost1").addClass('notchanged');
          } else {
            jQuery("input#maxCost1").removeClass('notchanged');
          }


        },
        slide: function (event, ui) {
          jQuery("input#minCost1").val(jQuery("#sliderprice1").slider("values", 0));
          jQuery("input#maxCost1").val(jQuery("#sliderprice1").slider("values", 1));

          if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
            jQuery("input#minCost1").addClass('notchanged');
          } else {
            jQuery("input#minCost1").removeClass('notchanged');
          }

          if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
            jQuery("input#maxCost1").addClass('notchanged');
          } else {
            jQuery("input#maxCost1").removeClass('notchanged');
          }


          //var val1 = $test1.prop("value");
          // $test1.prop("value", prettify(val1));
        }
      });


      jQuery("input#maxCost1").change(function () {

        var value1 = jQuery("input#minCost1").val();
        var value2 = jQuery("input#maxCost1").val();

        if (value2 > (+jQuery("input#limitMax1").val())) {
          value2 = +jQuery("input#limitMax1").val();
          jQuery("input#maxCost1").val(+jQuery("input#limitMax1").val())
        }


        jQuery("#sliderprice1").slider("values", 1, value2);
        $test1.prop("value", prettify(val1));
        var val1 = $test1.prop("value");

        $test1.prop("value", prettify(val1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        } else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        } else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }

      });

      jQuery("input#minCost1").change(function () {

        var value1 = jQuery("input#minCost1").val();
        var value2 = jQuery("input#maxCost1").val();

        if (value2 < (+jQuery("input#limitMin1").val())) {
          value2 = +jQuery("input#limitMin1").val();
          jQuery("input#minCost1").val(+jQuery("input#limitMin1").val())
        }


        jQuery("#sliderprice1").slider("values", 0, value1);
        var val1 = $test1.prop("value");
        $test1.prop("value", prettify(val1));

        var val1 = $test1.prop("value");
        $test1.prop("value", prettify(val1));

        if (jQuery("input#minCost1").val() == $('#limitMin1').val()) {
          jQuery("input#minCost1").addClass('notchanged');
        } else {
          jQuery("input#minCost1").removeClass('notchanged');
        }

        if (jQuery("input#maxCost1").val() == $('#limitMax1').val()) {
          jQuery("input#maxCost1").addClass('notchanged');
        } else {
          jQuery("input#maxCost1").removeClass('notchanged');
        }

      });


    } catch (err) {

    };


  }

};