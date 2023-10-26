document.querySelector("form").addEventListener("submit", myTodo);
let total=0
function myTodo() {
  event.preventDefault();
  var priority = document.querySelector("#priority").value;

  var taskObj = {
    taskName: document.querySelector("#task").value,
    priority: priority,
  };


  displayTable(taskObj);
  total++
  console.log(total)
  document.querySelector("#total-todos").innerText=total
}

function displayTable(taskObj) {

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    td1.innerText = taskObj.taskName;

    var td2 = document.createElement("td");
    td2.innerText = taskObj.priority;

    if (taskObj.priority == "High") {
      td2.style.backgroundColor = "red";
    } else {
      td2.style.backgroundColor = "green";
    }

    var td3 = document.createElement("td");
    td3.innerText = "Delete";
    
    td3.style.color = "red";
    tr.append(td1, td2, td3);
    document.querySelector("tbody").append(tr);
    td3.addEventListener("click", deleteRow);
}

function deleteRow() {
  event.target.parentNode.remove();
  total--
  console.log(total)
  document.querySelector("#total-todos").innerText=total

}