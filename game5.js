prompt = require('prompt-sync')();
 n = prompt('how much time ? ');
//const duree = 30;
if (n < 60) {
    console.log("Court mettrage");
}
if (n <= 120 && n > 60) {
    console.log("film standart");
}
if(n >120 )
    console.log(" film long");



