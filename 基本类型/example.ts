// 布尔变量
let isDone: boolean = false;

// 浮点数
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

// 字符串
let str: string = "";
// str = 222; 
str = "字符串";

// 模板字符串
let my_name: string = "XDEcat";
let text: string = `我的名字是${my_name}`;

// 数组
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// 元组
let x: [string, number];
x = ["hello", 233]; // ok
//x = [233, "hello"]; // error
console.log(x[0].substring(1));

// 枚举类型
enum Color { Red=1, Green=2, Blue=3 };
let c: Color = Color.Green;
let colorName: string = Color[3];  // 通过值来推导color的名字
console.log(colorName);


// 使用any进行动态的推导类型
let value: any = 4;
value = "字符串";
// value = true;
console.log(value);

// 使用void，表示没有返回值
function printValue(): void { 
  console.log("使用void在函数进行声明，表示函数没有返回值，没有类型");
}
let unusable: void = undefined;  // void声明在变量上面的时候，只能赋值null和undefined

// null和undefined类型 默认情况下null和undefined是所有类型的子类型。
let u: undefined = undefined;
let n: null = null;

// never类型表示是那些永远都不存在的值类型
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {
  }
}

// Object类型 object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

// create(42); // Error
// create("string"); // Error
// create(false); // Error
// create(undefined); // Error


// 类型断言 1.尖括号写法
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// 类型断言 2.as写法
let someValue2: any = "this is a string";
let strLength2: number = (someValue2 as string).length;