// load the assert plugin (for testing)
var assert = require('assert')
var Car = require('../src/Car')
var success = require('./helpers/success')

// // //// TEST PHASE III /////////////////////////////////////////
// // load the Car object for

// // update the car instantiation below according to the test given
var honda = new Car('Honda', 'Vuzel', 2017, 'Blue', 3)
//
//
// // starter code - testing constructor
console.log('Testing Constructor')
assert.strictEqual(honda.make, 'Honda', 'Constructor did not set make.')
assert.strictEqual(honda.model, 'Vuzel', 'Constructor did not set model.')
assert.strictEqual(honda.year, 2017, 'Constructor did not set year.')
assert.strictEqual(honda.color, 'Blue', 'Constructor did not set color.')
assert.strictEqual(honda.seats, 3, 'Constructor did not set seats.')
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

/*--------------------------------------------------*/

// normal: passengers should exist and should be empty array by default
console.log('Testing optional passenger argument')
assert.strictEqual(honda.passengers.length, 0, "There should be an empty array if passenger argument is not included")
success()

/*--------------------------------------------------*/
console.log('Testing pickup(name)')

// error: if car is not running, pickup should return false
var pickUpOutput = honda.pickUp('Rebecca')
assert.strictEqual(pickUpOutput, false, "pickup should return false if car is not running")

// error: if car is running but name is not a string, output should be false
honda.start()
var pickUpOutput = honda.pickUp('123')
assert.strictEqual(pickUpOutput, false, "Pickup cannot be allowed if name is not an alphabetical string. Try isNaN()")

// normal: pick up should update passengers array with the name
var pickUpOutput = honda.pickUp('Rebecca')
assert.strictEqual(honda.passengers[honda.passengers.length - 1], 'Rebecca', "The last name in the passenger array should be the picked-up passenger")

// normal: if there is space, pickup should return true
assert.strictEqual(pickUpOutput, true, "If there is space, pickUp needs to return true")

// normal: if there is no more space, pickup should return false
honda.pickUp('somebody') // 2nd passenger in 3 seat car
var exceedSpaceOutput = honda.pickUp('another') //cannot fit
assert.strictEqual(exceedSpaceOutput, false, "Pickup should return false if there are not enough seats")
success()

/*--------------------------------------------------*/
console.log('Testing dropOff(name)')
// normal: dropOff(name) returns false if car is not running
honda.off()
var dropOffOutput = honda.dropOff('Rebecca')
assert.strictEqual(dropOffOutput, false, 'dropOff should return false if running is false')

honda.start()
// error: dropOff should return false if the name is not an alphabetical string
var numberName = honda.dropOff(12345)
assert.strictEqual(numberName, false, "Passenger name has to be an alphabetical string")

// normal: if passenger doesnt exist, return false
var doesNotExist = honda.dropOff('IAmImaginary')
assert.strictEqual(doesNotExist, false, "Return false if no such passenger exists!")

// car right now has ['Rebecca', 'Somebody']
var dropOffOutput= honda.dropOff('Rebecca')
assert.strictEqual(dropOffOutput, true, "If car is running and passenger exist, dropOff should return true")
assert.strictEqual(honda.passengers.includes('Rebecca'), false, "If passenger has been dropped off, name should be removed from array")
success()

//normal: returns num of passengers left
console.log('Testing passengerCount()')
var passengerCountOutput = honda.passengerCount()
assert.strictEqual(passengerCountOutput, 1, "After dropping off rebecca, only 'somebody' is left")
success()
