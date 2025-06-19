function MyName() {
      var name = "Dev"
      function PrintName() {
            console.log(name)
      }
      return PrintName
}

const response = MyName()
response()
// We think that once an outer function finishes, its variables are removed from memory.

// But...

// In closures, that’s not true:
// If a returned inner function still uses variables from the outer function, JavaScript keeps those variables in memory.