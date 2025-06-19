console.log("start")   //it will execute immediatly 
function Name() {
      console.log("DEV")    // it name () send from callstack  to browser web API ater 5 seconds it send to the callback queue
}
setTimeout(Name,5000);

setTimeout(() => {
console.log("end")      
}, 2000);

//event loop is a javascript mechanism that allows the asynchrouns code to run without blocking the main thread
//A thread is the smallest unit of execution in a program — like a single line of work the computer can do.