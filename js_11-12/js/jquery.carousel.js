(function($){

$.fn.carousel=function(options){
  var defaults={
    leftBtn: 'leftBtn',
    rightBtn: 'rightBtn',
    delay:400
  }
  var settings = $.extend(defaults, options);

    var leftUIEl = $('.' + settings.leftBtn);
    var rightUIEl = $('.' + settings.rightBtn);
    var time=settings.delay;

    var elementsList = this;
    var pixelsOffset = 125;
    var currentLeftValue = 0;
    var elementsCount = elementsList.find('li').length;
    var minimumOffset = - ((elementsCount - 5) * pixelsOffset);
    var maximumOffset = 0;

  leftUIEl.click(function() {
          if (currentLeftValue != maximumOffset) {
            currentLeftValue += 125;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        }
    });

    rightUIEl.click(function() {
        if (currentLeftValue != minimumOffset) {
            currentLeftValue -= 125;
            elementsList.animate({ left : currentLeftValue + "px"}, time);
        }
    });

}

return this;
})(jQuery)
