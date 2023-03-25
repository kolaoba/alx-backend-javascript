/* eslint-disable no-underscore-dangle */
class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const clonedCar = Object.create(this);
    return Object.assign(clonedCar, {
      _brand: undefined,
      _motor: undefined,
      _color: undefined,
    });
  }
}

export default Car;
