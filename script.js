var doorImage1 = document.getElementById('door1');
var doorImage2 = document.getElementById('door2');
var doorImage3 = document.getElementById('door3');
var startButton = document.getElementById('start');

var botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
var beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
var spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
var closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg'

var openDoor1;
var openDoor2;
var openDoor3;

var numClosedDoors = 3;
var currentlyPlaying = true;

function isBot(door){
  if(door.src === botDoorPath){
    return true;
  }else{
    return false;
  }
}

function isClicked(door){
  if(door.src === closedDoorPath){
    return false;
  }else{
    return true;
  }
}

function playDoor(door){
  numClosedDoors -= 1;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if (isBot(door) === true){
    gameOver();
  }
}

const randomChoreDoorGenerator = () =>{
  var choreDoor = Math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor2 = spaceDoorPath;
  }
}

doorImage1.onclick = () => {
  if(isClicked(doorImage1) === false && currentlyPlaying === true){
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
  }
};

doorImage2.onclick = () => {
  if(isClicked(doorImage2) === false && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }
};

doorImage3.onclick = () => {
  if(isClicked(doorImage3 === false) && currentlyPlaying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }
};

startButton.onclick = () => {
    startRound();
}

function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
    currentlyPlaying = false;
  }else{
    startButton.innerHTML = 'Game over! Play again?';
    currentlyPlaying = false;
  }
  currentlyPlaying = false;
}

startRound();