 $(document).ready(function() {
   $('.left_overlay').delay(500).animate({ width: "3%"}, 1500 );
   $('.right_overlay').delay(500).animate({ width: "3%"}, 1500 );

   $('.thumb').hover(
     function() {
       $(this).find('.caption').stop(false,true).fadeIn(200);
     },
    function () {
       $(this).find('.caption').stop(false,true).fadeOut(200);
    }     
   );
   
 });
