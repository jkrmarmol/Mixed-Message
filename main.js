// Stored Message in Array
const arrMessage = ['When you have a dream, you\'ve got to grab it and never let go.', 'Nothing is impossible.', 'There is nothing impossible to they who will try', 'The bad news is time flies.']

// Randomize the Message and Return
const randMessage = () => {
    let randomNum = Math.floor(Math.random() * arrMessage.length);
    return arrMessage[randomNum];
}

console.log(randMessage())