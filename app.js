let result = document.getElementById("result");
let buttons = document.querySelectorAll(".btnStyle");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        let value = this.getAttribute("data-value");

        if (result.value === "Error" || result.value === "0") {
            result.value = "";
        }

        if (value === "AC") {
            result.value = "0";
        } else if (value === "C") {
            result.value = result.value.slice(0, -1) || "0";
        } else if (value === "=") {
            try {
                result.value = eval(result.value);
            }
            catch (error) {
                result.value = "Error";
            }
        } else {
            result.value += value;
        }
    });
});
