const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  
if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
  return userInput;
} else {
  console.log('Error!!');
 }
};


const getComputerChoice = () => { const randomNumber = Math.floor(Math.random() * 3)
switch (randomNumber) {
  case 0:
    return 'rock';
  case 1:
    return 'paper';
  case 2:
    return 'scissors'; 
}
};



const determineWinner = (userChoice,computerChoice) => {

if (userChoice === computerChoice) {
  return 'The game is a tie!';
}  
 
if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The comptuer won!';
    } else {
      return 'You won!!';
    }   
  }
  
if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'The computer won!';
  } else {
    return 'You won!!';
  }
}
    
if (userChoice === 'scissors'){
  if (computerChoice === 'rock') {
    return 'The computer won!';
} else {
    return 'You won!!';
 }
}
  
if (userChoice === 'scissors') {
  if (computerChoice === 'paper') {
    return 'You won!!';
} else {
    return 'The computer won!';
 }
}
if (userChoice === 'bomb') {
  return 'You automatically win!!'; 
  //CHEAT BOMB
}  
  
}; //END ENTIRE GAME CHECK

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  
  console.log(`You threw: ${userChoice}.`);
  
  console.log(`The computer threw: ${computerChoice}`);
  
console.log(determineWinner(userChoice,computerChoice));   
  
}; //END OF PLAYGAME FUNC


playGame();//START GAME CHANGE THE getUserChoice in the playGame function to play!!!