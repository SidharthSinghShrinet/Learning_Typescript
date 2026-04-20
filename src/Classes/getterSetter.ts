//! Example 1
class Person {
  private _name: string;
  constructor(name: string) {
    this._name = name;
  }
  printName(newName: string): void {
    console.log("Person Name:", this._name);
    this._name = newName;
    console.log("Updated Person Name:", this._name);
  }
  get printPersonName(): string {
    console.log("Person Name:", this._name);
    return `Updated Person Name:${this._name}`;
  }

  printNumber(): void {
    for (let i = 1; i <= 10; i++) {
      console.log(i);
    }
  }
}

const person1 = new Person("Ram");
person1.printName("Sitaram");
console.log(person1.printPersonName);
person1.printNumber();
