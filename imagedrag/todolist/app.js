let taskTitle = document.getElementById('title')
let taskDesc = document.getElementById('description')
let taskDate = document.getElementById('date')

let addTask = document.getElementById('addBtn')

let taskState = document.getElementById('empty-state')
let list = document.getElementById('task-list')

let storageData = JSON.parse(localStorage.getItem('todo')) || []

function addData() {
    if (storageData.length > 0) {
        taskState.style.display = 'none'
    }
    else {
        taskState.style.display = 'block'
    }
    let data = storageData.map((i,index)=> {
        return `<li>
                    <div class="task">
                    <h3>${i.title}</h3>
                    <p>${i.description}</p>
                    <span>${new Date(i.date).toLocaleString()}</span>
                    <div class="icons">
                    <i class="fa-solid fa-pen-to-square edit-icon"
                       onclick="editTask(${index})"></i>

                    <i class="fa-solid fa-trash delete-icon"
                       onclick="deleteTask(${index})"></i>
                </div>
                    </div>

                    

                </li>`

    })
                list.innerHTML = data.join('')

}

addTask.addEventListener('click',()=>{
    let task = taskTitle.value.trim();
    let desc = taskDesc.value.trim();
    let date = taskDate.value.trim();

    if(task && desc && date){
        storageData.push({title:task, description:desc, date:date})
        localStorage.setItem('todo',JSON.stringify(storageData))
        taskTitle.value = ''
        taskDesc.value = ''
        taskDate.value = ''

        addData()
    }

})


addData()


function deleteTask(index) {
    storageData.splice(index, 1);

    localStorage.setItem('todo', JSON.stringify(storageData));

    addData();
}


function editTask(index) {

    let task = storageData[index];

    taskTitle.value = task.title;
    taskDesc.value = task.description;
    taskDate.value = task.date;

    storageData.splice(index, 1);

    localStorage.setItem('todo', JSON.stringify(storageData));

    addData();
}