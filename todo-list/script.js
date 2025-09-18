const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <button class="delete">X</button>
  `;
  taskList.appendChild(li);
  taskInput.value = "";
}

function handleTask(e) {
  if (e.target.tagName === 'SPAN') {
    e.target.parentElement.classList.toggle('done');
  } else if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
}
