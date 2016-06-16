///////// IDENTIFIES TEXT /////////
var sonnet = document.getElementById("sonnet").innerHTML;

///////// LOGS PLACEMENT OF 'orphans' AND NUMBER OF CHARACTERS/////////
console.log(sonnet.indexOf("orphans"));
console.log(sonnet.length);

//////// REQUESTS REPLACEMENT AND SETS IT IN DOCUMENT ////////////
var replaceWinter = sonnet.replace("winter", "yuletide");
var replaceThe = sonnet.replace("the", "a large");

document.getElementById("sonnet").innerHTML = replaceWinter;
document.getElementById("sonnet").innerHTML = replaceThe;

