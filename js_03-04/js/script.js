//создаём элемент (узел) ol
var elementOL = document.createElement("ol");
elementOL.classList.add('box');
var elementLI1 = document.createElement('li');
elementLI1.innerHTML ='Вопрос №1';
elementOL.appendChild(elementLI1);

var elementLI2 = document.createElement('li');
elementLI2.innerHTML ='Вопрос №2';
elementOL.appendChild(elementLI2);

var elementLI3 = document.createElement('li');
elementLI3.innerHTML ='Вопрос №3';
elementOL.appendChild(elementLI3);


var body = document.querySelector('body');
body.appendChild(elementOL);




//создаём текстовый узел, содержащий текст "Смартфон"
var textSmart= document.createTextNode("Cмapтфoн");
//добавляем созданный текстовый узел как последний дочерний элемент к только что созданному элементу LI
elementLI.appendChild(textSmart);
//получаем элемент, к которому будет добавлен созданный узел li как дочерний
var elementUL = document.getElementById("list");
//добавляем созданный элемент li как последний дочерний элемент к UL с id="list"
elementUL.appendChild(elementLI);
