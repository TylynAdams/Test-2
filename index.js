  
var AWS = require('aws-sdk');
var s3 = new AWS.S3();

exports.handler = (event, context) => {
    let userChoice =event['choice']
    let computerChoice

    switch (userChoice) {
        case 'rock':
            computerChoice = 'paper'
            break;
        case 'paper':
            computerChoice = 'scissors'
            break;
        case 'scissors':
            computerChoice = 'rock'
            break;
    }
    const params = {
        Body: `You chose ${userChoice}, but I chose ${computerChoice}. I win!`,
        Bucket: 'mtech-rock-paper-scissors',
        key: 'tylynadams / result.txt'
    }

    s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack)
    });
};