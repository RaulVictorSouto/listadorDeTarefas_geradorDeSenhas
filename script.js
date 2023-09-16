// Lista de Tarefas

const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Por favor, digite uma tarefa.');
        return;
    }
    
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <span>${taskText}</span>
        <div class="botoes">
            <button onclick="editTask(this.parentElement.parentElement)">Editar</button>
            <button onclick="deleteTask(this.parentElement.parentElement)" class="excluir">Excluir</button>
        </div>
    `;
    
    taskList.appendChild(listItem);
    taskInput.value = '';
}

function editTask(listItem) {
    const taskTextElement = listItem.querySelector('span');
    const newText = prompt('Editar tarefa:', taskTextElement.innerText);
    
    if (newText !== null) {
        taskTextElement.innerText = newText;
    }
}

function deleteTask(listItem) {
    taskList.removeChild(listItem);
}

