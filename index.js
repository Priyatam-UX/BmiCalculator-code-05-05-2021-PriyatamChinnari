const readline = require('readline');
const bmiCalculator = require('./bmi-calculator')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let intiMain = () => {

    rl.on('line', async (input) => {
        console.log(input);
        input = input.split(" ");
        switch (input[0]) {
            case ('bmiCalculator'):
                try {
                    const result = await bmiCalculator.calculateBmiBasedOnJson(input[1]);
                    console.log(result);
                } catch (e) {
                    console.log(`error occured ==> ${e}`);
                }
                break;
            case ('exit'):
                rl.pause();
                break;
            default:
                console.log('Seems like an issue with command that you typed , please note predeifed commands are case sensitive and matched as per the description!');
        }

    });
}

rl.on('SIGINT', () => {
    rl.question('Are you sure you want to exit? (yes/no) ', (answer) => {
        if (answer.match(/^y(es)?$/i)) rl.pause();
    });
}); 
 
intiMain();
