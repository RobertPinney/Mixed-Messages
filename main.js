/*  This project will aim to string together 3 random messages at once. The first will provide a random greeting, 
    the 2nd will give you your lucky number for the day, and the last will predict the day's weather. */

const tripleGenerator = (hello, arr) => {
    let randomNum = Math.floor(Math.random() * hello.length);
    let randomNum2 = Math.floor(Math.random() * 100);
    let randomNum3 = Math.floor(Math.random() * arr.length);
    console.log(`${hello[randomNum]}. Today's lucky number is ${randomNum2}, and today's weather will be ${arr[randomNum3]}.`)
};

const greetings = ["Hello", "Hi", "G'day", "Cheers", "Sup"];
const weather = ["cloudy", "sunny", "hazy", "snow", "rain", "windy"];

tripleGenerator(greetings, weather);
