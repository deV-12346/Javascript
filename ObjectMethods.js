let obj = {
      name:"Dev Raj",
      roll_no:23142,
      class:false
}
console.log(obj)
console.log(Object.keys(obj))     //Returns an array of a given object’s own enumerable keys.
console.log(Object.values(obj))    //Returns an array of a given object’s own  values
console.log(Object.entries(obj))   //Returns an array of a given object’s own enumerable [key, value] pairs.
console.log(JSON.stringify(obj))   //convert the object in to the json string
for(let key  in obj){       //it iterates over enumerable properties of an object 
      // console.log("key : ",key)
      console.log(obj[key])
}