// Factory Function
// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }
// let p1 = PersonMaker("adam", 25);
// let p2 = PersonMaker("eve", 24);


//Constructors - doesn't return anything & start with capital
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
// Person.prototype.talk = function () {
//     console.log(`Hi, my name is ${this.name}`);
// };
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);


//Classes
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }
// let p1 = new Person("adam", 25);
// let p2 = new Person("eve", 25);

//Inheritance
class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, age, marks) {
        super(name, age); //parent class contructor is being called
        this.marks = marks;
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); //parent class contructor is being called
        this.subject = subject;
    }
}