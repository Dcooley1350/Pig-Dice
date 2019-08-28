var Player = function() {
  this.name = "";
  this.turnScore = 0;
  this.gameScore = 0;
  this.gameWins = 0;
}

Player.prototype.userName = function(name) {
  this.name = name;
}

Player.prototype.hold = function() {
  this.gameScore += this.turnScore;
  this.turnScore = 0;
  return this.turnScore;
}

Player.prototype.roll = function(rollNum) {
  this.turnScore += rollNum;
  return this.turnScore;
}

Player.prototype.win = function() {
  this.turnScore = 0;
  this.gameScore = 0;
  this.gameWins += 1;
  return this.gameWins;
}

function randomDiceNumber() {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber;
}

function dicePic(randomNumber) {
  if (randomNumber <= 6 && randomNumber >= 1) {
    return "../img/" + randomNumber + ".png";
  } else {
    return "Error";
  }
}
