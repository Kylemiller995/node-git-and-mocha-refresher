var assert = require('assert');
var Hero = require('../constructors/hero.js');

describe('Hero', function () {

	var hero;

	beforeEach(function () {
		hero = new Hero( "bob", "pizza" )
	})

	it('should have a name', function () {
		assert.strictEqual(hero.name, 'bob')
	})

  it('should be able to talk', function(){
    assert.strictEqual(hero.talk(), 'I\'m here to help!')
  })

})
