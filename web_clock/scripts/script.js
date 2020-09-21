$(document).ready(function(){
    console.log("loaded")

    let x = 0
    $("#darkMode").on("click", function(){

        if(x == 0){
            console.log("na ciemno")
            $("body").css("background-color", "#121212")
            $("body").css("color", "#bbbbbb")
            $("body").css("transition", "background-color 200ms linear")
            $(".minute").css("background-color", "#bbbbbb")
            $(".second").css("background-color", "#bbbbbb")
            $(".dot").css("background-color", "#bbbbbb")


            x += 1
        } else{
            console.log("na jasno")
            $("body").css("background-color", "#ffffff")
            $("body").css("color", "#000000")
            $(".minute").css("background-color", "#000000")
            $(".second").css("background-color", "#000000")
            $(".dot").css("background-color", "#000000")
            x -= 1
        }
    })
})