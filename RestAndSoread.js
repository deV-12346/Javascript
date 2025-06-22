function total(...rest){    // rest operatores it combine 
      console.log(rest)
      return rest.reduce((acc,res)=>acc+res)
}
const result = total(1,2,3,4,5,6)
console.log(result)

let marks = [56,67,87,45]
function Students(...rest){
    return rest.reduce((acc,res)=>acc+res)
}
const markstotal = Students(...marks)   //spread
console.log(markstotal)


let Students = {
      name:"Dev",
      age:22,
      hobbies:["Traveling","Signing"]
}
console.log(Students)
const {...rest} = Students   //rest
let newStudents = {
      ...Students,        //spread
      age:23
}
console.log(newStudents)