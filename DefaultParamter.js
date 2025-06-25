const sayName = (name="Dev Raj")=>{
      console.log(`Hello ${name}`)
}
sayName()
const sum = (a=2,b=5,sum=0)=>{
       return sum = a+b
}
const res = sum(5,6)
console.log(res) //11

//array and object in default parameter
const student = (value={name:"Dev",age:22},name=["Dev","Raj","Amit"])=>{
      console.log(value)
      console.log(name)
} 
student()

//null and undefined in default parameter
const MyName = (fname="Dev",lname="Raj")=>{
       console.log("Helllo",fname,lname)
}
MyName(null,undefined) //Helllo null Raj


//function in default parameter
const getAge = ()=>{
      return 20
}
const MyDetails = (name="Dev",age=getAge())=>{
      console.log(name," ", age)
}
MyDetails()