var Hero = function(name, favouriteFood){
  this.name = name
  this.health = 100
  this.favouriteFood = favouriteFood
  this.questLog = []
}

Hero.prototype.talk = function () {
  return "I'm here to help!"
};

Hero.prototype.eat = function (food) {
  var healingValue = food.healingValue
  if(this.favouriteFood === food.name){
    healingValue = healingValue * 2
  }
  if(food.poisoned === true){
    healingValue = healingValue * -1
  }
  if(this.health + healingValue > 100){
    this.health = 100
  } else {
    this.health += healingValue
  }
}


module.exports = Hero;
