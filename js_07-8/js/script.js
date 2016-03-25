(function($, undefined){
    var n;
    $(".tabs").on("click", "li:not(.active)", function() {
        n = $(this).parents(".tabs_block"), $(this).tabs(n)
    }),
    $.fn.tabs = function(n) {
        $(this).addClass("active").siblings().removeClass("active"), n.find(".box").eq($(this).index()).show(1, function() {
            $(this).addClass("open_tab")
        }).siblings(".box").hide(1, function() {
            $(this).removeClass("open_tab")
        })
    }
//-----------Second part--------------------------------
  $('input').each(function() {
    var el = $(this);
    var title = el.attr('title');
    if (title && title != '') {
      el.attr('title', '').after('<div class="info">' + title + '</div>');
      var el2=$(el.next());
      var width = el2.width();
      var height = el2.height();
      el.hover(
        function() {
          var el2=$(el.next());
            el2
            .clearQueue()
            .delay(200)
            .animate({width: width + 20, height: height + 20}, 200).show(200)
            .animate({width: width, height: height}, 200);
        },
        function() {
          var el2=$(el.next());
            el2
            .animate({width: width + 20, height: height + 20}, 150)
            .animate({width: 'hide', height: 'hide'}, 150);
        }
      ).mouseleave(function() {
        if (el2.is(':hidden')) el2.clearQueue();
      });
    }
  })

})(jQuery)
