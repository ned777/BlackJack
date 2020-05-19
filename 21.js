const readline = require('readline-sync');

let cards = [

    {heart:'2'}, {heart:'3'}, {heart:'4'}, {heart:'5'}, {heart:'6'}, {heart:'7'}, {heart:'8'}, 
    {heart:'9'}, {heart:'10'}, {heart:'joker'}, {heart:'queen'}, {heart:'king'}, {heart:'ace'},

    {king:'2'}, {king:'3'}, {king:'4'}, {king:'5'}, {king:'6'}, {king:'7'}, {king:'8'}, 
    {king:'9'}, {king:'10'}, {king:'queen'}, {king:'queen'}, {king:'king'}, {king:'ace'},

    {diamond:'2'}, {diamond:'3'}, {diamond:'4'}, {diamond:'5'}, {diamond:'6'}, {diamond:'7'}, {diamond:'8'}, 
    {diamond:'9'}, {diamond:'10'}, {diamond:'joker'}, {diamond:'queen'}, {diamond:'king'}, {diamond:'ace'},

    {spade:'2'}, {spade:'3'}, {spade:'4'}, {spade:'5'}, {spade:'6'}, {spade:'7'}, {spade:'8'}, 
    {spade:'9'}, {spade:'10'}, {spade:'joker'}, {spade:'queen'}, {spade:'king'}, {space:'ace'}

];

function cardSelection(){
    var x = Math.floor((Math.random() * cards.length) + 0);
    return x;
}

console.log(cards[cardSelection()]);

function cardPlayer(){
    
}