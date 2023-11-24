// Car class
class Car {
    constructor(brand, model, year, color, price, gas) {
      this.brand = brand;
      this.model = model;
      this.year = year;
      this.color = color;
      this.price = price;
      this.gas = gas;
    }
  
    honk() {
      console.log("Tuut tuut");
      console.log(
        `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`
      );
    }
  }
  
  // Create car objects
  const car1 = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
  const car2 = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
  const car3 = new Car("BMW", "X5", 2022, "Green", 60000, 65);
  const car4 = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
  const car5 = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
  const car6 = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);
  
  // Invoke honk method for each car
  car1.honk();
  car2.honk();
  car3.honk();
  car4.honk();
  car5.honk();
  car6.honk();
  
  // Race simulation
  const currentYear = new Date().getFullYear();
  
  function raceTurn(car) {
    if (car.year === currentYear) {
      car.gas -= 5;
    } else {
      const yearsOld = currentYear - car.year;
      car.gas -= 5 + yearsOld;
    }
  }
  
  for (let i = 1; i <= 7; i++) {
    console.log(`Turn ${i}`);
  
    raceTurn(car1);
    raceTurn(car2);
    raceTurn(car3);
    raceTurn(car4);
    raceTurn(car5);
    raceTurn(car6);
  
    console.log(
      `Gas levels - Car 1: ${car1.gas}L, Car 2: ${car2.gas}L, Car 3: ${car3.gas}L, Car 4: ${car4.gas}L, Car 5: ${car5.gas}L, Car 6: ${car6.gas}L`
    );
  }
  