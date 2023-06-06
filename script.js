let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
      // When we click equal for evluation
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        // For all clear
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        // For deleting digit
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        // For adding ohter digit to get whole opernad
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})