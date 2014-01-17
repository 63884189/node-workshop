
'use strict'

var Person = function(name) {
  this.name = name
}

Person.prototype.getGreeter = function() {
  var doGreet = function() {
    console.log('In doGreet() closure, this is', this)
    console.log("Hello, my name is", this.name)
  }

  return doGreet
}

var alice = new Person('Alice')

var greet = alice.getGreeter()
greet()