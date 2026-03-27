
let tasks = [];
let taskList = document.getElementById('taskList');


function addTask() {
    let taskInput = document.getElementById('taskInput');
    let task = taskInput.value.trim();

    if (task === '') return;

    let li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);

    tasks.push(task);
    taskInput.value = '';

    showBackButton(); 
}


function removeTask() {
    if (tasks.length === 0) return;

    taskList.removeChild(taskList.lastChild);

    tasks.pop();

    showBackButton(); 
}



back.addEventListener("click", () => {
    window.location.href = "index.html";
});
