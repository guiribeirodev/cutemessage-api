const file = require('fs').readFileSync(__dirname + '/../phrases.json', 'utf8');
const jsonData = JSON.parse(file);

function getRandomInt(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  let index: number = Math.floor(Math.random() * (max - min + 1)) + min;
  return index;
}

interface IMessage {
  phrase: string;
  author: string;
}

function getMessage(): IMessage {
  const range: number = jsonData.message.length - 1;
  const index: number = getRandomInt(0, range);

  const phrase = jsonData.message[index].phrase;
  const author = jsonData.message[index].author;

  let message: IMessage = {
    phrase: phrase,
    author: author,
  };

  return message;
}

export { getMessage };
