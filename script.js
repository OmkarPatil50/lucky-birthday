const dateInput = document.querySelector("#input-date")
const buttonClick = document.querySelector("#btn-clicked")
const luckyNumber = document.querySelector("#input-number")
const finalMessage = document.querySelector("#message-final")

function readDateOfBirth(){
    const dateValue = dateInput.value;  
    const noToCheck = luckyNumber.value;
    const sum = calculateSum(dateValue);
   luckTester ( sum , noToCheck );
}


function calculateSum(dateValue) {
    dateValue = dateValue.replaceAll("-", "");
    let sum = 0;
    for(i=0; i<dateValue.length; i++){
      sum =sum + Number(dateValue.charAt(i));
    }
    return sum;
  }
  
  

function luckTester(sum, noToCheck) {
    if(sum&&noToCheck){
        if(sum%noToCheck===0){
            finalMessage.innerText= "Wow! Your birthday is Lucky"
        }
        else{
            finalMessage.innerText= "Oops! Your birthday is not Lucky"
        }
    }else{
        finalMessage.innerText = "Please enter both the fields"
    }

}









buttonClick.addEventListener("click", readDateOfBirth)
