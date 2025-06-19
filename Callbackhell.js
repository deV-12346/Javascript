const getdata =(id,callback1)=>{
      console.log(id)
      callback1()
}
const nextData = (name,callback2)=>{
      console.log(name)
      callback2()
}
const thirdData = (clas)=>{
      console.log(clas)
}
getdata(1,()=>{
      nextData("Dev Raj",()=>{
            thirdData("MCA 4th Sem") 
      })
})