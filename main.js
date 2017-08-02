var BasicCard = require("./BasicCard");
var ClozeCard = require("./ClozeCard");

var firstPresident = BasicCard("Who was the first president of the United States?", "George Washington");

var secondPresident = ClozeCard("John Adams was the second president of the United States?", "John Adams");

var thirdPresident = new BasicCard("Who was the third president of the United States?", "Thomas Jefferson");

var fourthPresident = new ClozeCard("James Madison was the fourth president of the United States.", "James Madison");

console.log(firstPresident.front);
console.log(firstPresident.back);

console.log(secondPresident.partial);
console.log(secondPresident.cloze);

console.log(thirdPresident.front);
console.log(thirdPresident.back);

console.log(fourthPresident.partial);
console.log(fourthPresident.cloze);