// question 1
var elementForm = document.createElement("FORM");

var elementUL1 = document.createElement("UL");

var elementLI11 = document.createElement('LI');
var elementInput11 = document.createElement("INPUT");
elementInput11.setAttribute("type", "checkbox");
elementInput11.setAttribute("name", "a11");
var text11= document.createTextNode(" Вариант ответа №1");
elementLI11.appendChild(elementInput11);
elementLI11.appendChild(text11);
elementUL1.appendChild(elementLI11);

var elementLI12 = document.createElement('LI');
var elementInput12 = document.createElement("INPUT");
elementInput12.setAttribute("type", "checkbox");
elementInput12.setAttribute("name", "a12");
var text12= document.createTextNode(" Вариант ответа №2");
elementLI12.appendChild(elementInput12);
elementLI12.appendChild(text12);
elementUL1.appendChild(elementLI12);

var elementLI13 = document.createElement('LI');
var elementInput13 = document.createElement("INPUT");
elementInput13.setAttribute("type", "checkbox");
elementInput13.setAttribute("name", "a13");
var text13= document.createTextNode(" Вариант ответа №3");
elementLI13.appendChild(elementInput13);
elementLI13.appendChild(text13);
elementUL1.appendChild(elementLI13);

var elementLI1 = document.createElement('LI');
elementLI1.innerHTML ='Вопрос №1';
elementLI1.appendChild(elementUL1);

// question 2---------------------------------------------------

var elementUL2 = document.createElement("UL");

var elementLI21 = document.createElement('LI');
var elementInput21 = document.createElement("INPUT");
elementInput21.setAttribute("type", "checkbox");
elementInput21.setAttribute("name", "a21");
var text21= document.createTextNode(" Вариант ответа №1");
elementLI21.appendChild(elementInput21);
elementLI21.appendChild(text21);
elementUL2.appendChild(elementLI21);

elementLI22 = document.createElement('LI');
elementInput22 = document.createElement("INPUT");
elementInput22.setAttribute("type", "checkbox");
elementInput22.setAttribute("name", "a22");
var text22= document.createTextNode(" Вариант ответа №2");
elementLI22.appendChild(elementInput22);
elementLI22.appendChild(text22);
elementUL2.appendChild(elementLI22);

var elementLI23 = document.createElement('LI');
var elementInput23 = document.createElement("INPUT");
elementInput23.setAttribute("type", "checkbox");
elementInput23.setAttribute("name", "a23");
var text23= document.createTextNode(" Вариант ответа №3");
elementLI23.appendChild(elementInput23);
elementLI23.appendChild(text23);
elementUL2.appendChild(elementLI23);

var elementLI2 = document.createElement('LI');
elementLI2.innerHTML ='Вопрос №1';
elementLI2.appendChild(elementUL2);

//question3-------------------------------------

var elementUL3 = document.createElement("UL");

var elementLI31 = document.createElement('LI');
var elementInput31 = document.createElement("INPUT");
elementInput31.setAttribute("type", "checkbox");
elementInput31.setAttribute("name", "a31");
var text31= document.createTextNode(" Вариант ответа №1");
elementLI31.appendChild(elementInput31);
elementLI31.appendChild(text31);
elementUL3.appendChild(elementLI31);

var elementLI32 = document.createElement('LI');
var elementInput32 = document.createElement("INPUT");
elementInput32.setAttribute("type", "checkbox");
elementInput32.setAttribute("name", "a32");
var text32= document.createTextNode(" Вариант ответа №2");
elementLI32.appendChild(elementInput32);
elementLI32.appendChild(text32);
elementUL3.appendChild(elementLI32);

var elementLI33 = document.createElement('LI');
var elementInput33 = document.createElement("INPUT");
elementInput33.setAttribute("type", "checkbox");
elementInput33.setAttribute("name", "a33");
var text33= document.createTextNode(" Вариант ответа №3");
elementLI33.appendChild(elementInput33);
elementLI33.appendChild(text33);
elementUL3.appendChild(elementLI33);

var elementLI3 = document.createElement('LI');
elementLI3.innerHTML ='Вопрос №1';
elementLI3.appendChild(elementUL3);


//=================================================
var elementOL = document.createElement("OL");
elementOL.classList.add('box');

elementOL.appendChild(elementLI1);
elementOL.appendChild(elementLI2);
elementOL.appendChild(elementLI3);
//===============================================
var elementInput = document.createElement("INPUT");
elementInput.setAttribute("type", "submit");
elementInput.setAttribute("class", "button");
elementInput.setAttribute("value", "Проверить мои результаты");


elementForm.innerHTML ='<p>Тест по программированию</p>';
elementForm.appendChild(elementOL);
elementForm.appendChild(elementInput);



document.body.appendChild(elementForm);
