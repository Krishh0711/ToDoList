

//Task-count
var counter = 0;
var taskRemainingCounter = document.getElementById("task-calculator");

//Adding checked when task completed
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
      if(ev.target.classList.value==''){
         counter--;
      }else{
          counter++;
      }
    ev.target.classList.toggle('checked');
    taskRemainingCounter.innerText=counter + " task remaining";
  }
}, false);

function addElement() {
  var newList = document.createElement("li");
  var newTask = document.getElementById("myInput").value;
  var textValue = document.createTextNode(newTask);
  newList.appendChild(textValue);

  if (newTask === '') {
    alert("No Task Entered");
  } else {
    document.getElementById("task-list").appendChild(newList);
    counter++;
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close-button";
  span.appendChild(txt);
  newList.appendChild(span); 
 
  var deleteTask = document.getElementsByClassName("close-button");

  taskRemainingCounter.innerText = counter+" task remaining";
  

  //removing task when close button is clicked
  for (i = 0; i < deleteTask.length; i++) {
    deleteTask[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
      if(div.className==''){
        counter--;
      } 
      taskRemainingCounter.innerText = counter+" task remaining";
    }
  }
}