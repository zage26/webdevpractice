$('.box').on("click", function() {
    $(this).animate({
    	//Animates back to the left
        left: '-50%'
    }, 500, function() {
    	//What happens after animation ends
        $(this).css('left', '150%');
        $(this).appendTo('#container');
    });

    $(this).next().animate({
    	//Next object animates, etc. 
        left: '50%'
    }, 500);
});





