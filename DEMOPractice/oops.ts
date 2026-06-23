class Car {
    public brand: string;
    private speed: number;
    protected fuel: string;

    constructor(brand: string, speed: number, fuel: string) {
        this.brand = brand;
        this.speed = speed;
        this.fuel = fuel;
    }
     
    public accelerate(){
        this.speed+=10;
        console.log(`accelerating to ${this.speed} km/h`);
    }

    private refuel(){
        console.log(`refueling with ${this.fuel}`);
    }

    protected honk(){
        console.log("honk honk!");
    }

    public display(){
        console.log(`brand:${this.brand}`);
        console.log(`speed:${this.speed}`);
        console.log(`Fuel:${this.fuel}`);
        this.fuel
        this.honk
    } 
}
let myCar= new Car("BMW",60,"Gasoline")
console.log(`brand:${myCar.brand}`);
myCar.accelerate()
myCar.display()

//interface
interface Vehicle {
    brand: string;
    start(): void;
}

class car implements Vehicle {
    brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    start(): void {
        console.log(this.brand + " Started");
    }
}

let c = new car("BMW");
c.start();