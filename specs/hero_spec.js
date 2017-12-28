var assert = require('assert');
var Hero = require('../constructors/hero.js');
var Food = require('../constructors/food.js');
var Task = require('../constructors/task.js');

describe('Hero', function () {

	var hero;
	var pizza;
	var human;
	var quest1;
	var quest2;
	var quest3;
	var quest4;
	var quest5;

	beforeEach(function () {
		hero = new Hero( "bob", "human" )
    pizza = new Food( "pizza", 20 )
    human = new Food( "human", 5 )
		quest1 = new Task(1,1, 200)
		quest2 = new Task(3,1, 10)
		quest3 = new Task(4,8, 10000)
		quest4 = new Task(7,4, 400)
		quest5 = new Task(5,3, 3000)
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

	it('should filter completed', function () {
		quest1.complete()
		quest2.complete()
		hero.addQuest(quest1)
		hero.addQuest(quest2)
		hero.addQuest(quest3)
		hero.addQuest(quest4)
		hero.addQuest(quest5)
		var newArray = hero.filterCompleted(true)
		assert.strictEqual(newArray.length, 2)
	})

  it('should filter by parameter', function() {
		hero.addQuest(quest1)
		hero.addQuest(quest2)
		hero.addQuest(quest3)
		hero.addQuest(quest4)
		hero.addQuest(quest5)
		hero.sortQuests("reward")
		assert.strictEqual(hero.questLog[0].reward, 10000)
	})


})
