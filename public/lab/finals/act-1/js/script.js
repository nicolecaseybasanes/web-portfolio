console.log(document)


//Click me code ---------------------------------------------------------------
const var1 = document.getElementById("hh") 
console.log(var1)

const Button1 = document.getElementById("btn1")
console.log(Button1)


Button1.addEventListener(
    "click", function(){
        var1.innerHTML = "Future mo!"
    }
)


//Double Click code --------------------------------------------------------
const var2 = document.getElementById("hh") //iyung hh iyung papalitan
console.log("var2")

const Button2 = document.getElementById("db")
console.log(Button2)

Button2.addEventListener(
    "dblclick", function(){
        var2.style.color ="Red"
    }
)




//Image code ------------------------------------------------------------------

const Img = document.getElementById("Image")

Img.addEventListener(
    "mouseover", function(){ //mouseover kapag hinover
        var1.innerHTML="Your mouse reach the image"
    } 
)

Img.addEventListener(
    "mouseout", function(){ //mouseover kapag hinover
        var1.innerHTML= "Nicky"
    } 
)
//input code --------------------------------------------------------------------

const Input = document.getElementById("input") //Input iyung id na sinet ilalagay

Input.addEventListener(
    "change", function(){ //change is mababago iyung nakalagay
        var1.innerHTML =
        "Hello, "+ Input.value +"!"
    }
)

//habang nagtatype, dinidisplay
Input.addEventListener(
    "input", function(){
        var1.innerHTML =
        Input.value
    }
)


// highlight
Input.addEventListener(
    "focus", function(){
       Input.style.backgroundColor="Yellow"
    }
)


Input.addEventListener(
    "blur", function(){
        Input.style.backgroundColor="white"
    }
)

//Indicator
const indi = document.getElementById("indicator")

//habang nagtatype, dinidisplay
Input.addEventListener(
    "input", function(){
        indicator.innerHTML =
        "Input is active....."
    }
)

//after i-type, eto magdidisplay
Input.addEventListener(
    "change", function(){
        indicator.innerHTML =
        "Done typing!"
    }
)



