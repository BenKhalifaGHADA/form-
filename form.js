let name = document.getElementById('nom');
let address=document.getElementById('address');
let email=document.getElementById('email');
let password=document.getElementById('password');
let comment=document.getElementById('comment'); 
let btn=document.getElementById('formcontact')


function validate(event){
    event.preventDefault();
    if( name.value == "" ) {
        alert( "Please provide your name!" );
        return false;
            }
    if(address.value ==""){
        alert( "Please provide your adress!" );
        return false;
     }

     var emailID = email.value;
     atpos = emailID.indexOf("@");
     dotpos = emailID.lastIndexOf(".");
     
     if ((atpos < 1 || ( dotpos - atpos < 2 ))&&(emailID=="")) 
     {
        alert("Please enter correct your email");
        return false;
     }
     
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!(password.value.match(decimal))&&( password.value.length != 8 )) 
    { 
        alert('Wrong password, try another...');
        return false;
    }
         
    return true;
     
    }
    btn.addEventListener('submit',()=>{
    if(validate(event)){
        alert('Good job! Contact is added');
    }
    });
