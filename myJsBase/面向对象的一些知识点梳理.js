// 面向对象的一些知识点梳理
function foo(){
    this.name = "John";
    this.age = 23; 
    var born = 1993;
    return this.age;
}
var foo2 = foo();
console.log(foo2);
var foo3 = new foo();
console.log(foo3);