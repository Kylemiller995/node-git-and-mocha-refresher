var assert = require('assert')
var Food = require('../constructors/food.js')


describe('Food', function () {

	var food;

	beforeEach(function () {
		food = new Food( "pizza", 100 )
	})

  it("should poison", function() {
    food.poison()
    assert.strictEqual(food.poisoned, true)
  })

  it("should cleanse", function() {
    food.poison()
    food.cleanse()
    assert.strictEqual(food.poisoned, false)
  })

})
