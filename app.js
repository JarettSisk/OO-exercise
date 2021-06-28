// 1.
class Vehicle {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        return console.log("Beep");
    }

    toString() {
        const {make, model, year} = this;
        return console.log(`The vehicle is a ${make} ${model} from ${year}`);
    }
}
// 2.
class Car extends Vehicle {
    constructor(make,model,year) {
        super(make, model, year);

        this.numWheels = 4;
    }
}
// 3.
class Motorcycle extends Vehicle {
    constructor(make,model,year) {
        super(make, model, year);

        this.numWheels = 2;
    }

    revEngine() {
        return console.log("VROOM!")
    }
}
const myCar = new Car("toyota", "corolla", 2015);
const myBike = new Motorcycle("harley", "roadster", 2010);

myCar.toString();

// 4.
class Garage {
    constructor(capacity) {
        this.Vehicles = [];
        this.capacity = capacity
    }

    add(vehicle) {
        if(!(vehicle instanceof Vehicle)) {
            throw new Error("Only vehicles are alowed");
        }
        if(this.Vehicles.length >= this.capacity){
            throw new Error("Garage full!");
        }
        
        this.Vehicles.push(vehicle);
        return "New vehicle added";
    }
}

const myGarage = new Garage(2);

