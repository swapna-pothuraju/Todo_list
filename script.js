document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            addTask(taskText);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });

    function addTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskItem.appendChild(taskSpan);

        const buttonGroup = document.createElement('div');
        buttonGroup.classList.add('button-group');

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Done';
        completeButton.classList.add('complete-button');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
        buttonGroup.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
        buttonGroup.appendChild(deleteButton);

        taskItem.appendChild(buttonGroup);
        taskList.appendChild(taskItem);
    }
});