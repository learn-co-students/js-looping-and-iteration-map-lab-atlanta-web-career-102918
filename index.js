// Code your solution in this file.
// Write lowerCaseDrivers - this function takes an array of drivers,
// and returns an array of the drivers names in lowercase.

// Write nameToAttributes - this function takes an array of drivers with their
// first and last name separated by a space, and returns an array of
// JavaScript objects with firstName and lastName attributes.

function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase(); });
}

 function nameToAttributes(drivers) {
  let names = [];
  return drivers.map(function (driver) { return {"firstName": driver.split(' ')[0],
  "lastName": driver.split(' ')[1]}; });
}
 function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`; });
}
