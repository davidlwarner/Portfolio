$(function() {
  $("#coda-slider-1").codaSlider({
    dynamicArrowLeftText: "◀",
    dynamicArrowRightText: "▶"
  });

  // $(".thumbs").each(function (t) {
  //   $(this)
  // });
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