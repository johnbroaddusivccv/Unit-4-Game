$(document).ready(function() {
    $("img").click(function() {
        $(this).hide(500).show(500);
        
    })
// This seems to be working to generate a random number when the page refreshes
// But what about when the User wins???
var targetRandom = document.getElementById('random');    
targetRandom.textContent = Math.floor((Math.random() * 120) + 1);

var totals1 = document.getElementsByClassName(".btn1");
totals1.textContent = Math.floor((Math.random() * 60) + 1);
console.log(totals1);

var totals2 = document.getElementsByClassName(".btn2");
totals2.textContent = Math.floor((Math.random() * 60) + 1);
console.log(totals2);

var totals3 = document.getElementsByClassName(".btn3");
totals3.textContent = Math.floor((Math.random() * 60) + 1);
console.log(totals3);

var totals4 = document.getElementsByClassName(".btn4");
totals4.textContent = Math.floor((Math.random() * 60) + 1);
console.log(totals4);

var targetCount1 = document.getElementById('count1');
targetCount1.text = "Wins:" + totals1;

var targetCount2 = document.getElementById('count2');
targetCount2.text = "Loses:" + totals1;
})

$('#btn1').on("click", function() {
    $('#total').text(Math.floor((Math.random() * 30) + 1));
})

