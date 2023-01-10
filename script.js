const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');

const phone = document.getElementById('phone');

const password = document.getElementById('password');
const conpass = document.getElementById('conPass');


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    validate();
})

const validate=()=>{
    let usernameVal = username.value.trim();
    let emailVal = email.value.trim();
 
 let phoneVal = phone.value.trim()
 
 let passwordVal = password.value.trim()
 let conpassVal = conpass.value.trim()

 if(usernameVal === ""){
    setErrors(username,"username can not be empty");

}else if(usernameVal.length <4){
    setErrors(username,"Username min 4 char")
}else{
    setSuccess(username)
}

if(emailVal === ""){
    setErrors(email,"email can not be empty");

}else if(!isEamil(emailVal)){
    setErrors(email,"Not a valid email")
}else{
    setSuccess(email)
}

if(phoneVal=== ""){
    setErrors(phone,"phone number can not be empty")
}
else if(phoneVal.length !==10){
    setErrors(phone,"Not a valid number")
}
else{
    setSuccess(phone)
}


if(passwordVal=== ""){
    setErrors(password,"password can not be empty")
}
else if(passwordVal.length <8){
    setErrors(password," min 8 characters")
}
else{
    setSuccess(password)
}

if(conpassVal===""){
    setErrors(conpass,"Empty field")
}
else if(passwordVal !== conpassVal){
    setErrors(conpass,"password not matched")
}
else{
    setSuccess(conpass)
}


}


const setErrors=(input,msg)=>{
    const formC=input.parentElement;
    const small=formC.querySelector('small')
    formC.className="formC error"
    small.innerHTML=msg;

}


const setSuccess=(input)=>{
    const formC=input.parentElement;
    formC.className="formC success"
}

const isEamil=(eval)=>{
    var symbol=eval.indexOf('@');

    if(symbol <1 ) return false;
    var dot= eval.lastIndexOf('.');
    if(dot<symbol ) return false
    if(dot === eval.length-1) return false
    return true
}
