// Phase I, don't require this file after you're done with Phase I

// Create the object properties and function
var Car = {
  make: 'Honda',
  model: 'Vezel',
  year: 2017,
  color: 'white',
  seats: 4,
  previousOwners: [],
  owner: 'manufacturer',
  running: false,
  sell (name) {
    this.previousOwners.push(this.owner)
    this.owner = name
  },
  paint (newColor) {
    this.color = newColor
  }
} // close object

// Export the `Car` object
