class Students {
      // properties,datamember,state
      #name="Dev"    
      age=22
      roll_no=23142

      //behaviour,functionality,method
      studying(){
            console.log(`${this.#name} is studying`)
      }
      get fetchName(){
            return this.#name    //getter to fetch private data member outside the class
      }
      set UpdateName(studentname){
         if(typeof(studentname) === "string"){
            this.#name=studentname
         } 
         else{
            console.log("Invalid type")
         }
      }
}
let obj = new Students()
console.log(obj.fetchName)    //fetch the private data member using gettter
obj.UpdateName = "Dev Raj Verma"    // call the setter
obj.studying()


//with constructor
class Human{
     constructor(name,age,hobbies){
         this.name = name,
         this.age = age,
         this.hobbies = hobbies
     }
     walk(){
         console.log(`${this.name} can walk`)
     }
}
let obj1 = new Human("DevRaj",22,"Travelling")
obj1.walk()
