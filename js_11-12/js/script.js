$(function() {

var html = $('#test').html();
var data = {};
data.name='Теплова Виктория Сергеевна';
data.char1='Достаточно взрослый человек';
data.target='Хочу учить фронтенд, потому что:';
data.reson1='Не хочу, чтоб мозги заржавели ';
data.reson2='Дочке нужен сайт для бизнеса';
data.reson3='Мне не помешают 3 штуки в месяц';
data.phone='Мой контактный телефон';
data.cont='В контакте не шарюсь, можете пойти на сайт';
data.href='Ресурс в интернете';
data.myf='Мой фидбек:';
data.problems='Пока учёба даётся тяжело. Приходится потеть';

var endata = {};
endata.name='Viktoriia Teplova';
endata.char1='Not a very young girl';
endata.target='I want to teach the frontend because:';
endata.reson1='I do not want brains rusty ';
endata.reson2='My daughter needed for business website';
endata.reson3='I do not give up a lot of money';
endata.phone='My phone number';
endata.cont='In contact sharyus not, can go to the website';
endata.href='Resource on the Internet';
endata.myf='My feedback:';
endata.problems='While it is given Study hard. I have to sweat';

  $('#en').click(function(){
    var content = tmpl(html, endata);
    $('#data').remove();
    $('.box1').append(content);
  });
  $('#ru').click(function(){
    var content = tmpl(html, data);
    $('#data').remove();
    $('.box1').append(content);
  });


var content = tmpl(html, data);
$('.box1').append(content);
});
