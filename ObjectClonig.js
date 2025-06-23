let src = {
      name:"Dev",
      class:"MCA",
      rollno:23142,
      address:{
            distt:"Shimla",
            State:"HP"
      }
}
// let dest = {...src}    using spread operator  
// let dest = Object.assign({},src)  using assign operator
let dest = {}  //using iteration
for(let key in src){
      let newKEY = key
      let newValue = src[key]
      dest[newKEY] = newValue 
}
src.name = "Dev Raj"
console.log("src : ",src)
console.log("dest : ",dest)
