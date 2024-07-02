//JS console objects
console.log("log");
console.info("info");
console.warn("warn");
console.error("err");
console.assert("err"!=false);
console.assert(err==false);
//console.time()
console.time("For loop");
for(i=0;i<5;i++){
  console.log(250);
  i++;
}
console.timeEnd("For loop");
console.time("While Loop"){
  i=0;
  while(i<5){
    console.log(250);
    i++;
  }
}
console.timeEnd("While loop");
//console.time() method is used to estimate the time taken by for loop to execute and similarly in above example it compares the time taken by for loop and while loop to execute.