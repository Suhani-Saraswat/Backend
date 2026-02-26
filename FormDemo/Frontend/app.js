function PersonMaker(name, age) {
    const Person = {
        name: name,
        age: age,
        talk() {
            console.log(`Hi, my name is ${name}`);
        }
    };
    return Person();
}

let P1 = PersonMaker("adam", 25);
let P2 = PersonMaker("eve", 24);