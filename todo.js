function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    taskDiv.innerHTML = `
        <span>${taskText}</span>
        <div class="task-actions">
            <button class="edit-btn" onclick="editTask(this)">✏️</button>
            <button class="complete-btn" onclick="completeTask(this)">✔</button>
            <button class="delete-btn" onclick="deleteTask(this)">❌</button>
        </div>
    `;

    document.getElementById("taskList").appendChild(taskDiv);
    taskInput.value = "";

    updateProgress(); 
}

function editTask(button) {
    let taskDiv = button.parentElement.parentElement;
    let taskText = taskDiv.querySelector("span").innerText;
    let newText = prompt("Edit your task:", taskText);
    if (newText) taskDiv.querySelector("span").innerText = newText;
}

function completeTask(button) {
    let taskDiv = button.parentElement.parentElement;
    taskDiv.classList.add("completed", "celebrate");
    setTimeout(() => taskDiv.classList.remove("celebrate"), 1000);

    updateProgress(); 
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
    updateProgress(); 
}

/* progress bar */
function updateProgress() {
    let tasks = document.querySelectorAll(".task");
    let completedTasks = document.querySelectorAll(".completed");

    let totalTasks = tasks.length;
    let completedCount = completedTasks.length;

    let progressText = document.getElementById("progress-text");
    let progressFill = document.getElementById("progress-fill");

    let progressPercent = totalTasks === 0 ? 0 : Math.round((completedCount / totalTasks) * 100);
    
    progressFill.style.width = `${progressPercent}%`;
    progressFill.innerText = `${progressPercent}%`; // Show percentage inside the bar

    progressText.innerText = `${progressPercent}% completed`;
}


