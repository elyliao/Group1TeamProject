var button = $("#continue-button");
function nextPage(){
    location.href = "../index.html";
};
button.click(function() {
    console.log("clicked");
    $("#graphic").empty();
    console.log("emptied");
    $("#graphic").append('<img src="img/eating.gif" width=650px>');
    console.log("replaced");
});