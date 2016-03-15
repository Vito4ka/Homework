// first part of homework
  function pow(base, exp){
  var result = 1;
  for(var cnt = 0; cnt < exp; cnt++){
  result *= base };
  return result;
  }
var base = prompt('введите основание числа');
var exp = prompt('введите степень числа');
console.log(base, '^', exp, '=', pow(base,exp));

//second part of homework
var array = [];
for (var i = 0; i < 5; i++) {
  array[i]=prompt('введите одно из имён');
}
var user=prompt('введите имя пользователя');
var text='Вы не зарегистрированы';
for (var i = 0; i <5; i++) {
  if (user==array[i]) {
   text=(user + ', вы успешно вошли');
  }
}
alert(text);
