const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector("#todo-input");
const todoBtn = document.querySelector("#todo-btn");
const todoList = document.querySelector("#todo-list");


//when click the add button it gonna add the task that you write into the input box
todoBtn.addEventListener("click", (e) => {
    //to prevent browser default behaviour, and so allowing our todo btn functionality to be able to work
  e.preventDefault();
  let todoText = todoInput.value.trim(); //make sure the task doesn't have any space or tap;
  if (todoText !== "") {
    let todoItem = document.createElement("li"); //after pressing add btn it will create a <li>, obviously to create a task 
    todoItem.textContent = todoText; // text from input is added to the li 
    todoItem.innerHTML += "<button class='del-btn'>Delete</button>"; // while creating the task it will also create a delete button using <button>
    todoItem.classList.add("todo-item"); //the task which is in <li> will have a class named "todo-time" now
    todoInput.value = ""; //after creating a task is done, we will make sure that there is no text in the input box
    todoList.appendChild(todoItem); // the creation we just done is added to the <ul> element and so we will see the result on our screen.

    // for deleting task
    const delBtn = todoItem.querySelector(".del-btn");

    delBtn.addEventListener("click", (e) => {
        const todoItemToRemove = e.target.parentNode; //items to be remove are marked as target which is parent node
      todoList.removeChild(todoItemToRemove); // and now removing the parent node
    });
  } else {
    alert("Please add a task");
  }
});

// basic todo app done!