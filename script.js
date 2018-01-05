$(window).on("load", hide);

function hide() {
    console.log("?");

    $("#hide").hide();
    $("#gem").hide();
    $("#vis").on("click", vis);
    $("object").hide();
    $("#cv").on("click", se);

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
