import words from "./dictionary";
import { getChars, sortArray } from "./utils";
/* Scan Dictionary.ts & get All Chars Scored */
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
/* 
var MyNewChars = [];
for (let char in MyChars) {
  MyNewChars.push([char, MyChars[char]]);
}
// MyChars = MyNewChars.sort((a, b) => b[1] - a[1]);
MyChars = sortArray(MyNewChars, "desc", (c) => c[1]);
var MyObjectChars: any = {};
for (let char of MyChars) {
  MyObjectChars[char[0]] = char[1];
}
MyChars = MyObjectChars; 
*/
/* Score words */
// var MyWords: any = {};
var MyWords = [];
for (let word of words) {
  let chars = getChars(word);
  let score = 0;
  for (let char of chars) {
    score = score + MyChars[char];
  }
  MyWords.push([word, score]);
}
/* 
var MyNewWords = [];
for (let word in MyWords) {
  MyNewWords.push([word, MyWords[word]]);
} 
*/
MyWords = sortArray(MyWords, "desc", (c) => c[1]);
/* 
var MyObjectWords: any = {};
for (let word of MyWords) {
  MyObjectWords[word[0]] = word[1];
}
MyWords = MyObjectWords;
*/
/* Get A ChoosenWord */
var notchosenWords = [];
var chosenWord = "";
var moreChosenWords = [];
var i = 0;
do {
  if (!MyWords[i] || !MyWords[i][0]) {
    chosenWord = "ERRORR";
  }
  let chars = getChars(MyWords[i][0]);
  let myChars: any = {};
  let doesntHaveIt = true;
  for (let char of chars) {
    if (myChars[char]) {
      myChars[char]++;
      doesntHaveIt = false;
      notchosenWords.push(MyWords[i]);
      break;
    } else {
      myChars[char] = 1;
    }
  }
  if (doesntHaveIt === true) {
    if (chosenWord !== "") {
      moreChosenWords.push(MyWords[i][0]);
    } else {
      chosenWord = MyWords[i][0];
    }
  }
  i++;
} while (chosenWord === "" || moreChosenWords.length < 5);
console.log(MyChars);
console.log(MyWords);
console.log(notchosenWords);
console.log(chosenWord);
console.log(moreChosenWords);
