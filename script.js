let computerMove = '';
let wins=0,losses=0,ties=0;
        let result = '';
        function reset(){
            location.reload();
        }
        function game(playerMove) {
            let randomNumber = Math.random();
            if (randomNumber > 0 && randomNumber < 1 / 3) {
                computerMove = 'rock'
            } else if (randomNumber > 0 && randomNumber < 2 / 3) {
                computerMove = 'paper'
            } else if (randomNumber > 0 && randomNumber < 1) {
                computerMove = 'scissors'
            }

            if (playerMove === computerMove) {
                result = 'Tie';
                ties+=1;
            } else if ((playerMove === 'rock' && computerMove === 'scissors') ||
                (playerMove === 'paper' && computerMove === 'rock') ||
                (playerMove === 'scissors' && computerMove === 'paper')) {
                result = 'You Win';
                wins+=1;
            } else {
                result = 'You loose';
                losses+=1;
            }
            document.getElementById('result').innerHTML = `<div class="computer">Computers Move : ${computerMove} </div> <div class='your'>Your's Move : ${playerMove} `;
            document.getElementById('finalResult').innerHTML = result;
            if (result === 'You Win') {
                document.getElementById('finalResult').style.color = 'white';
                document.getElementById('finalResult').style.backgroundColor='Green';
            } else if (result === 'You loose') {
                document.getElementById('finalResult').style.color = 'white';
                document.getElementById('finalResult').style.backgroundColor='Red';
            } else {
                document.getElementById('finalResult').style.color = 'white';
                document.getElementById('finalResult').style.backgroundColor='Orange';
            }
            document.getElementById('data').innerHTML=`Wins : ${wins} , Looses : ${losses} , Ties : ${ties} <br>No of Games Played : ${wins+losses+ties} times`
        }
