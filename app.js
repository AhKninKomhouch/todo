let tasks = {
    myday: ["My Day"],
    important: ["Important"],
    planned: ["Planned"],
    assigned: ["Assiged to me"],
    task: ["Task"],
  };
  function display(view) {
    currentView = view;
    document.getElementById("show").innerText =
      view.charAt(0).toUpperCase() + view.slice(1);
    displayTasks();
  }
  let currentView = "myday";
  function additem() {
    const input = document.getElementById("task-input");
    const taskText = input.value.trim();
    if (taskText) {
      tasks[currentView].push(taskText);
      input.value = "";
      displayTasks();
    }
  }
  
  function displayTasks() {
    const taskContainer = document.getElementById("task-list");
    taskContainer.innerHTML = "";
    tasks[currentView].forEach((task, index) => {
      const taskDiv = document.createElement("div");
      taskDiv.innerHTML = `
               <span class="task-name">${task}</span>
              <button onclick="deleteTask('${currentView}', ${index})">Delete</button>
            `;
      taskContainer.appendChild(taskDiv);
    });
  }
  function deleteTask(view, index) {
    tasks[view].splice(index, 1);
    displayTasks();
  }
  