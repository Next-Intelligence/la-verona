function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  console.log(this.type + " make a sound");
};

function Dog(name) {
  Animal.call(this, "Dog");
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.beak = function () {
  console.log(this.name + " Beak");
};

function Cat() {
  var name;
  Object.defineProperty(this, "name", {
    get() {
      return name || "";
    },
    set(value) {
      name = value;
    },
    enumerable: true,
    configurable: true,
  });
}
var xx = new Cat();
xx.name = "Bosy";
console.log(xx.name);

Object.defineProperty(xx, "speed", {
  value: 30,
  writable:false,
  enumerable:true
});
xx.speed=40
console.log(xx.speed);