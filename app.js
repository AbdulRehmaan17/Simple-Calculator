let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btnStyle");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = this.getAttribute("data-value");
        if (value === "AC"){
            result.value = "";
        }
        if (value === "=") {
            result.value = eval(result.value);
        }
        if (value !== "AC" && value !== "="){
            result.value += value;
        }    
    });

});