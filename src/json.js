const file = require('fs').readFileSync(__dirname + '/../phrases.json', 'utf8');
const jsonData = JSON.parse(file);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return (index = Math.floor(Math.random() * (max - min + 1)) + min);
}

const range = jsonData.message.length - 1;

const getMessage = () => {
  getRandomInt(0, range);

  const phrase = jsonData.message[index].phrase;
  const author = jsonData.message[index].author;

  return {
    phrase: phrase,
    author: author
  };
};

module.exports = {
  getMessage
};
