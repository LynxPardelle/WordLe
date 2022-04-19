import words from "./dictionary";
import { getChars, sortArray } from "./utils";

/* Escanear Dictionary.ts & get */
var MyChars: any = {};
for (let word of words) {
  let chars = getChars(word);
  for (let char of chars) {
    if (MyChars[char]) {
      MyChars[char]++;
    } else {
      MyChars[char] = 1;
    }
  }
}

// MyChars = sortArray();

var MyNewChars = [];

for (let char in MyChars) {
  //  MyNewChars.push(MyChars[char] + "/" + char);
  MyNewChars.push([char, MyChars[char]]);
}

// MyChars = MyNewChars.sort((a, b) => b[1] - a[1]);
MyChars = sortArray(MyNewChars, "desc", (c) => c[1]);

var MyObjectChars: any = {};
for (let char of MyChars) {
  MyObjectChars[char[0]] = char[1];
}

MyChars = MyObjectChars;

/* Puntuar palabras */
var MyWords: any = {};

for (let word of words) {
  let chars = getChars(word);
  let punt = 0;
  for (let char of chars) {
    punt = punt + MyChars[char];
  }
  MyWords[word] = punt;
}

var MyNewWords = [];

for (let word in MyWords) {
  MyNewWords.push([word, MyWords[word]]);
}

MyWords = sortArray(MyNewWords, "desc", (c) => c[1]);

/* var MyObjectWords: any = {};
for (let word of MyWords) {
  MyObjectWords[word[0]] = word[1];
}

MyWords = MyObjectWords; */

for (let word of MyWords) {
  let chars = getChars(word);
  let myChars: any = {};
  for (let char of chars) {
    if (myChars[char]) {
      myChars[char]++;
      MyWords.splice(MyWords.indexOf(word), 1);
      break;
    } else {
      myChars[char] = 1;
    }
  }
}

console.log(MyWords);
