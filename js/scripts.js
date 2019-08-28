//Business Logic for Player

var Player = function() {
  this.name = "";
  this.turnScore = 0;
  this.gameScore = 0;
  this.gameWins = 0;
}

Player.prototype.addName = function(name){
  if(name){
    this.name = name;
    return this.name;
  }else{
    return this.name;
  }
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
  return "img/" + randomNumber + ".png";
}
//Front End Logic for Gameplay
var player1 = new Player();
player1.addName("Player 1");
var player2 = new Player();
player2.addName("Player 2");

//Choose Game Type and Enter Name Functions

$(document).ready(function(event) {
  $("#choose-game-type").click(function(event) {
    if (event.target.name === "2Players") {
      $("#choose-game-type").hide();
      $(".player1, .player2").show();
    } else if (event.target.name === "cpu") {
      player2.addName("cpu");
      $("#choose-game-type").hide();
      $(".player1").show();
    }
  });
  $("button[name=play]").click(function(event) {
    $(".name").hide();
    player1.addName($("#player1").val());
    if (player2.name === "cpu") {
      $("#player1name").html(player1.name);
      $("#player2name").html(player2.name);
      $("div.name").hide();
      $(".gameplay").show();
      $(".game-player2 button").hide();
    } else {
      player2.addName($("#player2").val());
      $("#player1name").html(player1.name);
      $("#player2name").html(player2.name);
      $(".gameplay").show();
      $(".game-player2 button").hide();
    }

  });

  //GAMEPLAY Functions

  //Click Functions for Player 1

  $("button[name=player1roll]").click(function(event) {
    var randomNum = randomDiceNumber();
    $(".game-player1 img").attr("src", dicePic(randomNum));
    if (randomNum === 1) {
      player1.turnScore = 0;
      $("#turnScore").text(0);
      $(".game-player1 button").hide();
      $(".game-player2 button").show();
    } else {
      player1.roll(randomNum);
      $("#turnScore").html(player1.turnScore);
    }
  });
  $("button[name=player1hold]").click(function(event) {
    player1.hold();
    $("#turnScore").text(0);
    if (player1.gameScore >= 100) {
      $(".winner").html("<h1>The winner is" + player1.name + "!</h1>");
      $(".winner").show();
      $("#turnScore").hide();
      alert("Nice Game! You Win!");
    } else {
      console.log(player1.gameScore);
      $("#gamesscore-player1").text(player1.gameScore);
      $(".game-player1 button").hide();
      $(".game-player2 button").show();
    }

  });

  //Click Functions for Player 2

  $("button[name=player2roll]").click(function(event) {
    var randomNum = randomDiceNumber();
    $(".game-player2 img").attr("src", dicePic(randomNum));
    if (randomNum === 1) {
      player2.turnScore = 0;
      $("#turnScore").html(0);
      $(".game-player2 button").hide();
      $(".game-player1 button").show();
    } else {
      player2.roll(randomNum);
      $("#turnScore").text(player2.turnScore);
    }
  });

  $("button[name=player2hold]").click(function(event) {
    player2.hold();
    $("#turnScore").text(0);
    if (player2.gameScore >= 100) {
      $(".winner").html("<h1>The winner is " + player2.name + "!</h1>");
      $(".winner").show();
      $("#turnScore").hide();
      alert("Nice Game! You Win!");
    } else {
      console.log(player1.gameScore);
      $("#gamesscore-player2").text(player2.gameScore);
      $(".game-player2 button").hide();
      $(".game-player1 button").show();
    }
  });
});
