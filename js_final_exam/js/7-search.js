$(function() {
  updatePictures('');

  function updatePictures(input) {
    var API_KEY = '2652794-8cebb08b5e968b205ae0d687a';
    var URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent(input) + "&order=latest&image_type=photo";
    $.getJSON(URL, function(data) {
      console.log(data);
      if (parseInt(data.totalHits) > 0) {
        var html = $('#template').html();
        var tmpl = _.template(html);
        var content = tmpl(data);
        $(".gallery__pictures").empty().append(content);
      }
      else
        alert('No hits:( Enter smthng else...');
    });
  }
  $("#gallery__form").submit(function(event) {
    event.preventDefault();
    var input = $.trim($("#gallery__input").val());
    if (!input) {
      alert('empty request');
    }
    else {
      updatePictures(input);
    }
  });
});
