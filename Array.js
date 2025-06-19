const arr = [1,2,3,4,5]

arr.push(6)    //remove from last 
console.log(arr)

arr.pop()    //add at the last
console.log(arr)

arr.unshift(0)   //add at he start
console.log(arr)

arr.shift()   //remove from start
console.log(arr)

arr.splice(1,3,6,7,8)   // remove or add from particular index 
console.log(arr)

let newarr = arr.slice(0,3)   //copy array with starting index and +count 
console.log(newarr)

let maparr = arr.map((num)=>num*2)   //transform array into new array
console.log(maparr)

let filterarr = arr.filter((num)=>num%2 === 0) // return all the matching values
console.log(filterarr)

let findarr = arr.find((num)=>num%2 ===0)  //it returns the first matching value
console.log(findarr)
console.log(arr)
console.log(Array.isArray(findarr))
