let emailinput=document.getElementById('email');
let passwordinput=document.getElementById('pwd');
let button =document.getElementById('btn');

let msgDiv1=document.getElementById('message');
let msgDiv2=document.getElementById('error');
let okmsg=document.getElementById('ok');

emailinput.addEventListener('keypress',validate)
passwordinput.addEventListener('keypress', validate)



function validate(){
    let email=emailinput.value;
    let password=passwordinput.value;

    if(email !="" && email.includes("@")&&email.includes(".") && email.length>3){
            if(password!="" && password.length>=8){
           okmsg.innerText="All good to go !";
           }
    }
    else{
      //msgDiv1.innerText="something wrong"
    }
}


/// alert work
function one(){
   if (confirm("Press to submit!")) {
       alert(" successful signup!");
    }else{
     location.reload();
  }
  
  }
  

  //// body reload
  