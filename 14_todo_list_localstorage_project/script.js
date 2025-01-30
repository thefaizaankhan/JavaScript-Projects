document.addEventListener('DOMContentLoaded', () => {

  const todoInput = document.getElementById('todo-input');
  const addTaskButton = document.getElementById('add-task-button');
  const todoList = document.getElementById('todo-list');
  
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => renderTask(task));
  
  addTaskButton.addEventListener('click', () => {
    const taskText = todoInput.value.trim()
    if(taskText === "") return;
  
    const newTask = {
      id: Date.now(), // generate random id
      text: taskText,
      completed: false,
    }
  
    tasks.push(newTask);
    saveTasks();
    renderTask(newTask); // to re-render the list (page refresh)
    todoInput.value = ""; // clear input
    console.log(tasks);
  });
  
  function renderTask(task){
    // console.log(task.text);
    const li = document.createElement('li')
    li.setAttribute('data-id', task.id)
    li.innerHTML = `
    <span>${task.text}</span>
    <button>Delete</button> 
    `;

    li.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      task.completed = !task.completed;
      li.classList.toggle("completed");
      saveTasks();
    });

    li.querySelector('button').addEventListener("click", (e) => {
      e.stopPropagation();  // stop event bubbling
      tasks = tasks.filter((t) => t.id !== task.id)
      li.remove();
      saveTasks();
    })
    todoList.appendChild(li);
  }
  
  function saveTasks(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

});