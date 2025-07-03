class Human {
    // properties
    age = 18;
    weight = 70;
    height = 175;
    gender = "male";

    // behaviors
    walking() {
        console.log("I am walking");
    }

    running() {
        console.log("I am running");
    }
}

let obj = new Human();

obj.walking();

console.log(obj.age);
