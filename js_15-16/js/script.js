$(function() {
  $("#search_form").submit(function(event) {
    var input = $.trim($("#search_input").val());
      search(input);
      event.preventDefault();
  });
});

function search(input) {
  var google_url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBJ1ANO_OPILDxoQEFjjxJAyNpaHlJh_Xk&cx=010040009403896854958%3A4jd9q5xnqy0&q=" + input + "&alt=json&callback=callback&start=1&fields=items(link%2C%20htmlTitle%2C%20htmlFormattedUrl%2C%20htmlSnippet)";
  $.ajax({
    method: "GET",
    url: google_url,
    dataType: "jsonp"
  });
}

// output of results using lodash
function callback(response) {
  var html = $('#template').html();
  var tmpl = _.template(html);
  var content = tmpl(response);
  $("#searchOutput").append(content);
}
