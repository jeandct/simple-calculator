//function calculator(){
    // let result;
    // switch(operator){
    //     case "+" :
    //         result = firstValue + secondValue;
    //         break; 
    //     case "-" :
    //         result = firstValue - secondValue;
    //         break; 
    //     case "/" :
    //         result = firstValue / secondValue;
    //         break;
    //     case "*":
    //         result = firstValue * secondValue;
    //         break; 
    //     case "%" :
    //         result = firstValue % secondValue;
    //         break; 
    //     default: console.log("Invalid operator");
    // }
    // console.log(result) 
//    }
//calculator();

const myBtn = document.getElementById("calculateBtn");
let myResult = document.getElementById("result")

myBtn.addEventListener("click", calculate)

function calculate(e){
    e.preventDefault();
    let firstValue = parseInt(document.getElementById("firstNumber").value);
    let operator = document.getElementById("operator").value;
    let secondValue = parseInt(document.getElementById("secondNumber").value);

    let result;
    switch(operator){
        case "+" :
            result = firstValue + secondValue;
            break; 
        case "-" :
            result = firstValue - secondValue;
            break; 
        case "/" :
            result = firstValue / secondValue;
            break;
        case "*":
            result = firstValue * secondValue;
            break; 
        case "%" :
            result = firstValue % secondValue;
            break; 
        default: console.log("Invalid operator");
    }

    if(operator === "/" && secondValue === 0){
        const errorMsg = document.getElementById("error");
        errorMsg.innerHTML = "Erreur: il est impossible de diviser par 0";
        result = "erreur"
    }

    console.log(result)
    myResult.innerHTML = `Résultat : ${result}` 
}

