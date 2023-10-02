const infoAboutMe = require("./information");
// console.log(infoAboutMe);

const cowsay = require("cowsay");
console.log( cowsay.say ( {
    text :`I'm ${infoAboutMe.name} and I learn NodeJS on ${infoAboutMe.campus} !`,
    e: "oO",
    T: "U"
}));