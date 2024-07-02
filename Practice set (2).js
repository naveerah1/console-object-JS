 //Problem 1 use prompt or alert whether use can drive or not
let age = prompt("Enter your age")
age = Number.parseInt(age);
const Candrive = (age)=>{
  return age>18?true:false;
}
if(Candrive(age)){
  alert("You can drive")
}
else{
  alert("You cannot drive");
}

//problem 2 use confirm to ask the user if he wants to see the prompt again

let runagain = true;
const Candrive = (age)=>{
  return age>18?true:false;
}
while(runagain){
  let age = prompt("Enter your age")
  age = Number.parseInt(age);

}
if(Candrive(age)){
  alert("You can drive")
}
else{
  alert("You cannot drive");
}
  runagain = confirm("Do you want to play again?"");
}

//problem 3 use console.error to log the error if the age entered is negative

let runagain = true;
const Candrive = (age)=>{
  return age>18?true:false;
}
while(runagain){
  let age = prompt("Enter your age")
  age = Number.parseInt(age);
if(age<0){
  console.error("Please enter a valid age");
  break;
}

}
if(Candrive(age)){
  alert("You can drive")
}
else{
  alert("You cannot drive");
}
  runagain = confirm("Do you want to play again?"");
}

//problem 4 
let number = prompt("Enter your number");
    number = Number.parseInt(number);
if(number>4){
  location.href="https://google.com";
}
//problem 5 change the background of the page to yellow, red or any other color based on user input through prompt

let number = prompt("Enter your number");
    number = Number.parseInt(number);
if(number>4){
  location.href="https://google.com";
}
let color = prompt("Enter a page background colour");
document.body.style.background=color;