function D() {
      console.log("Hello");
}function C() {
      console.log("C fun executed")
      D()
}function B() {
      console.log("B fun executed")
      C()
}
function A() {
      console.log("A fun executed")
      B()
}
A()