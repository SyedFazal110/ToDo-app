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

