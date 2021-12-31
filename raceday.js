let raceNumber = Math.floor(Math.random() * 1000);
/*This variable will indicate whether a runner registered early or not*/
let registeredEarly = false;
/*This variable is for the value of the runners age*/
let runnersAge = 16;
/*control flow statement that checks whether the runner is an adult and registered early*/
if(runnersAge > 18 && registeredEarly){
  raceNumber += 1000;
}
/*control flow that determines takes the runnersAge variable's value, the registeredEarly variable's value and the runnersAge variable's value and
will let the racer know what time their race starts as well as giving them their race number. If the racer is younger than 18 they have a number
that is below 1000 and if they are above 18 they are assigned a number above 1000. Racers who are age 18 must report to the registration desk.*/
if(runnersAge > 18 && registeredEarly){
  console.log(`Your race number is ${raceNumber} and your race starts 9:30am!`);
} else if(runnersAge > 18 && !registeredEarly){
  console.log(`Your race number is ${raceNumber} and your race starts 11:00am!`);
} else if(runnersAge < 18){
  console.log(`Your race number is ${raceNumber} and your race starts 12:30pm!`);
} else{
  console.log(`Please see the registration desk.`);
}