function renderTodo() {
    ol.innerHTML = ''
    for (let i = 0; i < arr.length; i++) {
        ol.innerHTML += `
        <li> ${arr[i]}
        <button onclick="editTodo(${i})">edit</button>
        <button onclick="deleteTodo(${i})">delete</button>
        </li>
        `
    }
}

const todoInput = document.querySelector('#todo');
const ol = document.querySelector('ol');

const arr = [];

function getValue() {
    arr.push(todoInput.value);
    renderTodo()
    todoInput.value = ''
}

