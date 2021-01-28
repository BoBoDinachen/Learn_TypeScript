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

let input = [1, 2];
let [first, second] = input;
console.log(first);
console.log(second);

// 作用于函数参数
function f([first, second]: number[]) {
  console.log(first);
  console.log(second);
}
f(input);

//在数组里面使用...语法创建剩余变量
let [first2, ...rest] = [1, 2, 3, 4];
console.log(first2); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]

// 解构数组部分元素，使用,分隔
let [, foo, , bar] = [1, 2, 3, 4];



// 使用解构 2. 对象的解构
let o = {
  a: "foo",
  b: "bar",
  c: "233"
}
let { a, b } = o;
console.log(a);   //outputs foo
// 也可以对解构对象的属性进行重命名
let { a: newName1, b: newName2 } = o;


// 使用解构 3. 函数声明
function f2({ a, b = 0 } = { a: "" }): void {
  // ...
}
f2({ a: "yes" }); // ok, default b = 0
f2(); // ok, default to {a: ""}, which then defaults b = 0
// f({}); // error, 'a' is required if you supply an argument

// 展开操作符
//展开操作符正与解构相反。 它允许你将一个数组展开为另一个数组，或将一个对象展开为另一个对象。 
let first3 = [1, 2];
let second3 = [3, 4];
let bothPlus = [0, ...first3, ...second3, 5];