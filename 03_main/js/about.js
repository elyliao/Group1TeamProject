// about.js - describes hepatitis A and common symptoms

// show about div and hide all other divs
// about section
$("#about").show();
$("#what-explanation").hide();
$("#transmission-explanation").hide();
$("#common-symptoms-explanation").hide();
$("#other-symptoms").hide();
$("#continue").hide();
// hide animation section
$("#animation").hide();
// hide main section and contents
$("#main").hide();

// for about section
// variables to track which tabs have been seen (max 3)
var tab = 0;
var what = false;
var transmission = false;
var commonSymptoms =false;
// counter for how many symptoms have been shown (max 3)
var symptom = 0;

// function to show continue button once all 3 common symptoms have been revealed
function reveal() {
    // reveal other symptoms if all 3 symptoms have been checked
    if (symptom == 3) {
        $("#other-symptoms").show();
        // also reveal continue button if all 3 symptoms have been checked AND all 3 tabs have been checked
        if (tab == 3) {
            $("#continue").show();
    }
}};

// tab to reveal what hep a is
$("#what").click(function() {
    if (what == false) {
        tab += 1;
        what = true;
    };
    $("#transmission-explanation").hide();
    $("#common-symptoms-explanation").hide();
    $("#what-explanation").show();
    // check if everything has been shown
    reveal();
});
// tab to reveal how it's transmitted
$("#transmission").click(function() {
    if (transmission == false) {
        tab += 1;
        transmission = true;
    };
    $("#transmission-explanation").show();
    $("#common-symptoms-explanation").hide();
    $("#what-explanation").hide();
    // check if everything has been shown
    reveal();
});
// tab to reveal common symptoms
$("#common-symptoms").click(function() {
    if (commonSymptoms == false) {
        tab += 1;
        commonSymptoms = true;
    };
    $("#transmission-explanation").hide();
    $("#common-symptoms-explanation").show();
    $("#what-explanation").hide();
    // check if everything has been shown
    reveal();
});

// reveal symptom images after clicking on each symptom button and check to see if all symptom buttons have been clicked
$("#symptom-1").click(function() {
    console.log("clicked");
    $("#symptom-1").after('<img src="img/symptom1.png" width=250px>');
    $("#symptom-1").remove();
    symptom += 1;
    // check if everything has been shown
    reveal();
});

$("#symptom-2").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-2").after('<img src="img/symptom2.png" width=250px>');
    $("#symptom-2").remove();
    symptom += 1;
    // check if everything has been shown
    reveal();
});

$("#symptom-3").click(function() {
    console.log("clicked");
    // image is a placeholder for now
    $("#symptom-3").after('<img src="img/symptom3.png" width=250px>');
    $("#symptom-3").remove();
    symptom +=1;
    // check if everything has been shown
    reveal();
});

// when continue button is clicked
$("#continue").click(function() {
    $("#about").hide();
    $("#animation").show();
    // animation plays, then hides, then shows main content
    setTimeout(function() {
        // hide animation div and show main div
        $("#animation").hide();
        $("#main").show();
    }, 2000);
});
/*
Some thing for later use?
$("#body.liver").click(function(){
    $("#liver").show();
})

$("#body.digestive").click(function(){
    $("#digestive-system").show();
})

$("#body.joint").click(function(){
    $("#joint-pain").show();
})
*/