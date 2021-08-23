$(document).ready(function () {

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

  $('.close-js').click(function (e) {
    e.preventDefault();
    $('.bglayer').hide();
    $('.navpanel').removeClass('active').addClass('hidden');
  });

  $(document).mouseup(function(e) 
    {
        var container = $(".bgtoggle-js");
        var ext1 = $(".bgtoggler-js");
        var ext2 = $(".bgtoggle-js");

        if ($(".bgtoggle-js").is(":visible")) {
           if (!ext1.is(e.target) &&  !container.is(e.target) && ext1.has(e.target).length === 0 && ext2.has(e.target).length === 0) 
            {
                container.removeClass('active').addClass('hidden');
                $('.bglayer').hide();
            }
        }

  });



  $(".productcard__image").each(function() {
    $(this).addClass('isInitialized').brazzersCarousel();
  });

    var $frame = $('.frame');
    var $wrap  = $frame.parent();

    // Call Sly on frame
    $frame.sly({
      horizontal: 1,
      itemNav: 'basic',
      smart: 1,
      activateOn: 'click',
      mouseDragging: 1,
      touchDragging: 1,
      releaseSwing: 1,
      startAt: 0,
      scrollBar: $wrap.find('.scrollbar'),
      scrollBy: 1,
      speed: 1000,
      elasticBounds: 1,
      dragHandle: 1,
      dynamicHandle: 1,
      clickBar: 1,

      // Cycling
      cycleBy: 'items',
      cycleInterval: 0,
      pauseOnHover: 1,

      // Buttons
      prev: $wrap.find('.productslider__arrow_left'),
      next: $wrap.find('.productslider__arrow_right')
    });


});

