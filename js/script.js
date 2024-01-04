// script.js

document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const addButton = document.querySelector('button');

    addButton.addEventListener('click', addTask);

    function addTask() {
        if (taskInput.value.trim() !== '') {
            const taskItem = document.createElement('li');
            taskItem.innerText = taskInput.value;
            taskList.appendChild(taskItem);

            taskItem.addEventListener('click', function() {
                this.remove();
            });

            taskInput.value = ''; // Mengosongkan input setelah menambahkan tugas
        }
    }
});
