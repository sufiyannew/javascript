const favMovie = "titanic"
let guess = prompt('Guess the favorite movie')

while ( (guess != favMovie && guess != "quit") ){
    guess = prompt('wrong guess. plz try again')
}

if (guess == favMovie){
    console.log('congrats!!')
}
else{
    console.log('you Quit')
}
