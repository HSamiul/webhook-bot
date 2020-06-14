if (localStorage.getItem("mode") == null) {
    localStorage.setItem("mode", "light");
    console.log('hi');
}

if (localStorage.getItem("mode") == "dark") {   
    $("body").css("background-color", "#000A0A");
    $(".workspace").css("background-color", "#0F1919");
    $("#sidebar").css("background-color", "#0F1919");
    $("#sidebar").css("color", "#ff66bb");
    $("hr").css("border", "1px solid #6c757d");
    $("hr").css("border-bottom", "none");
    $(".button").css("background-color", "#ff66bb");
    $("input").css("borderColor", "#6c757d");
    $("textarea").css("borderColor", "#6c757d");
    $("input").css("color", "#999");
    $("textarea").css("color", "#999");
    $(".workspace").css("borderColor", "#0F1919");
    $(".workspace").css("boxShadow", "none");
    $("#sidebar").css("boxShadow", "none");
    console.log(localStorage.getItem("mode"));
}

console.log(localStorage.getItem("mode"));

function themeToggle() {
    if (localStorage.getItem("mode") == "dark") {
        localStorage.setItem("mode", "light");
        $("body").css("background-color", "rgb(240, 230, 230)");
        $(".workspace").css("background-color", "rgb(255, 245, 245)");
        $("#sidebar").css("background-color", "rgb(255, 210, 235)");
        $("#sidebar").css("color", "rgb(0, 0, 0)");
        $("hr").css("border", "1px solid rgb(0, 0, 0, 0.1)");    
        $("hr").css("border-bottom", "none");
        $(".button").css("background-color", "rgb(255, 210, 235)");
        $("input").css("borderColor", "rgb(0, 0, 0, 0.1)");
        $("textarea").css("borderColor", "rgb(0, 0, 0, 0.1)");
        $("input").css("color", "#999");        
        $("textarea").css("color", "#999");
        $(".workspace").css("borderColor", "");
        $(".workspace").css("boxShadow", "0px 0px 100px 0px rgb(207, 207, 207)");
        $("#sidebar").css("boxShadow", "0px 0px 100px 0px rgb(207, 207, 207)");
        console.log(localStorage.getItem("mode"));
        return;
    }

    if (localStorage.getItem("mode") == "light") { 
        localStorage.setItem("mode", "dark")        
        $("body").css("background-color", "#000A0A");
        $(".workspace").css("background-color", "#0F1919");
        $("#sidebar").css("background-color", "#0F1919");
        $("#sidebar").css("color", "#ff66bb");
        $("hr").css("border", "1px solid #6c757d");    
        $("hr").css("border-bottom", "none");
        $(".button").css("background-color", "#ff66bb");
        $("input").css("borderColor", "#6c757d");
        $("textarea").css("borderColor", "#6c757d");
        $("input").css("color", "#999");        
        $("textarea").css("color", "#999");
        $(".workspace").css("borderColor", "#0F1919");
        $(".workspace").css("boxShadow", "none");
        $("#sidebar").css("boxShadow", "none");
        console.log(localStorage.getItem("mode"));
        return;
    }
}