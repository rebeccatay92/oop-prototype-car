// load the assert plugin (for testing)
var assert = require('assert')
var Car = require('../src/Car')
var success = require('./helpers/success')

// // //// TEST PHASE III /////////////////////////////////////////
// // load the Car object for

// // update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 7)
//
//
// // starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 7, 'Constructor did not set seats.')
//
// // run the success function once you're done with a set of tests
success()
//
// // test sell to non-string argument
console.log('Testing selling a car')
honda.sell('Lenny')
assert.strictEqual(honda.owner, 'Lenny', 'Owner should stay if newOwner is not Lenny')
success()

// normal case: test sell updates previousOwners
console.log('Testing selling a car to normal string')
honda.sell('shimei')
var lastPrevOwner = honda.previousOwners[honda.previousOwners.length - 1]
assert.strictEqual(lastPrevOwner, 'Lenny', 'Previous owner should be Lenny')
success()

// normal case: car start should set running to true
console.log('Testing carStart()')
honda.start()
assert.strictEqual(honda.running, true, "After starting, running should be true")
success()

//normal case: car stop should set running to false
console.log('testing carOff()')
honda.off()
assert.strictEqual(honda.running, false, "After stopping, running should be false")
assert.ifError('')
success()

// normal case: drive to destination should console.log only if running is true
// else fn returns false
console.log('testing driveTo(destination)')
honda.start()
var driveOutput = honda.driveTo('Lalaland')
assert.ok(driveOutput, "driveTo should be able to return true")
success()

// normal case: if running is false, park should console.log('parked!!') and return true
console.log('Testing park()')
honda.off()
var parkOutput = honda.park()
assert.strictEqual(parkOutput, true, 'Park should return true')
success()

// normal: passengers should exist and should be empty array by default
console.log('Testing optional passenger argument')
assert.strictEqual(honda.passengers.length, 0, "There should be an empty array if passenger argument is not included")
success()

// normal: pickup(name) returns true if car is running, and if there are enough space (seats - 1 - passengers)
// pickup updates passengers array with name
console.log('Testing pickup(name)')
honda.start()
var pickUpOutput = honda.pickUp('Rebecca')
assert.strictEqual(pickUpOutput, true, "If there is space and car is running, pickUp needs to return true")
assert.strictEqual(honda.passengers[honda.passengers.length - 1], 'Rebecca', "The last name in the passenger array should be name")
success()

// normal: dropOff(name) returns true if car is running, at least 1 person left to drive, passenger exists
// removes passenger from the array
console.log('Testing dropOff(name)')
var dropOffOutput = honda.dropOff('Rebecca')
assert.strictEqual(dropOffOutput, true, "If car is running and passenger exist, dropOff should return true")
