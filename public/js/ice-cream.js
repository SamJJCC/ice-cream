document.getElementById("personal-info-form").onsubmit = () => {

    let isValid = true;

    // Clear all errors
    clearErrors();
    
    // Validate first name
    let name = document.getElementById("name").value.trim();
    if (name === "") {
        document.getElementById("err-name").style.display = "block";
        isValid = false;
    }

    let email=document.getElementById("email").value.trim();
    if (email === "") {
        document.getElementById("err-email").style.display = "block";
        isValid = false;
    }
    
    
   
let toppingsSelected=false;
let toppingsButtons=document.getElementsByName("toppings[]");
for(let i=0;i<toppingsButtons.length; i++){
    if(toppingsButtons[i].checked){
        toppingsSelected=true;
    }
}
if(!toppingsSelected){
    document.getElementById("err-toppings").style.display="block";
    isValid=false;
}




let methodSelected=false;
let methodButtons=document.getElementsByName("cone");
for(let i=0; i<methodButtons.length; i++){
    if(methodButtons[i].checked){
        methodSelected=true;
    }
   
}

if(!methodSelected){
    document.getElementById("err-method").style.display="block";
    isValid=false;
}

let size=document.getElementById("flavor").value;
if(size == "none"){
    document.getElementById("err-flavor").style.display="block";
    isValid=false;
}
    return isValid;
}
function clearErrors() {
    let errors = document.getElementsByClassName("err");
    for (let i=0; i<errors.length; i++) {
        errors[i].style.display = "none";
    }
}