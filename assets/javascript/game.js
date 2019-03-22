    var totalSum = 0;
    var wins = 0;
    var loses = 0;
    var random;
    var crystalArr = ["assets/images/greencrystal.png", "assets/images/redcrystal.png", "assets/images/risingstar.png", "assets/images/acornImage.png"];
    var randomInt = Math.floor(Math.random()* 109 + 11);
    var newCount = 0;
    function renderCrystals() {
        for (let i = 0; i < crystalArr.length; i++) {
            var image = $('<img>');
            image.attr('src', crystalArr[i]);
            image.attr("crystalValue", Math.floor(Math.random() * 12 + 1));
            
            $('#container').append(image);
        }
    }
    
    renderCrystals();
    function resetGame() {
        
        random = Math.floor(Math.random()* 109 + 11);
        $('#random').html("<h1>" + random + "</h1>")
    }

resetGame();

    $(document).on("click", "img", function() {
        totalSum += parseInt($(this).attr("crystalValue"));
        $('#total').text(totalSum);
        console.log(totalSum);
        

        if (totalSum == random) {    
        alert('thats exactly right');
        $('#wins').html(loses++);
       }
        else if (totalSum > random) {      
        $('#loses').html(loses++);
       }
         
        // $('#total').html(newCount);
     
});



      

    