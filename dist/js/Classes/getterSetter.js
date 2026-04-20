//! Example 1
class Person {
    _name;
    constructor(name) {
        this._name = name;
    }
    printName(newName) {
        console.log("Person Name:", this._name);
        this._name = newName;
        console.log("Updated Person Name:", this._name);
    }
    get printPersonName() {
        console.log("Person Name:", this._name);
        return `Updated Person Name:${this._name}`;
    }
    printNumber() {
        for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
    }
}
const person1 = new Person("Ram");
person1.printName("Sitaram");
console.log(person1.printPersonName);
person1.printNumber();
export {};
//# sourceMappingURL=getterSetter.js.map