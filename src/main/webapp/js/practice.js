/**
 * Created by bekuku on 13/6/15.
 */
var Person = function(living, age, gender) {
    this.living = living;
    this.age = age;
    this.gender = gender;
    this.getGender = function() {return this.gender;};
};

var cody = new Person(true, 33, 'male');
console.log(typeof cody);
console.log(cody);
console.log(cody.constructor);

var myString = new String('foo');
console.log(myString);

var myArray = new Array(); // myArray is an instance of Array
// myArray is an object and an instance of Array() constructor
console.log(typeof myArray); // logs object! What? Yes, arrays are type of object
console.log(myArray); // logs [ ]
console.log(myArray.constructor); // logs Array()

var a = 4;
if(true){
    var a = 5;
}
console.log(a);

var string1 = 'Hello World';
var string2 = string1;
string1 = null;
console.log(string1, string2);

var stringObj1 = new String('Hello World');
stringObj2 = stringObj1;
stringObj1 = null;
console.log(stringObj1, stringObj2);

var lisa = cody;
cody.age = 34;
console.log(lisa.age, cody.age);
cody.age = null;

console.log(lisa.age, cody.age);

// Primitive values are equal by value
var price1 = 10;
var price2 = 10;
var price3 = new Number('10');
var price4 = price3;

console.log(price1 === price2); // true
console.log(price1 == price2); // true
console.log(price1 === price3); // false
console.log(price1 == price3); // true
console.log(price3 === price4); // true
console.log(price3 == price4); // true

// Produce primitive values
var myNull = null;
var myUndefined = undefined;
var primitiveString1 = "foo";
var primitiveString2 = String('foo'); // did not use new, so we get primitive
var primitiveNumber1 = 10;
var primitiveNumber2 = Number('10'); // did not use new, so we get primitive
var primitiveBoolean1 = true;
var primitiveBoolean2 = Boolean('true'); // did not use new, so we get primitive
console.log("primitiveString1 === primitiveString2 :: ", primitiveString1 === primitiveString2);
console.log("primitiveString1 ", primitiveString1.toString() );
console.log("primitiveString2 ", primitiveString2.toString() );

//
var foo = {};
console.log(foo.constructor === Object) /* logs true, because object()
 constructed foo */
console.log(foo.constructor) // points to the Object() constructor function

//
var CustomConstructor = function CustomConstructor(){ return 'Wow!'; };
var instanceOfCustomObject = new CustomConstructor();
// logs true
console.log(instanceOfCustomObject.constructor === CustomConstructor);
// returns a reference to CustomConstructor() function
// returns 'function() { return 'Wow!'; };'
console.log(instanceOfCustomObject.constructor);
console.log(instanceOfCustomObject);

//
var myArray = new Array();
myArray = ["Test1", "Test2", "Test3"];
myArray.prop = 'test';
console.log(myArray.prop) // logs 'test'
console.log(myArray);
console.log(myArray[1]);

//Loop througn Object's properties
console.log("Person :: cody ........");
for (var key in cody) { // key is a variable used to represent each property name
// avoid properties inherited from the prototype chain
//console.log(key);
    if(cody.hasOwnProperty(key)) {
        console.log(key);
    }
}

var dennis = {
    age: 31,
    gender: 'male'
};

console.log("Dennis:........");
for (var key in dennis) { // key is a variable used to represent each property name
// avoid properties inherited from the prototype chain
//console.log(key);
    if(dennis.hasOwnProperty(key)) {
        console.log(key);
    }
}

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

function isPalindrome(str) {
    str = str.replace(/\W/g, '').toLowerCase();
    return (str == str.split('').reverse().join(''));
}
console.log(isPalindrome("level"));                   // logs 'true'
console.log(isPalindrome("levels"));                  // logs 'false'
console.log(isPalindrome("A car, a man, a maraca"));  // logs 'true'

function sum(x) {
    if (arguments.length == 2) {
        return arguments[0] + arguments[1];
    } else {
        return function(y) { return x + y; };
    }
}

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

console.log(false == '0');
console.log(false === '0');

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    console.log(4);
})();

for (var i = 0; i < 5; i++) {
    var btn = document.createElement("BUTTON");
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function(){ console.log(i); });
//  document.body.appendChild(btn);
}
var a={},
    b={key:'b'},
    c={key:'c'};

a[b]=123;// Same property name as below.
a[c]=456;

console.log(b);
console.log(c);
console.log(a[b]);


var Person = function(){
    this.name = 'Dennis';
    this.phone = '91230987';
};

var dennis = new Person();
console.log("dennis.name", dennis.name);

function createPerson(name){
    return {
        name: name
    }
}

var p1 = createPerson("Dennis");
console.log(p1.name);


function aPerson(name){
    this.name = name;
}
var p2 = new aPerson("Dennis");
console.log(p2.name);
console.log("typeof p1 " + typeof p1);
console.log("typeof p2 " + typeof p2);
console.log("typeof dennis " + typeof dennis);
console.log("typeof Person " + typeof Person);

//Inheritance
var InOjb = function(){
    this.name = 'Dennis';
    this.phone = '91230987';
};


var ChildOjb = function(){};
ChildOjb.prototype = new InOjb();
console.log(ChildOjb.prototype);
console.log("ChildOjb.hasOwnProperty('name') " + ChildOjb.hasOwnProperty('name'));
console.log("ChildOjb.name " + ChildOjb.name);

var inheritanceObject = {
    name: 'Dennis',
    phone: '9090909'
}

var inheritanceChildObject = function() {};
inheritanceChildObject.prototype = inheritanceObject.prototype;
//inheritanceObject.prototype = Object.create(inheritanceObject.prototype);
console.log(inheritanceChildObject.prototype); //
console.log("inheritanceChildObject.hasOwnProperty('name') " + inheritanceChildObject.hasOwnProperty('name'));
console.log("inheritanceChildObject.name " + inheritanceChildObject.name); //Do not inherit the value
inheritanceChildObject.address = 'Singapore';
console.log("inheritanceObject.address " + inheritanceObject.address); // undefined, only exit in child instance, not a real inheritance
console.log("inheritanceChildObject.address " + inheritanceChildObject.address);

var inhObj1 = function(){};
inhObj1.prototype = Object.create(inheritanceObject);
console.log("inhObj1.prototype " + inhObj1.prototype); // undefined, only exit in child instance, not a real inheritance
console.log("inhObj1.address " + inhObj1.address);


// Shape - superclass
function Shape() {
    this.x = 0;
    this.y = 0;
}

// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x;
    this.y += y;
    console.info('Shape moved.');
};

// Rectangle - subclass
function Rectangle() {
    Shape.call(this); // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

var rect = new Rectangle();

console.log('Is rect an instance of Rectangle? ' + (rect instanceof Rectangle)); // true
console.log('Is rect an instance of Shape? ' + (rect instanceof Shape)); // true
rect.move(1, 1); // Outputs, 'Shape moved.'

//Closure
/* A closure is an inner function that has access to the variables in the outer (enclosing)
 function’s scope chain. The closure has access to variables in three scopes;
 specifically: (1) variable in its own scope, (2) variables in the enclosing function’s scope,
 and (3) global variables.
 */
var globalVar = "xyz";

(function outerFunc(outerArg) {
    var outerVar = 'a';

    (function innerFunc(innerArg) {
        var innerVar = 'b';

        console.log(
            "outerArg = " + outerArg + "\n" +
            "innerArg = " + innerArg + "\n" +
            "outerVar = " + outerVar + "\n" +
            "innerVar = " + innerVar + "\n" +
            "globalVar = " + globalVar);

    })(456);
})(123);