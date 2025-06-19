const GetData= (name)=>{
      return new Promise((resolve)=>{
      setTimeout(()=>{
          resolve({message :"Success",name})
      },4000)
      })
}
const nextData= (clas)=>{
      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          console.log(clas)
      //     resolve("Success")
          reject(new Error("something went wrong"))
      },4000)
      })
}
const thirdData = (roll_no)=>{
      return new Promise((resolve)=>{
           setTimeout(()=>{
           console.log(roll_no)
           resolve("Success")
      },4000)
      })
}
GetData("Anku")
.then((res)=>{
      console.log(res.name)
      console.log("Getdata ",res)
      return nextData("MCA 4th sem")
})
.then((res1)=>{
      console.log("Second function",res1)
      return thirdData(23142)
}).then((res2)=>{
      console.log(res2)
}).catch((err)=>{
      console.log(err.message)
})