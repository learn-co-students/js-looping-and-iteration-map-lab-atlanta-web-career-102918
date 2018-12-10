// Code your solution in this file.
// const map1 = array1.map(x => x * 2);
function lowerCaseDrivers(drivers) {
  const lowerCase = drivers.map(driver => driver.toLowerCase())
  return lowerCase
}

function nameToAttributes(drivers){
  const toAttr = drivers.map(driver =>
  Object.assign({ firstName: driver.split(" ")[0], lastName:driver.split(" ")[1]}

  )
  )
  return toAttr
}

function attributesToPhrase(drivers){
  const phrase = drivers.map(driver =>
  `${driver.name} is from ${driver.hometown}`
  )
return phrase
}
