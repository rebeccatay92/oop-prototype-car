// Phase II here, don't require this file until you're done with Phase I

class Car {
  constructor (make, model, year, color, seats, passengers) {
    this.make = make
    this.model = model
    this.year = year
    this.color = color
    this.seats = seats
    //passenger argument is an array of names
    this.passengers = passengers
    //if passenger argument is undefined, set it to []
    if (!this.passengers) {
      this.passengers = []
    }
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

  pickUp (name) {
    if (this.running && (this.seats - this.passengers.length > 1)) {
      console.log('Driving to pick up ' + name)
      this.passengers.push(name)
      return true
    } else return false
  }

  dropOff (name) {
    if (this.running && this.passengers.includes(name)) {
      console.log('Driving to drop off ' + name)
      this.passengers.splice(this.passengers.indexOf(name), 1)
      return true
    } else return false
  }
}
module.exports = Car
// export the Car class //
// this is required for the carTest.js to load this //
