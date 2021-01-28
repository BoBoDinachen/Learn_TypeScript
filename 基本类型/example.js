// 布尔变量
var isDone = false;
// 浮点数
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
// 字符串
var str = "";
// str = 222; 
str = "字符串";
// 模板字符串
var my_name = "XDEcat";
var text = "\u6211\u7684\u540D\u5B57\u662F" + my_name;
// 数组
var list = [1, 2, 3];
var list2 = [1, 2, 3];
// 元组
var x;
x = ["hello", 233]; // ok
//x = [233, "hello"]; // error
console.log(x[0].substring(1));
// 枚举类型
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
var colorName = Color[3]; // 通过值来推导color的名字
console.log(colorName);
// 使用any进行动态的推导类型
var value = 4;
value = "字符串";
// value = true;
console.log(value);
