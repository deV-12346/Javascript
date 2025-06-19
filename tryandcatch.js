// let stringAge = "abdb"
// stringAge = "40"
// stringAge = "-48"
// let age = parseInt(stringAge)
// try{
//       if(isNaN(age)){
//             throw new Error("Invalid age input")
//       };
//       if(age<=0){
//             throw new Error("Age must be Positive")
//       }
//       console.log("age : ",age)

const { json } = require("express")

      
// }catch(err){
//       console.log(err.message)
// }finally{
//       console.log("Always execute")
// }
// let string = '{"name":"Anku"}'

// function safeJSONParse(name) {
//    try {
//       const object = JSON.parse(name)
//       if(!object){
//             throw new Error("Invalid json format")
//       } 
//       console.log(object)
//    } catch (error) {
//        console.log(error.message)
//    }     
// }
// safeJSONParse(string)
const getdata = async()=>{
      try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
            const userData = await response.json()
            console.log(userData.name)
            console.log(userData.email)
      } catch (error) {
            console.log(error)
      }
}
getdata()