'use strict';

(function ($) {
  $(function () {
    var objTest = {
      name: 'Тест по программированию',
      questions: [{
        title: 'Вопрос №1',
        answers: [{
          text: 'Вариант ответа №1',
          correct: false
        }, {
          text: 'Правильный вариант ответа №2',
          correct: true
        }, {
          text: 'Вариант ответа №3',
          correct: false
        }]
      }, {
        title: 'Вопрос №2',
        answers: [{
          text: 'Вариант ответа №1',
          correct: false
        }, {
          text: 'Правильный вариант ответа №2',
          correct: true
        }, {
          text: 'Вариант ответа №3',
          correct: false
        }]
      }, {
        title: 'Вопрос №3',
        answers: [{
          text: 'Вариант ответа №1',
          correct: false
        }, {
          text: 'Правильный вариант ответа №2',
          correct: true
        }, {
          text: 'Вариант ответа №3',
          correct: false
        }]
      }]
    };
    var str = JSON.stringify(objTest);

    localStorage["test"] = str;
    var test = localStorage["test"];
    var saved = JSON.parse(test);
    //Name of test----------------------------
    var html = $('#nameTest').html();
    var content = tmpl(html, saved);
    $('.md-modal').before(content);

    var htmlQuestion = $('#question').html();
    var htmlAnswer = $('#answer').html();
    //questions-----------------------------
    var contentQuestion = '';
    for (var i = 0; i < saved.questions.length; i++) {
      contentQuestion = tmpl(htmlQuestion, saved.questions[i]);
      $('ol').append(contentQuestion);

      //answers------------------
      var contentAnswer = '';
      for (var j = 0; j < saved.questions[i].answers.length; j++) {
        var strAnswer = {};
        strAnswer.form = 'a' + i;
        strAnswer.id = 10 * i + j;
        strAnswer.text = saved.questions[i].answers[j].text;
        contentAnswer += tmpl(htmlAnswer, strAnswer);
      };
      $('ol > li:last-child > ul').append(contentAnswer);
    };
    //Check form ------------------------------
    $('.md-trigger').click(function (event) {
      var count = 0;
      for (var _i = 0; _i < saved.questions.length; _i++) {
        for (var _j = 0; _j < saved.questions[_i].answers.length; _j++) {
          var id = '#' + (10 * _i + _j);
          count += $(id).prop("checked") * saved.questions[_i].answers[_j].correct;
        }
      }
      $('.md-content p').html('Количество правильных ответов - ' + count);
      $('.md-modal').addClass('md-show');
      $('.md-overlay').addClass('md-show');
      //  alert('Количество правильных ответов - '+ count);
      event.preventDefault();
      /*$('.md-overlay').fadeIn(400,
      function(){
        $('.md-modal')
          .css('display', 'block')
            .animate({opacity: 1, top: '50%'}, 200);
          });*/
    });
    //---------------------------------------
    $(".md-close").click(function () {
      $('.md-modal').removeClass('md-show');
      $('.md-overlay').removeClass('md-show');

      location.reload();
    });
  });
})(jQuery);
