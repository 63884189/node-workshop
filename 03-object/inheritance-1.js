
var async = require('async')

var Person = function(name) {
  this.name = name
}

Person.prototype.greet = function() {
  console.log('Hello, my name is', this.name)
}

Person.prototype.speak = function(sentence) {
  console.log(sentence)
}

var French = function(name) {
  Person.call(this, name)
}

French.prototype = Object.create(Person.prototype)

French.prototype.greet = function() {
  console.log('Bonjour, my name is', this.name)
}

var SlowPoke = function(name) {
  Person.call(this, name)
}

SlowPoke.prototype = Object.create(Person.prototype)

SlowPoke.prototype.speak = function(sentence) {
  var words = sentence.split(' ')

  async.eachSeries(words, function(word, callback) {
    setTimeout(function() {
      console.log(word)
      callback()
    }, 1000)
  })
}

var alice = new Person('Alice')
var bob = new French('Bob')
var carl = new SlowPoke('Carl')

alice.greet()
alice.speak('Node.js is fun!')

bob.greet()
bob.speak('Node.js is fun!')

carl.greet()
carl.speak('Node.js is fun!')
