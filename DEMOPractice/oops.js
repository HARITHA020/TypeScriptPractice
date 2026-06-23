"use strict";
class Car {
    brand;
    speed;
    fuel;
    constructor(brand, speed, fuel) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }
    accelerate() {
        this.speed += 10;
        console.log(`accelerating to ${this.speed} km/h`);
    }
    refuel() {
        console.log(`refueling with ${this.fuel}`);
    }
    honk() {
        console.log("honk honk!");
    }
    display() {
        console.log(`brand:${this.brand}`);
        console.log(`speed:${this.speed}`);
        console.log(`Fuel:${this.fuel}`);
        this.fuel;
        this.honk;
    }
}
let myCar = new Car("BMW", 60, "Gasoline");
console.log(`brand:${myCar.brand}`);
myCar.accelerate();
myCar.display();
class car {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
    start() {
        console.log(this.brand + " Started");
    }
}
let c = new car("BMW");
c.start();
