const HIDDEN_CLASSNAME = "hidden";
const  USERNAME_KEY = "username";

let loginForm = document.querySelector("#login-form");
let loginInput = document.querySelector("#login-form input");
let greeting = document.querySelector("#greeting");
let todo = document.querySelector("#todo-form");
let  clockContainer = document.querySelector("#clockContainer");

let paintGreetings = (_username)=>{
    greeting.innerText = `Hello, ${_username}`; //"Hello, " + _username;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clockContainer.classList.remove(HIDDEN_CLASSNAME);
    clockContainer.setAttribute("display", "inline-block");
    todo.classList.remove(HIDDEN_CLASSNAME);
}

let onLoginSubmit = (_event)=>{
    _event.preventDefault();

    let username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    loginForm.classList.add(HIDDEN_CLASSNAME);

    paintGreetings(username);
}


let savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    paintGreetings(savedUsername);
}
 