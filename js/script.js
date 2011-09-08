 $(document).ready(function() {
  // $('.left_overlay').delay(500).animate({ width: "3%"}, 1500 );
  // $('.right_overlay').delay(500).animate({ width: "3%"}, 1500 );

   $('.thumb').click( function() { 
       $project = $(this).attr('project');       
       $('.thumb').removeClass('active');
       $(this).addClass('active');
       $('.project_wrap').stop(true,true).fadeOut(900, function() {
         $($project).fadeIn(900);
       });
   });

  $('.thumb').hover(
     function() {
       $(this).find('.caption').stop(false,true).fadeOut(200);
     }, 
     function () {
       $(this).find('.caption').stop(false,true).fadeIn(200);
     }     
   );

 });
