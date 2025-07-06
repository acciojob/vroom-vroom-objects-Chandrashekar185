// Complete the js code
function Car(make, model) {
    this.make = make; // Set the make property
    this.model = model; // Set the model property
}

// Adding the getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`; // Return a string with make and model
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor to set make and model
    this.topSpeed = topSpeed; // Set the topSpeed property
}

// Set up inheritance from Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding the getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed; // Return the top speed
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;