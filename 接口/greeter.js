function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "XDE",
    lastName: "cat"
};
document.body.innerHTML = greeter(user);
