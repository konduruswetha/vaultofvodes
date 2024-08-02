document.addEventListener('DOMContentLoaded', () => {
    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTodo();
    });

    function addTodo() {
        const todoText = todoInput.value.trim();
        if (todoText === '') return;

        const li = document.createElement('li');
        li.innerText = todoText;

        const completeBtn = document.createElement('button');
        completeBtn.innerText = 'Complete';
        completeBtn.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });

        li.appendChild(completeBtn);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);

        todoInput.value = '';
    }
});
