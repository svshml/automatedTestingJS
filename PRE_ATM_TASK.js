//Create a function(s) that fulfills array with 10 random integer values and returns a multiply of 3 greatest values. 

function getInteger() {
  const array =[];
  for(let i=0; i < 10; i++){
    array.push( Math.random().toFixed(1) * 10);
    }
  return array.sort().slice(-3).reduce((a,b) => a * b);
 }

console.log(getInteger());







//Create a function(s) that returns total amount of seconds starting from the beginning of today and till now.

function countSeconds(){
 const d = new Date();
 let h = d.getHours();
 let min = d.getMinutes(); 
 let sec = d.getSeconds();
  return sec + min * 60 + h * 3600;
}
 console.log(countSeconds());





//Define an object happiness within 5 properties. Each property should have default integer value, 
//representing its priority. Then create a function that returns a list of property names sorted by priority (highest is on top).

const happiness = {first : 5,
                  second : 4,
                  third : 3,
                  forth : 2,
                  fifth : 1 
                  };
function getProperties(){
 const arr = Object.entries(happiness).sort((a, b) => a[1] - b[1]);
 const newArr = [];
  for(let i =0; i< arr.length;i++){
   newArr.push(arr[i][0]); 
  }
    return newArr;
}

console.log(getProperties());






//Implement a function addWithDelay() which will work with parameters according to the conditions below:
//•	If all parameters are positive numbers, it should return within 1000ms timeframe a Promise containing a sum of all the numbers 
//provided as parameters 
//•	If any parameter is represented by a negative number, function should return an error message 
//“Error! Some parameter is a negative number!" using “reject()” option



  function addWithDelay(...arr){
       return  ( arr.every(el => el >= 0) == true)? 
         
        new Promise((resolve) => setTimeout(() => resolve(arr.reduce((el1, el2)=> el1 + el2)), 1000))  :  
         
        Promise.reject('Error! Some parameter is a negative number!');
}
  
addWithDelay(12,2,9,100)
    .then(result => console.log(result))
    .catch(error => console.error(error));
