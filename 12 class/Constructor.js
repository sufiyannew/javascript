class Car {
    constructor(brand, model) {
      this.brand = brand; // Object ki brand property set karega
      this.model = model; // Object ki model property set karega
    }
  
    displayDetails() {
      console.log(`This car is a ${this.brand} ${this.model}`);
    }
  }
  
  // Object banate hain
  const myCar = new Car("Toyota", "Corolla");
  
  myCar.displayDetails(); // Output: This car is a Toyota Corolla
  