// do not change these lines

function reset() {
  adults = 0
  children = 0
}

let adults = 0
let children = 0

// TODO: Write your functions in the below section. Your functions should update
// the adults and children variables defined above.
function enter(numAdults, numChildren) {
  if (numAdults >= 1 && numChildren >= 1 && numAdults >= numChildren) {
    adults += numAdults
    children += numChildren
    return true
  }
  return false
}

function leave(numAdults, numChildren) {
  if (numAdults >= numChildren && numAdults <= adults && numChildren <= children && (adults - numAdults) >= (children - numChildren)) {
    adults -= numAdults
    children -= numChildren
    return true
  }
  return false
}

function occupancy() {
  return {
    adults: adults,
    children: children
  }
}

// TODO: Change the undefined values below to the name of your functions
module.exports = {
  enter: enter,
  leave: leave,
  occupancy: occupancy,
  reset: reset
}
