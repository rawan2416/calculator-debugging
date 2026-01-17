const display = document.getElementById("display");
const result = document.getElementById("result"); 

function appendToDisplay(input){
    display.value += input; //bug
}

function clearDisplay(){
    display.value = ""; 
    result.innerHTML = 0; 
}//bug

function calculate(){
    try{
        result.innerHTML = eval(display.value); //bug
    }
    catch{
        result.innerHTML = "Error";//bug 
    }
}

function deleteDisplay(){
    const newDisplay = display.value;
    display.value = newDisplay.substring(0, newDisplay.length-1); 
}
