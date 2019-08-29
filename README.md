# _Pig Dice_

#### _Play a player game of Pig Dice or play against a CPU, {8/28/2019}_

#### By _**Jen Batara and Devin Cooley**_

## Description

_The purpose of this application is to allow a user to play a game of Pig Dice against the computer, or allow 2 users to play Pig Dice against one another. It will initially prompt the user to select a PvP or PvC game type. It will then ask the single user or the 2 users to enter their names. It w_

## Specifications

### User Interface

| Spec                      |Input          | Output |
|:---------------------------|:-------------|:------|
|Prompts user for game type input|Click "2 Players" Button|2 Name Fields|
|Prompts user for game type input|Click "1 Player vs CPU"|1 Name Field|
|Prompts user(s) to write in name|Input not filled| Player1<br> Player 2|
|Prompts user(s) to write in name|Player 1: empty <br> Player 2: D|Player 1 <br> D|

### PvP/GAMEPLAY

|Description|Button|Score|Outcome|
|:-------------:|:-------------:|:------| |
|Prompt user to click play or hold button|Roll 1|Turn Score: 0 <br> Game Score: unchanged| Change to other player, turn score =0 |
|Prompt user to click play or hold button|Roll !1|Turn Score: +roll <br> Game Score: unchanged| Add roll score to turn score |
|Prompt user to click play or hold button|Hold|Turn Score: 0<br> Game Score: +turnScore| Add turn score to game score |
|Turn Score + Game Score > 100|Hold|Turn Score: 0<br> Game Score: +turnScore| Alert winning user through popup and winner h2 tag |

### PvCPU
|Spec|Input|Output|
|:---------------------------|:-------------:|:------|
|:---------------------------|:-------------:|:------|

### CPU

|Spec|User Score|CPU Score|Turn Score|Output|
|:---------------------------|:-------------:|:------|||
|:---------------------------|:-------------:|:------|||

## Setup/Installation Requirements

_Simply load this application in your web browser_

## Known Bugs

_There are no known bugs at this time._

## Support and contact details

_Send any questions or comments to Devin Cooley at dcooley1350@gmail.com._

## Technologies Used

_This program was written using HTML, JavaScript, and CSS. Bootstrap and jQuery were implemented._

### License

*This software is licensed under the MIT license.*

Copyright (c) 2016 **_Jen Batara and Devin Cooley_**
