//creating an array
let arr = [1,2,3,4,5]
console.log(arr)
//array constructor
let brr = new Array("Anku",23142)
console.log(brr)

arr.push("Anku") //add at the end
arr.pop() //remove from last
arr.shift()  //remove from start
arr.unshift("Anku")   //add the the start
console.log(arr.slice(1,4))   //copy the array based on given stating and ending index
arr.splice(2,1,"Dev")      //changes the values like adding and deleting start index , delete count 
console.log(arr)


let numbers = [10,20,30,40,50]
let mapresult = numbers.map(number=>{
      return number*number
})
console.log(mapresult)

let filterResult = numbers.filter(number=>{    //return all matching values that statisfy the condition
      return number%4 === 0
})
console.log(filterResult)

let findResult = numbers.find(number=>{
       return number%4 === 0    //this return a only a  first matching value based on specified condition
})
console.log(findResult)

let total = numbers.reduce((acc,curr)=>{
      return acc + curr           //it returns signle output value
})
console.log(total)

numbers.sort((a,b)=>{         //sorting the array in descending order 
      return b-a
})
console.log(numbers)
console.log(numbers.indexOf(10)) //to find the index

foreachresult = numbers.forEach(number=>{  //it is used to iterates over each element in the array 
      console.log(number)
})

let name = "Dev Raj Verma"    
for(let value of name){    //Used to iterate over iterable objects: Arrays, Strings, Maps, Sets, etc.
      console.log(value)
}