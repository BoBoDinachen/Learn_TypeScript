// 创建一个学生类
var Student = /** @class */ (function () {
    // 构造器
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//创建一个学生对象
var stu = new Student("薛定谔", "の", "猫");
// 打印函数
function printObject(student) {
    return student.fullName;
}
console.log(printObject(stu));
