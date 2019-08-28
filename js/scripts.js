//Business Logic for Player

var Player = function() {
  this.name = "";
  this.turnScore = 0;
  this.gameScore = 0;
  this.gameWins = 0;
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
//Business Logic for CPU

function cpu(randomNumber, player1, computer) {
  var player1Score = player1.gameScore;
  var computerTurnScore = computer.turnScore;
  var computerTotalScore = computer.gameScore;
}

//Business Logic for Dice Roll

function randomDiceNumber() {
  var randomNumber = Math.floor((Math.random() * 6) + 1);
  return randomNumber;
}

//Front End Logic for Dice game

function dicePic(randomNumber) {
  if (randomNumber <= 6 && randomNumber >= 1) {
    return "../img/" + randomNumber + ".png";
  } else {
    return "Error";
  }
}
//Front End Logic for Gameplay
var player1 = new Player();
var player2 = new Player();

$(document).ready(function(event) {
  $("#choose-game-type").click(function(event) {
    console.log(event.target.name);
    if (event.target.name === "2Players") {
      $("#choose-game-type").hide();
      $(".player1, .player2").show();
    } else if (event.target.name === "cpu") {
      player2.name="cpu";
      console.log("I'm in")
      $("#choose-game-type").hide();
      $(".player1").show();
    }
  });
  $("button[name=play]").click(function(event) {
    $(".name").hide();
    player1.name = $("#player1").val();
    if (player2.name === "cpu") {
      $("#player1name").html(player1.name);
      $("#player2name").html(player2.name);
      $("div.name").hide();
      $(".gameplay").show();
      $("button[name=player2roll]").hide();
    } else {
      player2.name = $("#player2").val();
      $("#player1name").html(player1.name);
      $("#player2name").html(player2.name);
      $(".gameplay").show();
      $(".game-player2 button").hide();
    }

  });
  $("gameplay").click(function(event){
    switch(event.target.name){
      var num = randomDiceNumber();
      case "player1roll":
        if(num !=== 1){
          return player1.roll(number);
        }else{
          player1.turnScore = 0

        }
        break;
      case "player1Hold":
        break;
      case "player2roll":
        break;
      case "player2Hold":
        break;
    }
  });
});
