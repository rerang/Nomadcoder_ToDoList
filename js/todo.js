let todoForm = document.getElementById("todo-form");
let todoInput = document.querySelector("#todo-form input");
let todoList = document.getElementById("todo-list");

let todoArr_Key = "todoArr";
let todoArr = [];

let deleteTodo = (_event)=>{
    let li = _event.target.parentElement;
    let liId = Number(li.id);
    todoArr =todoArr.filter((_ele_todo)=>_ele_todo.id !== liId);
    saveTodo();
    li.remove();
}

let saveTodo = ()=>{
    localStorage.setItem(todoArr_Key, JSON.stringify(todoArr));
}

let paintTodo = (newTodoObj)=>{
    let newLi = document.createElement("li");
    newLi.id=newTodoObj.id;
    let newSpan = document.createElement("span");
    newSpan.innerText = newTodoObj.text;
    let newButton = document.createElement("button");
    newButton.innerText = "✔";
    newButton.setAttribute("style", "margin: 0 5px 5px 5px;");

    newButton.addEventListener("click",  deleteTodo);
    
    newLi.append(newButton);
    newLi.append(newSpan);
    
    todoList.appendChild(newLi);
}

let handleTodoSubmit = (_event)=>{
    _event.preventDefault();

    let newTodo = todoInput.value;
    todoInput.value="";

    let newTodoObj = {text : newTodo, id : Date.now()};
    todoArr.push(newTodoObj);

    paintTodo(newTodoObj);
    saveTodo();
}

todoForm.addEventListener("submit", handleTodoSubmit);

let savedTodoArr = localStorage.getItem(todoArr_Key);
let parsedTodoArr = JSON.parse(savedTodoArr);
if(savedTodoArr !== null){
    todoArr = parsedTodoArr;
    parsedTodoArr.forEach(paintTodo);
}
