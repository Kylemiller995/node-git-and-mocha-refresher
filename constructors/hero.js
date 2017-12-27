var Hero = function(name, favouriteFood){
  this.name = name
  this.health = 100
  this.favouriteFood = favouriteFood
  this.questLog = []
}

Hero.prototype.talk = function () {
  return "I'm here to help!"
};


module.exports = Hero;
