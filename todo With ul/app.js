const todoForm = document.querySelector('.todo-form');
const todoInput = document.querySelector('#todo-input');
const todoBtn = document.querySelector('#todo-btn');
const todoList = document.querySelector('#todo-list');

todoBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let todoText = todoInput.value.trim();
    let todoItem = document.createElement('li');
    todoItem.textContent = todoText;
    todoItem.innerHTML += "<button class='del-btn'>Delete</button>";
    todoItem.classList.add('todo-item');
    todoInput.value = "";
    todoList.appendChild(todoItem);
});

const delBtn = document.querySelector('.del-btn');

delBtn.addEventListener('click', () => {
    todoList.removeChild(todoItem);
})