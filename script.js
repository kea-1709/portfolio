$(window).on("load", hide);

function hide() {
    console.log("start");

    $("#hide").hide();
    $("#gem").hide();
    $("#vis").on("click", vis);
    $("object").hide();
    $("#cv").on("click", se);


    $(".gallaribtn").click(function () {
        window.location.href = "galari.html";
        return false;
    });




}



function vis() {
    $("#hide").show();
    $("#vis").on("click", hide);
}

function se() {
    $("object").show();
    $("#gem").show();
    $("#gem").on("click", hide);

}
