document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {
  let title = document.getElementById('title').value;
  let description = document.getElementById('description').value;
  let edad = document.getElementById('edad').value;
  let numero = document.getElementById('numero').value;
  let raza = document.getElementById('raza').value;
  let genero = document.getElementById('genero').value;
  
  console.log(numero)

  let task = {
    title,
    edad,
    numero,
    raza,
    genero,
    description
  };

  if(localStorage.getItem('tasks') === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById('formTask').reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title)
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  for(let i = 0; i < tasks.length; i++) {
    if(tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  let tasksView = document.getElementById('tasks');
  tasksView.innerHTML = '';
  for(let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;
    let edad = tasks[i].edad;
    let numero = tasks[i].numero;
    let raza = tasks[i].raza;
    let genero = tasks[i].genero;

    tasksView.innerHTML += `<div class="card mb-3">
        <div class="card-body">
          <p>${title}<br>${edad}<br>${raza}<br>${genero}<br>${numero} <br> ${description}
          <a href="#" onclick="deleteTask('${title}')" class="btn btn-danger ml-5">Eliminar</a>
          </p>
        </div>
      </div>`;
  }
}

getTasks();
