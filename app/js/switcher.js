window.console =
  window.console ||
  (function () {
    var e = {};
    e.log =
      e.warn =
      e.debug =
      e.info =
      e.error =
      e.time =
      e.dir =
      e.profile =
      e.clear =
      e.exception =
      e.trace =
      e.assert =
        function () {};
    return e;
  })();

$(document).ready(function () {
  var e =
    '<div class="switcher-container">' +
    '<h2>Style Selector<a href="#" class="sw-click"><img src="assets/images/common/settings1.png" class="setting"></img></a></h2>' +
    '<div class="selector-box">' +
    '<div class="clearfix"></div>' +
    '<div class="sw-odd"><h3>Color:</h3>' +
    '<div class="ws-colors">' +
    '<a href="#" class="light sw-click"><img src="assets/images/common/sun.png"></img></a> ' + 
    '<a href="#" class="dark sw-click"><img src="assets/images/common/moon.png"></img></a> '
    "</div></div>" + 
    '<div class="clearfix"></div>' +
    "</div>" +
    "</div>";
  $("body").append(e);
  switchAnimate.loadEvent();
  switchColor.loadEvent();
});

var switchColor = {
  colorObj: {
    colorCookie: "colorCookie",
    switchClass: ".styleswitch",
    currentClass: "current",
    headLink: "head link[id=colors]",
    colorItem: ".ws-colors a.styleswitch",
    reset: "#reset",
    defaultColor: "color1",
  },
  loadEvent: function () {
    var e = switchColor.colorObj;
    if ($.cookie(e.colorCookie)) {
      switchColor.setColor($.cookie(e.colorCookie));
    } else {
      switchColor.setColor(e.defaultColor);
    }
    $(e.colorItem).on("click", function () {
      var e = $(this).attr("id");
      switchColor.setColor(e);
    });
    $(e.reset).on("click", function () {
      switchColor.setColor(e.defaultColor);
    });
  },
  setColor: function (e) {
    var t = switchColor.colorObj;
    $.cookie(t.colorCookie, e);
    $(t.headLink).attr("href", "stylesheets/colors/" + e + ".css");

    $(t.switchClass).removeClass(t.currentClass);
    $("#" + e).addClass(t.currentClass);

    //set color for text in content
    if ($(".infomation.text-center h3").length === 1) {
      var hiText = $(".infomation.text-center h3")
        .closest(".section")
        .css("background-color")
        .toString();
      if (hiText === "rgb(91, 91, 91)")
        $(".infomation.text-center h3").css("color", "#fff");
    }
  },
};

var switchAnimate = {
  loadEvent: function () {
    $(".switcher-container h2 a.sw-click").on("click", function (e) {
      var t = $(".switcher-container");

      if (t.css("right") === "-290px") {
        $(".switcher-container").animate({ right: "0" }, 300, "easeInOutExpo");
      } else {
        $(".switcher-container").animate(
          { right: "-290px" },
          300,
          "easeInOutExpo"
        );
      }

      e.preventDefault();
    });
  },
};
