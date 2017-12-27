var Food = function (name, healingValue) {
  this.name = name
  this.healingValue = healingValue
  poisoned = false
}

Food.prototype.poison = function () {
  this.poisoned = true
}

Food.prototype.cleanse = function() {
  this.poisoned = false
}

module.exports = Food
