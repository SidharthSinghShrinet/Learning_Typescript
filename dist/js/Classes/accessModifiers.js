//! Example 1
/*
class Animal {
  public name: string;
  private type: string;
  protected canFly: boolean;
  constructor(name: string, type: string, canFly: boolean) {
    this.name = name;
    this.type = type;
    this.canFly = canFly;
  }
}

class Dog extends Animal {
  protected baby: boolean;
  constructor(name: string, type: string, canFly: boolean, baby: boolean) {
    super(name, type, canFly);
    this.baby = baby;
  }
  speak(): string {
    return `Can Speak?`;
  }
  flyFn(): string {
    return `Can Fly? ${this.canFly}`;
  }
  haveBaby(): void {
    console.log(`Have Baby or not? ${this.baby}`);
  }
}

const animal1 = new Dog("Dog", "Pet", false, true);
console.log(animal1.name);
console.log(animal1.flyFn());
animal1.haveBaby();
*/
//! Example 2 (ReadOnly)
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    printPersonDetails() {
        console.log(`My name is ${this.name}`);
    }
}
const person1 = new Person("Ram");
console.log(person1.name);
// person1.name = "Sitaram";
person1.printPersonDetails();
export {};
//# sourceMappingURL=accessModifiers.js.map