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


  

});