// ==========================
// TO-DO LIST ARRAY
// ==========================

let tasks = [];

// ==========================
// SELECT ELEMENTS
// ==========================

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");

// ==========================
// EVENT LISTENERS
// ==========================

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){
        addTask();
    }

});

// ==========================
// ADD TASK
// ==========================

function addTask(){

    const text = taskInput.value.trim();

    if(text === ""){
        alert("Please enter a task.");
        return;
    }

    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);

    taskInput.value = "";

    renderTasks();

}

// ==========================
// DISPLAY TASKS
// ==========================

function renderTasks(){

    taskList.innerHTML = "";

    let completedCount = 0;

    if(tasks.length === 0){

        taskList.innerHTML =
        `<p class="empty">No tasks added yet.</p>`;

        stats.textContent = "Completed: 0 / 0";

        return;

    }

    tasks.forEach(function(task){

        if(task.completed){
            completedCount++;
        }

        const li = document.createElement("li");

        // LEFT SIDE
        const left = document.createElement("div");
        left.className = "left";

        const taskText = document.createElement("span");
        taskText.textContent = task.text;

        if(task.completed){
            taskText.classList.add("completed");
        }

        const status = document.createElement("span");
        status.classList.add("status");

        if(task.completed){

            status.textContent = "✅ Completed";
            status.classList.add("done");

        }else{

            status.textContent = "⏳ Pending";
            status.classList.add("pending");

        }

        left.appendChild(taskText);
        left.appendChild(status);

        // COMPLETE BUTTON
        const completeBtn = document.createElement("button");

        completeBtn.textContent = task.completed
            ? "Undo"
            : "Complete";

        completeBtn.addEventListener("click", function(){

            task.completed = !task.completed;

            renderTasks();

        });

        // DELETE BUTTON
        const deleteBtn = document.createElement("button");

        deleteBtn.textContent = "Delete";

        deleteBtn.className = "delete";

        deleteBtn.addEventListener("click", function(){

            tasks = tasks.filter(function(item){

                return item.id !== task.id;

            });

            renderTasks();

        });

        const right = document.createElement("div");

        right.appendChild(completeBtn);
        right.appendChild(deleteBtn);

        li.appendChild(left);
        li.appendChild(right);

        taskList.appendChild(li);

    });

    stats.textContent =
        `Completed: ${completedCount} / ${tasks.length}`;

    console.log(tasks);

}

// ==========================
// INITIAL LOAD
// ==========================

renderTasks();