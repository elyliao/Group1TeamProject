var button = $("#continue-button");

// replace walking animation with eating animation
button.click(function() {
    $("#graphic").empty();
    $("#graphic").append('<img src="img/eating.gif" width=650px>');
    // animation plays, then fades out, then goes to diagnosis page
    setTimeout(function() {
        $("#graphic").fadeOut(2000);
    }, 1000);
    setTimeout(function() {
        location.href = "../diagnosis/index.html"
    }, 4000);
});