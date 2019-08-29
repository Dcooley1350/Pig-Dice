//Business Logic for Player

var Player = function() {
  this.name = "";
  this.turnScore = 0;
  this.gameScore = 0;
  this.gameWins = 0;
  this.playerNumber = 0;
  this.playerTurn = false;
  this.rolledNumber = 0;
}

Player.prototype.addName = function(name) {
  if (name) {
    this.name = name;
    return this.name;
  } else {
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

function rollAction(currentTurnPlayer, otherPlayer) {
  var randomNum = randomDiceNumber();
  currentTurnPlayer.rolledNumber = randomNum;
  $(".game-player" + currentTurnPlayer.playerNumber + " img").attr("src", dicePic(randomNum));
  if (randomNum === 1) {
    if(currentTurnPlayer.playerNumber ===1){
      cpu(otherPlayer, currentTurnPlayer);
    }
    currentTurnPlayer.playerTurn = false;
    currentTurnPlayer.turnScore = 0;
    $("#turnScore").html(0);
    $(".game-player" + currentTurnPlayer.playerNumber + " button").hide();
    $(".game-player" + otherPlayer.playerNumber + " button").show();

  } else {
    currentTurnPlayer.roll(randomNum);
    $("#turnScore").text(currentTurnPlayer.turnScore);
    console.log(currentTurnPlayer.turnScore);
  }
}

function holdAction(currentTurnPlayer, otherPlayer, hold) {
  currentTurnPlayer.rolledNumber = 0;
  if (hold === "hold") {
    currentTurnPlayer.hold();
    $("#turnScore").text(0);
    if (currentTurnPlayer.gameScore >= 100) {
      $(".winner").html("<h1>The winner is" + currentTurnPlayer.name + "!</h1>");
      $(".winner").show();
      $("#turnScore").hide();
      alert("Nice Game! You Win!");
    } else {
      $("#gamesscore-player" + currentTurnPlayer.playerNumber).text(currentTurnPlayer.gameScore);
      $(".game-player" + currentTurnPlayer.playerNumber + " button").hide();
      $(".game-player" + otherPlayer.playerNumber + " button").show();
    }
  } else {
    $("#turnScore").text(0);
    $("#gamesscore-player" + currentTurnPlayer.playerNumber).text(currentTurnPlayer.gameScore);
    $(".game-player" + currentTurnPlayer.playerNumber + " button").hide();
    $(".game-player" + otherPlayer.playerNumber + " button").show();
  }
}
//Business Logic for Hard CPU
function cpu(computer, player1) {
  var player1Score = player1.gameScore;
  var computerTurnScore = computer.turnScore;
  var computerTotalScore = computer.gameScore;

  if ((player1Score - computerTotalScore) > 30) {
    cpuHard(computer, player1);
  } else if ((player1Score - computerTotalScore) < 0) {
    cpuEasy(computer, player1);
  } else {
    cpuMedium(computer, player1);
  }
}

function cpuEasy(player2, player1) {
  for (i = 0; i <= 1; i++) {
    setTimeout(function() {
      rollAction(player2, player1);
    }, 1000);
  }
  holdAction(player2, player1);
}

function cpuMedium(cpu, player1) {
  if (cpu.turnScore >= 20) {
    holdAction(cpu, player1, "hold");
  } else if (cpu.rolledNumber === 1) {
    holdAction(cpu, player1);
  } else {
    rollAction(cpu, player1);
    setTimeout(function() {
      cpuMedium(cpu, player1);
    }, 2000);
  }
}

function cpuHard(cpu, player1) {
  if (cpu.turnScore >= 30) {
    holdAction(cpu, player1, "hold");
  } else if (cpu.rolledNumber === 1) {
    holdAction(cpu, player1);
  } else {
    rollAction(cpu, player1);
    setTimeout(function() {
      cpuHard(cpu, player1);
    }, 2000);
  }
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
player1.playerNumber = 1;
var player2 = new Player();
player2.addName("Player 2");
player2.playerNumber = 2;

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
    rollAction(player1, player2);
  });
  $("button[name=player1hold]").click(function(event) {
    holdAction(player1, player2, "hold");
    if (player2.name === "cpu") {
      cpu(player2, player1);
    }

  });

  //Click Functions for Player 2

  $("button[name=player2roll]").click(function(event) {
    rollAction(player2, player1);
  });

  $("button[name=player2hold]").click(function(event) {
    holdAction(player2, player1, "hold");
  });
});
