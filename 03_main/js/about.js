// about.js - describes hepatitis A and common symptoms

// show about div and hide all other divs
$("#about").show();
$("#animation").hide();
$("#main").hide();
// reveal symptom images after clicking on each symptom button 
$("#symptom-1").click(function() {
    console.log("clicked");
    $("#symptom-1").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-1").remove();
});

$("#symptom-2").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-2").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-2").remove();
});

$("#symptom-3").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-3").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-3").remove();
});

// when continue button is clicked
$("#continue").click(function() {
    $("#about").hide();
    $("#animation").show();
    $("#animation").append('<img src="img/human-body.gif" width=650px>');
    // animation plays, then fades out, then shows main content
    setTimeout(function() {
        $("#animation").fadeOut(2000);
    }, 1000);
    setTimeout(function() {
        // hide animation div and show main div
        $("#animation").hide()
        $("#main").show()
    }, 4000);
});