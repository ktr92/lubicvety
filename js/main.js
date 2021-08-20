$(document).ready(function () {

   $('.parent_catalog > a').click(function (e) {
    e.preventDefault();
    $('.bglayer').toggle();
    $(this).closest('.parent_catalog').find('.subnav').slideToggle();
  });

   $(document).mouseup(function(e) 
    {
        var container = $(".subnav");
        var ext = $(".parent_catalog > a");
        var ext2 = $(".subnav");

        // if the target of the click isn't the container nor a descendant of the container
        if (!ext.is(e.target) &&  !container.is(e.target) && ext.has(e.target).length === 0 && ext2.has(e.target).length === 0) 
        {
            container.hide();
            $('.bglayer').toggle();
        }
    });

});