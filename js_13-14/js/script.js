"use-strict";
(function($) {
  $(function() {
    var  objTest = {
      name: 'Тест по программированию',
      questions: [
    {
      title: 'Вопрос №1',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: true
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        },
      ]
    },
    {
      title: 'Вопрос №2',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: true
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        },
      ]
    },
    {
      title: 'Вопрос №3',
      answers: [
        {
          text: 'Вариант ответа №1',
          correct: false
        },
        {
          text: 'Вариант ответа №2',
          correct: true
        },
        {
          text: 'Вариант ответа №3',
          correct: false
        },
      ]
    },
  ]
};
var str = JSON.stringify(objTest);

localStorage["test"] = str;
var test = localStorage["test"];
var saved = JSON.parse(test);
//Name of test----------------------------
var html = $('#nameTest').html();
var content = tmpl(html, saved);
$('body').append(content);

var htmlQuestion=$('#question').html();
var htmlAnswer=$('#answer').html();
//questions-----------------------------
var contentQuestion = '';
for (var i = 0; i < saved.questions.length; i++) {
  contentQuestion = tmpl(htmlQuestion, saved.questions[i]);
  $('ol').append(contentQuestion);

//answers------------------
    var  contentAnswer = '';
    for (var j = 0; j < saved.questions[i].answers.length; j++) {
    var  str = {};
      str.form = 'a'+i;
      str.value = 10 * i+j;
      str.text = saved.questions[i].answers[j].text;
      console.log(str);
      contentAnswer += tmpl(htmlAnswer, str);
    };
  $('ol > li:last-child > ul').append(contentAnswer);
};

$('.button').click(function(){
var ch= $("input:radio:checked");
console.log(ch);
alert(ch);
});
});
})(jQuery);
