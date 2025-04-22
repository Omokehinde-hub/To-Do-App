document.addEventListener('DOMContentLoaded', function() {
    // Load tasks from localStorage
    loadTasks();
    
    // Add task when button is clicked
    document.getElementById('add-button').addEventListener('click', addTask);
    
    // Add task when Enter key is pressed
    document.getElementById('task-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function addTask() {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;
    
    // Create a new task object
    const task = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    // Add to DOM
    addTaskToDOM(task);
    
    // Save to localStorage
    saveTask(task);
    
    // Clear input
    taskInput.value = '';
}

function addTaskToDOM(task) {
    const taskList = document.getElementById('task-list');
    
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);
    li.className = 'task-item';
    
    const taskTextSpan = document.createElement('span');
    taskTextSpan.className = 'task-text' + (task.completed ? ' completed' : '');
    taskTextSpan.textContent = task.text;
    
    // Toggle completed status when clicked
    taskTextSpan.addEventListener('click', function() {
        toggleTaskStatus(task.id);
        taskTextSpan.classList.toggle('completed');
    });
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', function() {
        deleteTask(task.id);
        li.remove();
    });
    
    li.appendChild(taskTextSpan);
    li.appendChild(deleteBtn);
    
    taskList.appendChild(li);
}

function saveTask(task) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task));
}

function toggleTaskStatus(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = !tasks[taskIndex].completed;
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function deleteTask(taskId) {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    
    tasks = tasks.filter(task => task.id !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
