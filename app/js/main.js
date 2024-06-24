
const textBox = document.getElementById("textBox");
const toKelvin = document.getElementById("toKelvin");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;



function convert (){

    if(toKelvin.checked){
        temp = Number(textBox.value);
        temp = temp  + 273;
        result.textContent = temp.toFixed(1) + "°K";
    
    }
    else if(toCelsius.checked){
        temp = Number(textBox.value);
        temp = temp - 273;
        result.textContent = temp.toFixed(1) + "°C";
    
    }
    else{
        result.textContent = "select a unit"
        
    }

}