const axios = require("axios");
const cowsay = require("cowsay");

exports.cowSpeak = (a) => {
  console.log(cowsay.say({ text: a }));
};

exports.getBeer = axios
  .get(`https://api.punkapi.com/v2/beers/2`)
  .then(({ data }) => {
    console.log(data);
  })
  .catch((err) => err);

exports.add = (a, b) => {
  return a + b;
};

exports.minus = (a, b) => {
  return a - b;
};

exports.multiply = (a, b) => {
  return a * b;
};

exports.divide = (a, b) => {
  return a / b;
};
