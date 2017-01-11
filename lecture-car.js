var car = {
  manufacturer: 'BMW',
  year: '2010',
  currentSpeed: 10,
  drive: function(){
    this.currentSpeed += 50; //'this' is the same as write car; 'this' is dynamic
  }
};

car.drive();
console.log(car.currentSpeed);