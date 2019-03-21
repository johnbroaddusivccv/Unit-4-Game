    var totalSum = 0; 
    var random;
    var crystalArr = ["assets/images/greencrystal.png", "assets/images/redcrystal.png", "assets/images/risingstar.png", "assets/images/acornImage.png"];
    
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
    })