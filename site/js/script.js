$(function() {
  $(".thumbs").each(function (t) {
    $(this)
      .before("<nav class='pager'></nav>")
      .cycle({
        fx: 'scrollHorz',
        speed:  'fast',
        timeout: 0,
        next: $(this).siblings('nav.next-prev').children('.next'),
        prev: $(this).siblings('nav.next-prev').children('.prev'),
        pager: $(this).siblings('nav.pager'),
        pagerAnchorBuilder: function(idx, slide) { 
          return '<a href="#">⚫</a>';
        }
      });
      // .scrollpane();
  });
});

//   = link_to "⚫", "#"
//   = link_to "⚪", "#"



// $(function(){
//   updateScroll();
// });
// 
// function updateScroll() {
//   $(".thumbs").each(function (t) {
// 
//     // Find the max height child for each pane
//     var h = 0;
//     $(this).children().each(function (c) {
//       var this_h = $(this).height();
//       h = (this_h > h) ? this_h : h;
//     });
// 
//     // Set the height of each pane and turn on scrolling
//     $(this).height(h).scrollpane();
//   });
// }