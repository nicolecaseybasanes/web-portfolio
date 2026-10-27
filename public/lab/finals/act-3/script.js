//$("#title").text("Welcome")

$(document).ready(function(){

    //Change Title Button
    $("#changetitle").click(function(){
            $("#title").text("Welcome!")
        })
    $("#changetitle").dblclick(function(){
            $("#title").text("Hello, BSIT31C")
        })

    //Hide Profile Buttomn
    $("#hideprofile").click(function(){
            $(".studentinfo").hide("slow") //maghahide kapag clinick
        })
    
    //Show Profile Button
    $("#showprofile").click(function(){
            $(".studentinfo").show(1000) //magshowhow kapag double-clinick
        })

//output detect
    //hide profile button
    $("#hideprofile").click(function(){
        $("#outputdetector").text("Hide profile")
    })
    //show profile button
    $("#showprofile").click(function(){
        $("#outputdetector").text("Show profile")
    })
    $("#changetitle").dblclick(function(){
        $("#outputdetector").text("Change Title")
    })


//Pick course detect
    $("#course").change(function(){
        let selectedCourse = $(this).find("Option:selected").text();
        let selectedValue = $(this).val();

        if(selectedValue == ""){
            $("#courselabel").text("No Course Selected.");
        }
        else{
            $("#courselabel").text("Selected Course: "+selectedCourse);
            $("#studcourse").text("Course: "+selectedCourse)
        }
    })

//highlight table
    //add highlight
    $("#odd").click(function(){
        $("#treven").css("background-color", "white");
        $("#trreven").css("background-color", "white");
        $("#trodd").css("background-color", "yellow");
        $("#trrodd").css("background-color", "yellow");
        $("#tablelabel").text("Highlights Odd Row")
    });


    $("#even").click(function(){
        $("#trodd").css("background-color", "white");
        $("#trrodd").css("background-color", "white");
        $("#treven").css("background-color", "yellow");
        $("#trreven").css("background-color", "yellow");
        $("#tablelabel").text("Highlights Even Row")
    });









    

})