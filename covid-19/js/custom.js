$(function () {
  "use strict";

  // Preloader
    window.addEventListener('load', () => {

      const preload = document.querySelector('#preloader');
      preload.classList.add('load-finish');

    });
    // Preloader  

    // Fixed Menu

    $(document).ready(function(){
        var $navOffset;
        var $scrolling;
    $navOffset=$('#header_main').offset().top;
    $navOffset=300;

        $(window).scroll(function(){
            $scrolling=$(this).scrollTop();
            
            if($scrolling > $navOffset){
                $("#header_main").addClass('navfixed');
            }else{
                $("#header_main").removeClass('navfixed');
            }
        });
   });

    // Fixed Menu

    // Wow js
    
              new WOW().init();

    // Wow js             

    // pagination active

            $(".pagination a").click(function(){
                $(".pagination a").removeClass('active');
                $(this).addClass('active');
            });

    // pagination active
              

 

});