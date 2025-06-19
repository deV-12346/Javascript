// const GetData = (name,Callback)=>{
//      console.log(name)
//      Callback()
// }
// const message =()=>{
//         console.log("Welcome dear")
//      } 
// GetData("Anku",message)
const sum = (a,b,callback)=>{
      callback(a,b)
}
const total = (a,b)=>{
      console.log(a+b)
}
sum(1,2,total)