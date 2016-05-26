function  Human() {
  this.name= 'Jon';
  this.age= 33;
  this.gender= 'mail';
  this.growth= 210;
  this.weight= 105;
}
function Worker() {
    this.placeOfWork= 'factory';
    this.salary= 2700;
    this.toWork= function() {
      alert('You must work hardly!');
    };
}
function Student() {
    this.placeOfStudy= 'Berlin';
    this.scholarship= 700;
    this.WatchTVSshows= function() {
      alert('Lets watch TV');
    };
 }
Worker.prototype = new Human();
Student.prototype = new Human();

var newWorker = new Worker();
var newStudent = new Student();

console.log('newWorker.name=', newWorker.name);
console.log('newWorker.age=', newWorker.age);
console.log('newWorker.gender', newWorker.gender);
console.log('newWorker.salary', newWorker.salary);
console.log('newStudent.name', newStudent.name);
console.log('newStudent.age', newStudent.age);
console.log('newStudent.weight', newStudent.weight);
console.log('newStudent.placeOfStudy', newStudent.placeOfStudy);
