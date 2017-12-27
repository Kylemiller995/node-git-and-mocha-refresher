var assert = require('assert');
var Hero = require('../constructors/hero.js');
var Food = require('../constructors/food.js');

describe('Hero', function () {

	var hero;

	beforeEach(function () {
		hero = new Hero( "bob", "human" )
    pizza = new Food( "pizza", 20 )
    human = new Food( "human", 5 )
	})

	it('should have a name', function () {
		assert.strictEqual(hero.name, 'bob')
	})

  it('should be able to talk', function(){
    assert.strictEqual(hero.talk(), 'I\'m here to help!')
  })

  it('should only heal to 100 if healing amount + hp exceeds 100', function(){
    hero.health = 89
    hero.eat(pizza)
    assert.strictEqual(hero.health, 100)
  })

  it('should heal the correct amount', function() {
    hero.health = 30
    hero.eat(pizza)
    assert.strictEqual(hero.health, 50)
  })

  it('should damage if poisoned', function() {
    pizza.poison()
    hero.eat(pizza)
    assert.strictEqual(hero.health, 80)
  })

  it('should increase by more if fav food', function() {
    hero.health = 10
    hero.eat(human)
    assert.strictEqual(hero.health, 20)
  })

})
