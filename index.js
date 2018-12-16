// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(collection, name){
  return collection.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  })
}

function fuzzyMatch(){

}

function matchName(collection, name){

}
