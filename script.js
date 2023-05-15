function addList() {
  var input = document.getElementById("createList").value;
  var list = document.getElementById("createList");
  var selected = document.getElementById("selectedList").value;

  if (input == "") {
    alert("Please enter a value.")
  } else {
    var li = document.createElement("li");

    li.className = "list1Class";
    li.setAttribute("clickedList", input);
    li.addEventListener("click", addTask(selected))

    var removeButton = document.createElement("button");
    removeButton.setAttribute("type", "button");
    removeButton.textContent = "\u00D7";
    removeButton.className = "removeButton"
    
    var text = document.createTextNode(input);
  
    li.appendChild(text);
    li.appendChild(removeButton);

    var list = document.getElementById("list1");
    list.appendChild(li);
    
    document.getElementById("createList").value = "";

    removeButton.addEventListener("click", function() {
      this.parentNode.parentNode.removeChild(this.parentNode);
    });
  }
}

let taskList = [];

function addTask(list) {

  const filteredList = taskList.filter(task => task.list == list);
  var selectedList = document.getElementById("selectedList");


  var list = document.getElementById("list2");

  let taskListHTML = '';

  for (let i=0; i< filteredList.length; i++) {
    taskListHTML += `<li class="list2Class" list2Att="${selectedList.textContent}">${filteredList[i].task}<button type="button" class="removeButton" onclick="remove(${i})">×</button></li>`;
  }

  const taskListElem = document.getElementById("list2");
  taskListElem.innerHTML = taskListHTML;
}

function saveTask() {
  var selectedList = document.getElementById("selectedList");
  const input = document.getElementById("createTask").value;

  if(input == '') {
    alert("Please enter a value.")
  } else {
    taskList.push({list: selectedList.textContent, task: input});
    addTask(selectedList.textContent);
  }

  document.getElementById("createTask").value = '';
}

function remove(index) {
  var selectedList = document.getElementById("selectedList");

  taskList.splice(index, 1);
  const selected = selectedList.innerText;
  addTask(selected);
}

window.onload = function() {
  var selected = document.getElementById("selectedList");
  var list = document.getElementById("list1");
  

  list.addEventListener("click", (event) => {
    const clicked = event.target.getAttribute("clickedList");
    if (clicked) {
      selected.textContent = clicked;
      addTask(selected.textContent);
    };
  });
};






