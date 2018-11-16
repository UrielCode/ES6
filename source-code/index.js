/********************** Variables */ 
// ES5
// var variable = 5;
// {
//   console.log('inside', variable);
//   var variable = 10;
// }
// console.log('outside', variable);
/***********************/ 
// ES6
// var
// let and const
// let variable = 5;
// {
//   console.log('inside', variable);
//   let variable = 10;
//   console.log('inside', variable);
// }
// console.log('outside', variable);

/********************** Strings template */
// ES5
// var name = 'Javier';
// var htmlElement = '<div class="alert">' + name + '</div>';

// ES6
// let name = 'Javier'
// let htmlElement = `
//   <div class="alert">
//     ${name}
//   </div>
// `
// console.log(htmlElement)

/********************** Arrow Functions */
// ES5
// var options = { element: 1, total: 10 };
// function getData (message, options) {
//   if (options) {
//     return options;
//   }
//   return message;
// };

// var value = getData('Hola', { element: options.element });
// console.log(value);

// ES6
// const sum = (x, y) => {
//   return x + y;
// };

// const sum = (x, y) => x + y;
// Currying functions

// const sum = (x) => {
//   return (y) => {
//     return x + y;
//   }
// }

// const sum = (x) => (y) => x + y;
// const sum = x => y => x + y;

// let value = sum(3)(5);
// console.log(value)

/********************** Class */
// ES6
// function Person (name, age, gender) {
//   this.name = name;
//   this.age = age;
//   this.gender = gender;
// }

// Person.prototype.incrementAge = function () {
//   return this.age += 1;
// }

// function Student(name, age, gender, enroll_code) {
//   Person.call(this, name, age, gender);
//   this.enroll_code = enroll_code;
// }

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.incrementAge = function () {
//   Person.prototype.incrementAge.call(this);
//   this.age += 20;
//   console.log(this.age);
// }

// var student = new Student('Javier', 25, 'Male', '0000001');
// student.incrementAge();

// ES6
// class Person {
//   constructor (name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }

//   incrementAge () {
//     this.age += 1;
//   }
// }

// class Student extends Person {
//   constructor(name, age, gender, enroll_code) {
//     super(name, age, gender);
//     this.enroll_code = enroll_code;
//   }

//   incrementAge () {
//     super.incrementAge();
//     this.age += 20;
//     console.log(this.age);
//   }
// }

// const student = new Student('Javier', 25, 'Male', '0000001');
// student.incrementAge();

/********************** Destructring */
// ES5
// var someArray = ['Braulio', 'Javier', 'Amador'];
// var braulio = someArray[0];
// var javier = someArray[1];
// var amador = someArray[2];

// var someObject = { data: { name: 1 }}
// var name = someObject.data.name;

// ES6
// const someArray = ['Braulio', 'Javier', 'Amador'];
// let [braulio,...other] = someArray
// console.log(other);

// const props = { author: 'Javier', type: 'POST' };
// const { type, author } = props;
// console.log(type)

/********************** Spread Operator */
// ES5
// function sum (x, y, z) {}
// var args = [1, 2, 3];
// sum.apply(null, args);

// ES6
// const sum = (x, y, z) => {}
// const args = [1, 2, 3];
// sum(...args) // sum(1,2,3)

// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2));
// console.log([...array1, ...array2])

/********************** Modules */
// ES5
// const math = require(',/module');

// ES6
// import { PI, circunferencia } from './module.js';
// console.log(PI);
// console.log(circunferencia(3));

/********************** Promises - Async/Await */
const promesa = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
    // reject('Uppppppppppsssss!!!');
  }, 5000);
});

// promesa().then(response => {
//   value = response
// }).catch(err => console.error(err))


// ES6
// async function getData () {
//   try {
//     const value = await promesa();
//     console.log(`value: ${value}`)
//   } catch (e) {
//     console.log(e)
//   }
// }

// getData();
