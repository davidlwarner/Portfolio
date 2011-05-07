$(function(){
  $(".thumbs").each(function (t) {
    var h = 0;
    
    $(this).children().each(function (c) {
      var this_h = $(this).height();
      h = (this_h > h) ? this_h : h;
    });

    $(this).height(h).scrollPane();
  });
});
