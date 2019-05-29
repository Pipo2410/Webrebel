// function Person () {
//     this.name = prompt('What is your name?');
//     this.yearOfBirth = prompt('When have you been born?');
//     this.years = this.arrayCalc([this.yearOfBirth], this.calcAge);
// }

// Person.prototype.calcAge = function(el) {
//     return 2019 - el;
// }

// Person.prototype.arrayCalc = function(arr, fn) {

//     var arrayAges = [];
//     for(var i = 0; i < arr.length; i++) {
//         // arrayAges.push(fn(arr[i]));
//         arrayAges[i] = fn(arr[i]);
//     }
//     return arrayAges;
// }

// var numberOfPeople = Number(prompt('How many people we have?'));

// function createDatabase () {
//     var students = [];

//     for(var i = 0; i < numberOfPeople; i++) {
//         // students.push(new Person());
//         // students[i].age = students[i].calcAge();

//         students[i] = new Person();
//         students[i].age = students[i].calcAge(students[i].yearOfBirth);

//         students[i].ages = students[i].arrayCalc([students[i].yearOfBirth], students[i].calcAge);

//     }
//     return students;
// }

// var people = createDatabase();
// console.log(people);


// var numberOfPeople = Number(prompt('How many people we have?'));

// var personProto = {
//     calcAge: function(year) {
//         return 2019 - year
//     }
// }

// function createDatabase () {
//     var students = [];

//     for(var i = 0; i < numberOfPeople; i++) {
        
//         students[i] = Object.create(personProto, {
//             yearOfBirth: { value: Number(prompt('When have you been born??')) }
//         });
//         students[i].age = students[i].calcAge(students[i].yearOfBirth);

//     }
//     return students;
// }

// var people = createDatabase();
// console.log(people);




var numberOfPeople = Number(prompt('How many people we have?'));


function Person() {
    this.name = prompt('What is your name?');
    this.yearOfBirth = prompt('When have you been born?');
    this.years = this.calcAge(this.yearOfBirth);
    this.agessssss = this.arrayCalc([this.yearOfBirth], this.calcAge);
}

Person.prototype.calcAge = function(year) {
    return 2019 - year;
}

Person.prototype.arrayCalc = function(arr, fn) {
    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function createDatabase() {
    var students = [];

    for(var i = 0; i < numberOfPeople; i++) {
        students.push(new Person());
        students[i].age = students[i].calcAge(students[i].yearOfBirth);

        students[i].hablar = students[i].arrayCalc([students[i].yearOfBirth], students[i].calcAge);
    }
    return students;
}

var people = createDatabase();
console.log(people);