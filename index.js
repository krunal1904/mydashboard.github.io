const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const signup = document.querySelector("#signup");

sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
});

function seterror(id, error) {
    element = document.getElementById(id);
    element.getElementsByClassName('error')[0].innerHTML = error;
}

function validateForm() {
    var returnval = true;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var username = document.forms['signup']['username'].value;
    var email = document.forms['signup']['email'].value;
    var passwordformat = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    var password = document.forms['signup']['password'].value;
    if (username.length < 5) {
        seterror("username", "*Length of username is short")
        returnval = false;
    }
    if (username.length == 0) {
        seterror("username", "*Length of username cannot be zero")
        returnval = false;
    }
    if (username.length >= 5) {
        seterror("username", "")
        returnval = false;
    }
    if (!mailformat.test(email)) {
        seterror("email", "*Enter valid email")
        returnval = false;
    }
    if (mailformat.test(email)) {
        seterror("email", "")
        returnval = false;
    }
    if (!passwordformat.test(password)) {
        seterror("password", "*Enter valid password")
        returnval = false;
    }
    if (passwordformat.test(password)) {
        seterror("password", "")
        returnval = false;
    }
    let user_records = new Array();
    user_records = JSON.parse(localStorage.getItem("users")) ? JSON.parse(localStorage.getItem("users")) : []
    if (user_records.some((v) => { return v.email == email })) {
        alert("duplicate data");
    }
    else {
        user_records.push({
            "username": username,
            "email": email,
            "password": password
        })
        localStorage.setItem("users", JSON.stringify(user_records));
        // localStorage.setItem("email", email)
        // localStorage.setItem("password", password)
        return returnval;
    }
}

function login(){
    var flag = false
    var username = document.forms['signin']['username'].value;
    var password = document.forms['signin']['password'].value;
    var data = JSON.parse(localStorage.getItem('users'));
    console.log(data)
    for(i=0;i<=data.length;i++){
        var db_username = data[i].username;
        var db_password = data[i].password;
        if(db_username == username && db_password == password){
            flag = true;
            console.log(flag);
            break;
        }
        else{
            flag = false
            console.log(flag)
        }
    }
    if(flag = true){
        
        window.open('home.html');
        // window.history.pushState(null, '', 'home.html');
    }
    else{
        alert("wrong credentials")
    }

}

