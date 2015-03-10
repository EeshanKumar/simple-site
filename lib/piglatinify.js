module.exports = function(word) {
  var wordArray = word.split("");
  var letters, changedWord;

  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 };

  if (vowelHash.hasOwnProperty(wordArray[0])) {
    return word + "-hay";
  } else {
    letters = wordArray.shift();
    changedWord = wordArray.join("") + "-" + letters + "ay";
    return changedWord;
  }
};