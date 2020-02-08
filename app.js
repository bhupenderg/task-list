let addTaskVal = document.getElementById('task');
let addTaskBtn = document.querySelector('.btn');
//ul
let listItems = document.querySelector('.collection');

//delete items

let clearTaskBtn = document.querySelector('.clear-tasks');
let deleteItem = document.querySelector('.fa');

// ul elements

let clearItem = document.querySelector('.collection');


loadEventListeners();

function loadEventListeners(){
  addTaskBtn.addEventListener('click', addTask);
  clearTaskBtn.addEventListener('click', removeTasks);


  // removing single item
  clearItem.addEventListener('click', removeElement);

}

function addTask(e){
  e.preventDefault();
  
  let liElement = document.createElement('li');
  //listItems.appendChild(liElement);
  liElement.classList.add('collection-item');
  liElement.appendChild(document.createTextNode(addTaskVal.value));

  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  liElement.appendChild(link);
  listItems.appendChild(liElement);

  

}


function removeElement(e){
  if(e.target.classList.contains('fa')){
    e.target.parentElement.parentElement.remove();
  }
  
}

function removeTasks(e){

  //listItems.innerHTML = '';

  while(listItems.firstChild){
    listItems.removeChild(listItems.firstChild);
  }

  }
