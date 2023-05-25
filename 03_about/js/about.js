// about.js - describes hepatitis A and common symptoms

// reveal symptom images after clicking on each symptom button 
$("#symptom-1").click(function() {
    console.log("clicked");
    $("#symptom-1").after('<img src="img/symptom1.png" width=300px>');
    $("#symptom-1").remove();
});

$("#symptom-2").click(function() {
    console.log("clicked");
    $("#symptom-2").after('<img src="img/symptom2.png" width=300px>');
    $("#symptom-2").remove();
});

$("#symptom-3").click(function() {
    console.log("clicked");
    $("#symptom-3").after('<img src="img/symptom3.png" width=300px>');
    $("#symptom-3").remove();
});

$("#continue").click(function() {
    location.href = "../04_main/index.html"
});