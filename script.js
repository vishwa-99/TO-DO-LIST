document.getElementById('add-task-btn').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    // Mark task as complete
    taskItem.addEventListener('click', () => taskItem.classList.toggle('complete'));

    // Delete task
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => taskItem.remove());
    
    taskItem.appendChild(deleteBtn);
    document.getElementById('task-list').appendChild(taskItem);

    taskInput.value = '';
}
