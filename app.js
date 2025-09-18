let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btnStyle");
let lastPressed = false;

buttons.forEach(function(button) {
    button.addEventListener("click", function() {

        let value = this.getAttribute("data-value");
        if(result.value === "Error" || result.value === "0"){
            result.value = "";
            lastPressed = false;
        }
        if (value === "AC"){
            result.value = "0";
            lastPressed = false;
        }
        if (value === "=") {
            try {
                result.value = eval(result.value);
                lastPressed = true;
            }
            catch (error) {
                result.value = "Error";
                lastPressed = false;
            }
        }
        if (value !== "AC" && value !== "="){
            result.value += value;
            lastPressed =true
        }
        
    });

});