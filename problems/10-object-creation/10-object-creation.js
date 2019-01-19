/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

/**
 * Author: Lori A. Oliver
 */
// Object Literals of each Person
let person = {
    name: 'Lori',
    age: 31
}

let person1 = {
    name: 'Lauren',
    age: 27
}

let person2 = {
    name: 'Lisa',
    age: 22
}

// Class (created through the use of the function keyword) accepts a person object and adds features 
function addFieldsToPerson(newPerson, ht, hairColor){
    this.whoIAm = newPerson,
    this.height = ht,
    this.hairColor = hairColor

    this.discussMyself = () => {
        console.log(`\tMy Name is ${this.whoIAm['name']} and I am ${this.whoIAm['age']} years old.
        I'm ${this.height} feet tall. My hair color is ${this.hairColor}.\n`);
    }
}

// The class People wraps several person objects together and calls their discussMyself methods
class People {
    constructor(onePerson, anotherPerson, extraPerson) {
        this.onePerson = onePerson,
        this.anotherPerson = anotherPerson,
        this.extraPerson = extraPerson
    }

    introduce() {
        let p0 = new addFieldsToPerson(this.onePerson, 5, 'black');
        let p1 = new addFieldsToPerson(this.anotherPerson, 5.11, 'blonde');
        let p2 = new addFieldsToPerson(this.extraPerson, 5.5, 'burgandy');

        p0.discussMyself();
        p1.discussMyself();
        p2.discussMyself();
    }
}

// Create people, put them in a group and introduce each one. 
//DEBUG console.log(person);
let group = new People(person, person1, person2);
group.introduce();