const textbox = document.getElementById("textbox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
    let temp = Number(textbox.value);

    if(toFahrenheit.checked){
        //result.textContent= "you selected Fahrenheit  ";
        temp = Number(textbox.value)
        temp = (temp* 9/5)+32;
        result.textContent =  temp + " °F";
    }
    else if (toCelsius.checked) {
        //result.textContent= "you selected Celsius   ";
        temp = Number(textbox.value)
        temp = (temp - 32) * 5/9;
        result.textContent = temp + " °C";
    }
        else if (toKelvin.checked) {
        //result.textContent= "you selected Kelvin";
        temp = Number(textbox.value);
        temp = temp + 273.15;
        result.textContent = temp + " K";
    }
    else {
        result.textContent = "Please select a conversion option.";
    }
}
