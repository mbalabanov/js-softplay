//  IF: numChildren <= numAdults
//  THEN: increase the number of children and number of adults in the center
//  AND return true
// IF NOT: return false

let adults = 0
let children = 0

function enter(numAdults, numChildren) {
    if ( numChildren <= numAdults ) {
        adults += numAdults
        children += numChildren
        return true
    }
}
