let  readlineSync  =  require('readline-sync');

let userChoice = readlineSync.question("Where would you like to go?").toLowerCase();

function location(choice){
  if (userChoice === "wynwood"){
    console.log ("Fun! Let's go check out the Wynwood Walls!");
    wynwood()
  }

  else if (userChoice === "south beach"){
    console.log ("Great! Let's go to the beach!");
    southBeach()
  }

else {
  console.log ("Invalid Choice!")
}
     }

location()

function wynwood(selected) {
  userChoice = readlineSync.question("While at the walls do you go to the art gallery or go to Wynwood yard?").toLowerCase();
  if(userChoice === "art gallery"){
    console.log (`Congrats! You won a Picasso that's worth $1 billion!!!`)
  }
  else if (userChoice === "wynwood yard"){
  console.log ('Uh Oh! You slipped on the rocks and sprained your ankle! Game over.')
}
else {
  console.log ("Invalid Choice!")
}
}

function southBeach(selected){
  let userChoice2 = readlineSync.question("The beach is HOT. Do you get a cabana or go inside a restuarant?").toLowerCase();
  if(userChoice2 === "cabana"){
    console.log('Yikes! You got caught in the umbrella. Game over!')
  }
else if (userChoice2 === "restuarant") {
  console.log('Yay! You got a drink on the house from your favorite celebrity')
}
else {
  console.log ("Invalid Choice!")
}
}
