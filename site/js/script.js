$(window).load(function() {
  $(".coda-slider").each(function (t) {
    $(this).codaSlider({
      dynamicArrowLeftText: "◀",
      dynamicArrowRightText: "▶",
      crossLinking: false
    });
  });
  
  $('nav#work').children().each(function (c) {
    // Hide all but first
    if (c == 0) {
      currentProject = $(this).attr('href');
    } else {
      $($(this).attr('href')).hide();
    }
    
    // Click handlers
    $(this).click(function () {
      clickId = $(this).attr('href');
      if (clickId != currentProject) {
        oldProject = currentProject;
        currentProject = clickId;
        $(oldProject).hide();
        $(currentProject).show();
        $('#projects').height($(currentProject).height());
        console.log($(currentProject).height());
        
        // Update nav
        $('nav#work a[href='+oldProject+']').removeClass('on');
        $('nav#work a[href='+currentProject+']').addClass('on');
      }
      return false;
    });
  });
});
