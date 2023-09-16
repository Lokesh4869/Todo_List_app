const openbtn = document.getElementById('openDialog');
const opendialog = document.getElementById('taskDialog');
const closeDialog = document.getElementById('closeDialog');
const addTaskInput = document.getElementById('saveTask');
const showList = document.getElementById('todo')
openbtn.addEventListener('click', ()=> {
    opendialog.style.display = 'block';
});

closeDialog.addEventListener('click', ()=> {
    opendialog.style.display = 'none';
});
addTaskInput.addEventListener('click', () => {
   getValueCreateElement();
});
function getValueCreateElement() {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const taskDate = document.getElementById('taskDate').value;
    //creating element for html 
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.innerHTML = `
      <h3>${taskTitle}</h3>
      <p>${taskDescription}</p>
      <p>Date : ${taskDate}</p>
    `;
    const taskListContainer = document.querySelector('.todo-list');
    taskListContainer.append(taskElement);
    showList.style.display = 'block';
}
