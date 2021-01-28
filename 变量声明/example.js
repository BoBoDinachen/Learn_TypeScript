// let 和 var
/**
 * var声明的变量没有块级作用域，全局访问
 */
// for (var i = 0; i < 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   },500);
// } 
/**
 * 使用let声明的变量，使变量拥有块级作用域
 */
// for (let i = 0; i < 10; i++) { 
//   setTimeout(() => {
//     console.log(i);
//   },500);
// }
// 使用解构 1. 数组的解构赋值
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first);
console.log(second);
// 作用于函数参数
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
//在数组里面使用...语法创建剩余变量
var _a = [1, 2, 3, 4], first2 = _a[0], rest = _a.slice(1);
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
// 解构数组部分元素，使用,分隔
var _b = [1, 2, 3, 4], foo = _b[1], bar = _b[3];
// 使用解构 2. 对象的解构
var o = {
    a: "foo",
    b: "bar",
    c: "233"
};
var a = o.a, b = o.b;
console.log(a); //outputs foo
