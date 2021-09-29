const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your passworld ?', password => {
  if(password.length >= 10){
    console.log("Congrats ! Your password is correct");
    rl.close();
  }else{
  console.log("Your password need at least 10 characters. Please try again");
  rl.close();
  }
});
