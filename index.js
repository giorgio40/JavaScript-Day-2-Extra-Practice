// Use Array Methods to solve the tasks below 🎉

const toppings = ['Mushrooms ', 'Tomatoes', 'Eggs', 'Chili', 'Lettuce', 'Avocado', 'Chiles', 'Bacon', 'Pickles', 'Onions', 'Cheese'];

/*
TASK 1 🚀
// The customer would like to see the topping options, console log out each of the toppings one by one in the array above 
console.log(toppings[0])  
//   console.log(toppings[1])
//   console.log(toppings[2])
//   console.log(toppings[3])
//   console.log(toppings[4])
//   console.log(toppings[5])
//   console.log(toppings[6])
//   console.log(toppings[7])
//   console.log (toppings[8])
//   console.log(toppings[9])
//   console.log(toppings[10])
/* 
TASK 2 🚀
// write a function that accepts an array and an item and removes that item from the array
for example you no longer have any onions and need to remove it from the list of toppings
Use .forEach() - hint - you will need to include the index in the callback
 */
const elementToReplace = "Onions"
 const newArray = toppings.filter(el => el !== elementToReplace);
// console.log(newArray);
// sTASK 3 🚀
// Sort the topping alphabetically and return them in a new array 
toppings.sort()
// console.log(toppings)
const array = [...toppings];

// console.log(array)


const vacations = [
    {city: 'Toronto', country: 'Canada', region: 'North America', temperature: 86, beach: true, sea: false, wifi:'strong', hiking: false, overall_rating: 6,},
    {city: 'Miami', country: 'United States', region: 'North America', temperature: 95, beach: true, sea: true, wifi:'strong', hiking: false, overall_rating: 8,},
    {city: 'Tel Aviv', country: 'Israel', region: 'Middle East', temperature: 102, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 10,},
    {city: 'Istanbul', country: 'Turkey', region: 'Europe', temperature: 86, beach: false, sea: false, wifi:'medium', hiking: true, overall_rating: 7,},
    {city: 'Bangkok', country: 'Thailand', region: 'South East Asia', temperature: 101, beach: false, sea: false, wifi:'medium', hiking: false, overall_rating: 5,},
    {city: 'Lima', country: 'Peru', region: 'South America', temperature: 86, beach: false, sea: false, wifi:'weak', hiking: true, overall_rating: 7,},
    {city: 'Muscat', country: 'Oman', region: 'Middle East', temperature: 105, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 9,},
    {city: 'Sydney', country: 'Australia', region: 'Oceania', temperature: 92, beach: true, sea: true, wifi:'strong', hiking: true, overall_rating: 8,},
    {city: 'Cape Town', country: 'South Africa', region: 'Africa', temperature: 87, beach: true, sea: true, wifi:'medium', hiking: true, overall_rating: 10,},
    {city: 'Cancun', country: 'Mexico', region: 'North America', temperature: 95, beach: true, sea: true, wifi:'medium', hiking: false, overall_rating: 7,},
];  
  let newArray1 = vacations.filter(function(ele){
          return ele.beach ==true && ele.temperature > 90;;
  
  
  
  
  
  
  });
        //   console.log(newArray1)
// TASK 4 🚀
// The travel agent would like to send a couple on their honeymoon to a location with a beach and a temperature above 90 degrees. return their options in a new array 
// */




/*
TASK 5 🚀
// A developer decides to become a digital nomad for a year, they would like to live in a place with strong wifi, a beach, and good hiking, return their options
*/
let newArray2 = vacations.filter(function(ele){
 return ele.hiking ==true
  && ele.wifi =="strong"
  && ele.beach ==true;


});

// console.log(newArray2)
/* 
TASK 6 🚀
// write a function that allows a user to sort their vacations by hiking opportunities, beach access or a mix of both and return their options
*/ let newArray3 = vacations.filter(function(ele){

      return ele.hiking ==true && ele.beach ==true;


});

// console.log(newArray3)

/* 
TASK 7 🚀
// write a function that finds the average of overall ratings in a given array. The function should take an array as its argument and should return the average of the overall ratings in that array 
hint - use .reduce()
*/
const findAverageRating =(arr) => {
const {length} = arr;
return arr.reduce((acc, val) =>{

    return acc + (val.overall_rating /length);


},0);





};


/*
TASK 8 🚀
Find the airport codes for each of the cities in the vacation array and write a function to add them to the objects in the array
hint - your function should include array, index and code as parameters
you will need to invoke the function each time you wish to add a new code
// */function airportCodes(){
vacations[0].code = "YYZ"
vacations[1].code = "MIA"
vacations[2].code = "TLV"
vacations[3].code = "IST"
vacations[4].code = "BKK"
vacations[5].code = "LIM"
vacations[6].code = "MCT"
vacations[7].code =  "SYD"
vacations[8].code = "CPT"
vacations[9].code = "CUN"


}
airportCodes()
console.log(vacations)