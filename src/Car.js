// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    this.previousOwners = []
    this.owner = 'manufacturer'
    this.running = false
    // TODO: add color, seats here
  }
  // add the sell function
  // instance methods. not owned by constructor/clss
  sell (newOwner) {
    if (isNaN(newOwner)) {
      this.previousOwners.push(this.owner)
      this.owner = newOwner
    }
  }

  // add the paint function
  paint (newColor) {
    this.color = newColor
  }

  start () {
    this.running = true
  }

  off () {
    this.running = false
  }

  driveTo (destination) {
    if (this.running === true && isNaN(destination)) {
      console.log('Driving to ' + destination)
      return true
    } else return false
  }

  park () {
    if (this.running === false) {
      console.log('parked!!')
      return true
    } else return false
  }

}
module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
