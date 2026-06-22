const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

function addTask() {

    const taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please enter a task");
        return;
    }

    const task = {
        text: taskText,
        date: new Date().toLocaleString()
    };

    tasks.push(task);

    saveTasks();
    displayTasks();

    taskInput.value = "";
}

function displayTasks() {

    taskList.innerHTML = "";

    tasks.forEach((task,index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="task-info">
                <strong>${task.text}</strong>
                <span class="task-date">${task.date}</span>
            </div>

            <i class="fa-solid fa-trash delete-btn"
               onclick="deleteTask(${index})"></i>
        `;

        taskList.appendChild(li);
    });
}

function deleteTask(index){
    tasks.splice(index,1);
    saveTasks();
    displayTasks();
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}