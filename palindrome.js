//reqbin.com/code/javascript to run code

var letters = [];
var word = "racecar";
var rword = "";

//put letter of word into the stack
for (var i = 0; i < word.length; i++) {
    letters.push(word[i]);
}

//pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letters.pop();
}

if(rword === word) {
    console.log(word + " is a palindromd.");
}
else {
    console.log(word + " is not a palindrome.");
}
