const form=document.getElementById("form");
const username=document.getElementById("username");
const age=document.getElementById("age");
const address=document.getElementById("address");
const martialstatus=document.getElementById("martialstatus");
const castvote=document.getElementById("castvote");

// show input error

function showError(input,message){
    const formControl =input.parentElement;
    formControl.className = 'form-control error';
    const small =formControl.querySelector('small');
    small.innerText=message;
}
// Show success outline
function showSuccess(input){
    const formControl =input.parentElement;
    formControl.className = 'form-control success';
}

// event Listeners
form.addEventListener('submit',function(a){
    a.preventDefault();
// username
    if (username.value== ''){
        showError(username,"Username is required");
    }
    else if(username.value.length<3){  
        showError(username,"Username must be at least 3 characters long.");
     } else {
        showSuccess(username);
    }
// age
    if (age.value== ''){
        showError(age,"age is required");
    }else if(age.value<=18){
        showError(age,"age should be greater than 18")
    }
    else {
        showSuccess(age);
    }
    if (address.value== ''){
        showError(address,"address is required");
    }
    else {
        showSuccess(address);
    }
//  
      
 

})
 