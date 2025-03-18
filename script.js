const inputScreen = document.getElementById("inputScreen")
const outputDisplay = document.getElementById("outputDisplay")


const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equal = document.getElementById("equal")
const clear = document.getElementById("clear")
const sign = document.getElementById("sign")

let firstInput = 0;
let secondInput = 0;
let result = 0;
let choice = "";
let nfInput = " ";
let nsInput = " ";
inputScreen.textContent = "";
let sin = "" ;

numbers.forEach((button) => {
     button.addEventListener("click", (e) =>{


        if(!choice && !sin)
        {
          outputDisplay.textContent = "";
          firstInput += e.target.textContent;
              inputScreen.textContent += e.target.textContent;
        }
        if(choice && !sin)
        {
               secondInput += e.target.textContent;
              inputScreen.textContent += e.target.textContent;
        }

        if(!choice && sin)
           {
              firstInput += -1 * e.target.textContent;
              inputScreen.textContent += e.target.textContent;
              sin="";
           }

         if(choice && sin)
          {
               secondInput += -1 * e.target.textContent;
              inputScreen.textContent += e.target.textContent;
              sin="";
          }  
       
          
     })
     
});

sign.addEventListener("click", () => {
     
        if(!sin)
        {
          outputDisplay.textContent = "";
         inputScreen.textContent = "-";
             sin = "-"
          }
        
 });



operators.forEach((button) =>{
     button.addEventListener("click",(e) => {

          if(!choice)
            {
               if(firstInput)
               {
                    inputScreen.textContent = "";
                    choice = e.target.textContent;
                    sin = "";
                    //inputScreen.textContent += " " + choice + " ";
               }
           }

           else
           {
               inputScreen.textContent = "";
               choice = e.target.textContent;
               //inputScreen.textContent = choice;
           }
         
     })
})

equal.addEventListener("click",()=>{

    
if(firstInput && secondInput && choice)
{
     let inputOne = parseFloat(firstInput);
     let inputTwo = parseFloat(secondInput)

     switch(choice) 
          {
     case "+":
          result = inputOne + inputTwo;
     break;
     case "-":
          result = inputOne - inputTwo;
     break;
     case "*":
          result = inputOne * inputTwo;
     break;
     case "/":
          result = inputOne / inputTwo;
     break;
     case "%":
          result = inputOne % inputTwo;
     break;
     default:
            result = "Invalid Operation";

            }
                  outputDisplay.textContent = result;
                  firstInput = "" ;
                  secondInput = "";
                  result = "";
                  choice = "";
                  inputScreen.textContent = "";

}

})



          

clear.addEventListener("click", ()=>
            {
               if(sin)
               {
                    sin = "";
               }
               if(!choice)
               {
                    if(firstInput.length > 0)
                    {
                         firstInput = firstInput.slice(0,-1)
                    }
                         
                    let textFirst = inputScreen.textContent;
                    if(textFirst.length > 0)
                    {
                     inputScreen.textContent = textFirst.slice(0,-1)
                    }
               }
               else
               {
                    if(secondInput.length > 0)
                    {
                        secondInput = secondInput.slice(0,-1)
                         
                    }
                    let textSecond = inputScreen.textContent;
                if(textSecond.length > 0)
                {
                 inputScreen.textContent = textSecond.slice(0,-1)
                }
               }
                
            })        

     

 