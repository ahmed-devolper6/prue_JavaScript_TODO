let tasks = [
    {
        "title":"read book",
        "is_complated": false,
    },
    {
        "title":"vist i doctor",
        "is_complated": false,
    },
]

function FillTasksPage(){
    
    document.getElementById("UlTodO").innerHTML = "";
    document.getElementById("active").innerHTML = "";
    for(i = 0; i < tasks.length; i++){
        if (tasks[i].is_complated){
            
            let li = `            
            <li class="list-item">
                <span class="left-side">
                <button class="btn btn-check btn-check-active">
                    <i class="fas fa-check fa-check-active"></i>
                </button>
                <span class="text">${tasks[i].title}</span>
                <textarea cols="25" rows="3" class="li-text-edit"></textarea>
                </span>
                <span class="right-side">
                <button class="btn btn-edit">
                    <i class="fas fa-pen"></i>
                </button>
                <button onclick = "DeleteTask(${i})" class="btn btn-remove">
                    <i class="fas fa-times"></i>
                </button>
                </span>
            </li>
            `
        document.getElementById("active").innerHTML += li;

        }else{
            console.log('infor')
            let li = `            
            <li class="list-item">
                <span class="left-side">
                <button class="btn btn-check onclick = "iscomplated(${i})" btn-check-active">
                    <i class="fas fa-check  fa-check-active"></i>
                </button>
                <span class="text">${tasks[i].title}</span>
                <textarea cols="25" rows="3" class="li-text-edit"></textarea>
                </span>
                <span class="right-side">
                <button onclick = "edit_task(${i})" class="btn btn-edit">
                    <i class="fas fa-pen"></i>
                </button>
                <button onclick = "DeleteTask(${i})" class="btn btn-remove">
                    <i class="fas fa-times"></i>
                </button>
                </span>
            </li>
            `
        document.getElementById("UlTodO").innerHTML += li;
            
        }


    }


}
FillTasksPage()
// add tasks 
document.getElementById("todo").addEventListener("submit", function(event) {
    event.preventDefault();
    let task = document.querySelector("#task").value
    if (task){
        let TaskObj = {
            "title": task,
            "is_complated":false
        }
    tasks.push(TaskObj)
    FillTasksPage()
    }else{
        alert("plesse type task")
    }

})
// remove task
function DeleteTask(id){
    tasks.splice(id,1)
    FillTasksPage()
}
function iscomplated(id){
    tasks[id].is_complated = true;
    FillTasksPage()
}
// delete all the object
function clearall(){
    for(i in tasks){
        tasks.splice(i)
    }
    FillTasksPage()
}
// edit task 
function edit_task(id){
    console.log(tasks[id].title)
    newvalue = prompt(`edit th  is task ${tasks[id].title}`)
    tasks[id].title = newvalue
    FillTasksPage()
}
// fliters 
function FillTasksPagefliters() {
    let filterInput = document.getElementById("filter");
    let filterValue = filterInput.value;
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(filterValue.toLowerCase())
    );
  
    document.getElementById("UlTodO").innerHTML = "";
    document.getElementById("active").innerHTML = "";
    for (let i = 0; i < filteredTasks.length; i++) {
      if (filteredTasks[i].is_complated) {
        let li = `
              <li class="list-item">
                  <span class="left-side">
                  <button class="btn btn-check btn-check-active">
                      <i class="fas fa-check fa-check-active"></i>
                  </button>
                  <span class="text">${filteredTasks[i].title}</span>
                  <textarea cols="25" rows="3" class="li-text-edit"></textarea>
                  </span>
                  <span class="right-side">
                  <button class="btn btn-edit">
                      <i class="fas fa-pen"></i>
                  </button>
                  <button onclick = "DeleteTask(${i})" class="btn btn-remove">
                      <i class="fas fa-times"></i>
                  </button>
                  </span>
              </li>
              `;
        document.getElementById("active").innerHTML += li;
      } else {
        console.log("infor");
        let li = `
              <li class="list-item">
                  <span class="left-side">
                  <button class="btn btn-check onclick="iscomplated(${i})" btn-check-active">
                      <i class="fas fa-check fa-check-active"></i>
                  </button>
                  <span class="text">${filteredTasks[i].title}</span>
                  <textarea cols="25" rows="3" class="li-text-edit"></textarea>
                  </span>
                  <span class="right-side">
                  <button onclick="edit_task(${i})" class="btn btn-edit">
                      <i class="fas fa-pen"></i>
                  </button>
                  <button onclick="DeleteTask(${i})" class="btn btn-remove">
                      <i class="fas fa-times"></i>
                  </button>
                  </span>
              </li>
              `;
        document.getElementById("UlTodO").innerHTML += li;
      }
    }
  }

  