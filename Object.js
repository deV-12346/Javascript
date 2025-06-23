let obj = {
      name:"Dev Raj",
      age:20,
      address:{
            village:"Deola",
            Distt:"Shimla",
            State:"HP"
      },
      contact:7018674227
}
// let shallowCopy = Object.assign({},obj)  //1st way 
let shallowCopy = {...obj} // 2nd way using spred operator
obj.name ="anku"
obj.address.Distt = "Solan"
console.log(obj)
console.log(shallowCopy)


//deep copy 
let originalObject = {
      name:"Dev Raj Verma",
      address:{
            village:"Theog",
            Distt:"Shimla"
      },
      phone:7018674227
}

let deepCopy = structuredClone(originalObject)
originalObject.address.village = "Rohru"
console.log("Original Object : ",originalObject)
console.log("Deep Object : ",deepCopy)