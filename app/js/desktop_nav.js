/** 
  * desktopNav 
*/

; (function ($) {
    "use strict"; 

    // Mobile Navigation
    var mobileNav = function () {
        var desktop = window.matchMedia("(max-width: 100vw)");
        var wrapMenu = $("#site-header-inner");
        var navExtw = $(".nav-extend.active");
        var navExt = $(".nav-extend.active").children();
    
        responsivemenu(desktop);
    
        desktop.addListener(responsivemenu);
    
        function responsivemenu(desktop) {
          if (desktop.matches) {
            $("#main-nav")
              .attr("id", "main-nav-mobi")
              .appendTo("#header_main")
              .hide()
              .children(".menu")
              .append(navExt)
              .find("li:has(ul)")
              .children("ul")
              .removeAttr("style")
              .hide()
              .before('<span class="arrow"></span>');
          } else {
            $("#main-nav-mobi")
              .attr("id", "main-nav")
              .removeAttr("style")
              .prependTo(wrapMenu)
              .find(".ext")
              .appendTo(navExtw)
              .parent()
              .siblings("#main-nav")
              .find(".sub-menu")
              .removeAttr("style")
              .prev()
              .remove();
    
            $(".mobile-button").removeClass("active");
            $(".sub-menu").css({ display: "block" });
          }
        }
        $(document).on("click", ".mobile-button", function () {
          $(this).toggleClass("active");
          $("#main-nav-mobi").slideToggle();
          console.log("123");
        });
        $(document).on("click", "#main-nav-mobi .arrow", function () {
          $(this).toggleClass("active").next().slideToggle();
          console.log("123");
        });
    }; 

    // Dom Ready
    $(function () {
        mobileNav();
    });

})(jQuery);