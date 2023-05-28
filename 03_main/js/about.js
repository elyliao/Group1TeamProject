// about.js - describes hepatitis A and common symptoms

// show about div and hide all other divs
$("#about").show();
$("#animation").hide();
$("#main").hide();
$("#continue").hide();

// for about section
// counter for how many symptoms are shown (max 3)
var symptom = 0;

// function to show continue button once all 3 common symptoms have been revealed
function reveal() {
    if (symptom == 3) {
        $("#continue").show();
}};


// reveal symptom images after clicking on each symptom button and check to see if all symptom buttons have been clicked
$("#symptom-1").click(function() {
    console.log("clicked");
    $("#symptom-1").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-1").remove();
    symptom += 1;
    reveal();
});

$("#symptom-2").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-2").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-2").remove();
    symptom += 1;
    reveal();
});

$("#symptom-3").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-3").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-3").remove();
    symptom +=1;
    reveal();
});


// when continue button is clicked
$("#continue").click(function() {
    $("#about").hide();
    $("#animation").show();
    // animation plays, then hides, then shows main content
    setTimeout(function() {
        // hide animation div and show main div
        $("#animation").hide()
        $("#main").show()
    }, 2000);
});