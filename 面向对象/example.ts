interface Person { 
  fullName: string,
  firstName: string,
  lastName: string
}

// 创建一个学生类
class Student { 
  fullName: string;
  // 构造器
  constructor(public firstName, public middleInitial, public lastName) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;  
  }
}

//创建一个学生对象
let stu = new Student("薛定谔", "の", "猫");

// 打印函数
function printObject(student: Person) { 
  return student.fullName;
}

console.log(printObject(stu));
