 function isLowercase(input) {
  // takes and input(string) and return true if input is all lowercase 
  // and false otherwise

  // make sure input is a string
  if(typeof input !== "string" ) {
    return false
  }



  return input  === input.toLowerCase()

}
function isUppercase(input) {
  // takes and input(string) and return true if input is all uppercase 
  // and false otherwise

  // make sure input is a string
  if(typeof input !== "string" ) {
    return false
  }

  return input  === input.toUpperCase()
}


module.exports = {
  isLowercase, isUppercase
}

