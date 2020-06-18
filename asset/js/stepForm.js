// name check
var Uname = document.getElementById('name');
var nameNext = document.getElementById('name_next');
function checkName(){
    if(Uname.value.length < 1){
        
        nameNext.classList.add("dissabled");
    }else{
        nameNext.classList.remove("dissabled");
    }
};

// emil check
var Uemail = document.getElementById('email');
var emailMessage = document.getElementById('EmailError');
var emailNext = document.getElementById('email_next');
var mailformat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var mailformate2 = 'abcd@gmail.com';
function checkEmail(){
    if(Uemail.value.length < 1){
        emailNext.classList.remove("showEmailNext");
        
    }else{
        emailNext.classList.add("showEmailNext");
    }



    if(Uemail.value.match(mailformat))
    {
        emailMessage.innerHTML = '';
        emailNext.classList.remove("dissabled");
    }else
    {
        emailMessage.innerHTML = 'Error. Please enter email in correct format';
        emailNext.classList.add("dissabled");
    }
};


// phone check
var phoneError = document.getElementById('phoneError');
var PhoneNext = document.getElementById('phone_next');
var phone = document.getElementById('phone');
var regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
function phoneCheck(){
    if(phone.value.length < 5){
        PhoneNext.classList.remove("dissabled");
    }else{
        PhoneNext.classList.add("dissabled");
    }


    
    if(phone.value.match(regPhone))
    {
        phoneError.innerHTML = '';
        PhoneNext.classList.remove("dissabled");
    }else
    {
        phoneError.innerHTML = 'Error. Please enter 10 digit mobile no.';
        PhoneNext.classList.add("dissabled");
    }

};

  