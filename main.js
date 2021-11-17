//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFoods(foodsObject){
    if (typeof foodsObject === 'string'){
        console.log(foodsObject);
    }
    else if (foodsObject.constructor === Array){
        foodsObject.forEach(obj => displayFoods(obj));
    }
    else if (typeof foodsObject === 'object'){
        Object.values(foodsObject).forEach(obj => displayFoods(obj));
    }
}

displayFoods(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person{
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    printInfo = () => {
        console.log(`Name: ${this.name}, Age:${this.age}`);
        return(`Name: ${this.name}, Age:${this.age}`);
    }

    addAge = (amount)=>
    {
        this.age += amount;
    }
    
}

p1 = new Person("Mike", 30);
p2 = new Person("Joe", 50);
p1.printInfo();
p2.printInfo();
p2.addAge(3);
p2.printInfo();

// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function promiseGreater(word) {
    return new Promise((resolve, reject) => {
        if (word.length > 10){
            resolve("Big word");
        }
        else{
            reject("Small Number");
        }
    })
}

promiseGreater("helloooooooooooooooo")
.then((result) => {console.log(result)})
.catch((result) => {console.log(result)});

promiseGreater("hello")
.then((result) => {console.log(result)})
.catch((result) => {console.log(result)});