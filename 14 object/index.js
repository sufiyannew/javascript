// create an obj
let person = {
  name: "John",
  age: 25,
  city: "Delhi"
};

//access valeus
console.log(person.name);      // Dot notation
console.log(person["age"]);    // Bracket notation

// add/update values
person.country = "India";      // Add
person.age = 30;               // Update

//delete proparty
delete person.city;

//loop through abj
for (let key in person) {
  console.log(key, person[key]);
}


// get key/values entries
console.log(Object.keys(person));   // ['name', 'age', 'country']
console.log(Object.values(person)); // ['John', 30, 'India']
console.log(Object.entries(person)); // [['name','John'], ['age',30], ...]


