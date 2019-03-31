var totalSum = 0;
var wins = 1;
var loses = 1;
var random;
var crystalArr = [
  "assets/images/greencrystal.png",
  "assets/images/redcrystal.png",
  "assets/images/RisingStar.png",
  "assets/images/AcornImage.png" 
];
var randomInt = Math.floor(Math.random() * 109 + 11);
var newCount = 0;
function renderCrystals() {
  for (let i = 0; i < crystalArr.length; i++) {
    var image = $("<img>");
    image.attr("src", crystalArr[i]);
    image.attr("crystalValue", Math.floor(Math.random() * 12 + 1));

    $("#container").append(image);
  }
}

renderCrystals();
function startGame() {
  random = Math.floor(Math.random() * 109 + 11);
  $("#random").html("<h1>" + random + "</h1>");
}

function resetGame() {
  random = Math.floor(Math.random() * 109 + 11);
  $("#random").html("<h1>" + random + "</h1>");
}
resetGame();
function startGame() {
  resetGame();
  totalSum = 0;
}

$(document).on("click", "img", function() {
  totalSum += parseInt($(this).attr("crystalValue"));
  $("#total").text(totalSum);
  console.log(totalSum);

  if (totalSum == random) {
    startGame();
    $("#wins").text(wins++);
  } else if (totalSum > random) {
    startGame();
    $("#loses").text(loses++);
  }

  if (loses > 6) {
    alert("Game Over");
  } else if (wins === 6) {
    alert("You WIN");
  }
});
// I struggled with a way to reset the entire game to its original state
// I also struggled with giving the crystals a new value after each win or loss