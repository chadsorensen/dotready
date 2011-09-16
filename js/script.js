$(document).ready(function() {
  $('h1').css('cursor', 'pointer');
  $('nav li').css('cursor', 'pointer');
  $('.left_overlay').delay(500).animate({ width: "3%"}, 1500 );
  $('.right_overlay').delay(500).animate({ width: "3%"}, 1500 );

  $(".scrollable").scrollable({ circular: false }).navigator("a");

  $('h1').click(function() {
    $('.nav_tab').stop(true,true).hide();
    $('nav li').removeClass('active');

    contentPos = parseInt($(this).attr('pos'));
    $('#content').animate({
      left: contentPos
    }, 750, function() {
      
    });
  });

  $('.fourlegs').click(function() {
    $('.nav_tab').stop(true,true).hide();
    $('nav li').removeClass('active');
    
    contentPos = parseInt($(this).attr('pos'));
    
    $('#content').animate({
      left: contentPos
    }, 750, function() {
      });
    });

  $('nav li').click(function() {

    contentPos = parseInt($(this).attr('pos'));
    $('#content').animate({
      left: contentPos
    }, 750, function() {
      
    });

    $('.nav_tab').stop(true,true).hide();
    
    $('nav li').removeClass('active');
    $(this).addClass('active');
    
    $box = $(this);
    leftPos = $box.position().left;
    newWidth = $box.width();
    
    $('.nav_tab').css({
      left: leftPos,
      bottom: -25,
      width: newWidth,
    });

    $('.nav_tab').stop(true,true).fadeIn(450);
  });

  $('.thumb').stop(true,true).click( function() { 
    $('.thumb').removeClass('active');
    $(this).addClass('active');
    $project = $(this).attr('project');       
    $('.project_wrap').stop(true, true).fadeOut(450);
    $($project).stop(true, true).fadeIn(900);
  });

  $('.thumb').hover(
    function() {
      $(this).find('.caption').stop(false,true).fadeOut(200);
    }, 
    function () {
      $(this).find('.caption').stop(false,true).fadeIn(200);
    }
  );
var $tooltip;
  $(".secret").hover(function($tooltip) {
    $tooltip = $(this).find('.tooltip');
    return $tooltip;
  });

$(".secret[title]").tooltip({
    // use div.tooltip as our tooltip
    tip: '.tooltip',

    // use the fade effect instead of the default
    effect: 'fade',

    // make fadeOutSpeed similar to the browser's default
    fadeOutSpeed: 100,

    // the time before the tooltip is shown
    predelay: 400,

    // tweak the position
    position: "top left",
    offset: [-180, -155]
});

   
     


});
