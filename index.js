function lowerCaseDrivers(arr){
  return arr.map(function(change) {
    return change.toLowerCase();
  });
}

function nameToAttributes(arr) {
  return arr.map(function (name) {
    const first = name.split(" ")[0]
    const last = name.split(" ")[1]
    return {firstName: first, lastName: last}
  });
}

function attributesToPhrase(arr) {
  return arr.map(function (person) {
    return `${person.name} is from ${person.hometown}`

  });

}
