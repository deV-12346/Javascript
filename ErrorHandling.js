try {
      let a=5,b="e"
      if(typeof(a) !=="number" || typeof(b) !=="number"){
            throw new TypeError("Must be number")
      }
      console.log("End")
} catch (error) {
      console.log(error.message)
}