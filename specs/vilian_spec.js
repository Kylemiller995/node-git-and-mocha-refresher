var assert = require('assert')
var Villain = require('../constructors/villain.js')
var Food = require('../constructors/food.js')


describe('villain test', function(){

  var villain
  var food

  beforeEach(function(){
    villain = new Villain("bob")
    food = new Food( "pizza", 100 )
  })

  it('should be able to poison food', function(){
    villain.poisonFood(food)
    assert.strictEqual(food.poisoned, true)
  })
})
