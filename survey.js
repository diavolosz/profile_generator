
const readline = require('readline');



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? ', (answer) => {
  rl.question('What\'s an activity you like doing? ', (answer2) => {
    rl.question('What do you listen to while doing that? ', (answer3) => {
      rl.question('Which meal is your favourite? (eg: dinner, brunch, etc.) ', (answer4) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer5) => {
          rl.question('Which sport is your absolute favourite? ', (answer6) => {
            rl.question('If you can choose a superpower, what would it be? ', (answer7) => {
              console.log(`${answer} loves to ${answer2} while listening to ${answer3}. Kinda weird but we won\'t judge. Favorite meal of the day is ${answer4}, and ${answer5} is probably not the best thing to eat during that meal. ${answer}'s favorite sport is ${answer6}, and ${answer} would like to use ${answer7} to cheat during ${answer6}`)
              rl.close();
            });
          });
        });
      });
    });
  });
});