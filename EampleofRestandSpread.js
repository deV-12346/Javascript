function addstudents(...rest){
      return rest
}
let nameofstudent =addstudents("Dev","Raj","Anku")
console.log(nameofstudent)

let classA = ["Amit","Aryaveer","Goldy"]
let classB = ["Abhay","Dev"]

function mergeStudents(classA,classB){
     return [...classA,...classB]
}

let merged = mergeStudents(classA,classB)
console.log(merged);

function updateStudent(student){
      let {name,...rest} = student
      student.name = "Dev"
      console.log(student)
}
let Students = {
      name:"dev",
      roll_no:2342
}
updateStudent(Students)