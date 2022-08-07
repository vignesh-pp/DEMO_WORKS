
function mypass(){
    var x = document.getElementById("password");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");
    if(x.type === 'password'){
        x.type = "text";
        y.style.display = "visible";
        z.style.display = "hidden";

    }
    else{
        x.type = "password";
        y.style.display = "hidden";
        z.style.display = "visible";
    }
}
// function mypass(){
//     const togglepass = document.querySelector("#hide2");
//     const pass = document.querySelector("#password");
//     togglepass.addEventListener("click",function(){
//         const type = password.getAttribute("type") === "password"?"text":"password";
//         password.setAttribute("type",type);
//         this.classList.togglepass("fa fa-eye");
//     });
// }
function myforget(){
    alert("Change Password");
}
function login(){
    document.write("Successfully Login" +"<br>" +"email = "+ document.getElementById("email").value +" <br>" +
   "password = " + document.getElementById("password").value);
}
function sign(){
    alert("Enter New details");
}

function emailvalidate(){
    var email = document.getElementById("email").value;
    if(email.length==0){
        alert("please type something");
    }
    else if(email.length<8){
        alert("email has atleast 8 characters");
    }
    else if(email.search(/[@]/)==-1){
        alert("email has @gmail.com");
    }
    else{
        email.innerHTML = " ";
    }
}
function password(){
    var password = document.getElementById("password").value;
    if(password.length < 8){
        alert("password must be atleast 8 characters");
    }
    else if(password.search(/[0-9]/)==-1){
        alert("password must have atleast 1 number");
    }
    else if(password.search(/[a-z]/)==-1){
        alert("password must have atleast 1 lowercase");
    }
    else if(password.search(/[A-Z]/)==-1){
        alert("password must have atleast 1 Uppercase");
    }
    else if(password.searach(/[!|@|#|$|%|&|*]/)==-1){
        alert("password must have atleast 1 symbol");
    }
    else{
        password.innerHTML = " ";
    }
}