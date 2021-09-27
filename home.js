//game values
let min=1,
	max=10,
	winningNumber=getRandomNum(min,max),
	guessLeft=3;

//declaring variables
const game=document.querySelector('.game'),
	  minNum=document.querySelector('.min-number'),
	  maxNum=document.querySelector('.max-number'),
	  guessBtn=document.querySelector('#guess-btn'),
	  guessInput=document.querySelector('#guess-input'),
	  message=document.querySelector('.message');

//assigning ui min and max and not in the html
minNum.textContent=min;
maxNum.textContent=max;

// creating an event listener for play again
	game.addEventListener('mousedown',function(e){ // use the mouse down not the click event so as to see when won or loose 
// targeting the play-again class ie play again button
		if(e.target.className==='play-again'){
// to reload the page
	window.location.reload();
		}
	});

//creating an event listener and function for the button
guessBtn.addEventListener('click',function(){
	//console.log(guessInput.value);
	let guessInt=parseInt(guessInput.value);
	//console.log(guessBtn)
	// creating a message when the no is less,greater or NaN(not a no)
	if(isNaN(guessInt) || guessInt<min || guessInt >max){
	// a message should display if any of this is true
	setMessage(`please enter a number between ${min}and ${max}`,'red ');

	}
//check if won
if(guessInt===winningNumber){

// disable input(you cannot input a number again)
	// guessInput.disabled=true
//changing the border color when you win
	// guessInput.style.borderColor='green';
// winning message
	// setMessage(`${winningNumber} is correct, YOU WON!`, 'green',)
	// we created a function for this so we had to replace this code 
	gameOver(true,`${winningNumber} is correct, YOU WON`)
}else{
// subtract 1 from the no of guesses left
	guessLeft-=1;
	if(guessLeft===0){
	// dissable guessInput
		// guessInput.diabled=true;
		// guessInput.style.borderColor='red';
	//losing message
		// setMessage(`Game over,YOU LOST. The correct number is ${winningNumber}`,'red');
		// this code had to be replaced with a more functional one
		gameOver(false, ` game over, YOU LOSE, the correct number was ${winningNumber}`)
}else{
// answer is wrong but game continues
	setMessage(`${guessInt} is not correct, ${guessLeft} guess left`,'red');
	guessInput.style.borderColor='red';
// clearing the input
	guessInput.value='';
}
}
});
//creating the setMessage function
function setMessage(msg,color){
	// changing the message color to red
	message.style.color=color;
	message.textContent=msg;

}
// creating a function of game over instead of repetition
function gameOver(won,msg){
let color;
won===true ? color='green':color='red';

// disable input(you cannot input a number again)
	guessInput.disabled=true
//changing the border color when you win
	guessInput.style.borderColor=color;
// winning message
	setMessage(msg)
	message.style.color=color;
// creating the play again button from the submit button
	guessBtn.value='Play Again';
	// creating a new class ie we are appending it
	guessBtn.className +='play-again';
}
//getRandomNum function
function getRandomNum(min, max){
	//generating the random numbers
	return (Math.floor(Math.random()*(max-min +1)+min));

}
