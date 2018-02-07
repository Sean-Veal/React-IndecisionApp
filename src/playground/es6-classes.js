class Person {

    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi my name is ${this.name} I'm ${this.age}`;
    }
}

class Student extends Person {

    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getGreeting();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }

}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if(!!this.homeLocation) {
            greeting += ` They live in ${this.homeLocation}`;
        }

        return greeting;
    }


}

const me = new Traveler("Sean", 25, "Arizona");
const other = new Traveler();

console.log(me.getGreeting());
console.log(other.getGreeting());