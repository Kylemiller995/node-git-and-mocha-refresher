var Villain = function (name){
  this.name = name
}

Villain.prototype.poisonFood = function (food){
  food.poison()
}

module.exports = Villain
