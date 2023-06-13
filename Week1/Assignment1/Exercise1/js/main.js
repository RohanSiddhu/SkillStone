// Create delete button
let taskList = document.getElementsByTagName('li');
for (let i = 0; i < taskList.length; i++) {
    let btn = document.createElement("button");
    btn.className = "btn_delete";
    btn.textContent = "X";
    taskList[i].appendChild(btn);
}

function onDelete() {
    let el = this.parentElement;
    el.classList.add("deleted");
    el.style.display = "none";
}

// Delete button action: Hide list item.
let deleteBtnList = document.getElementsByClassName("btn_delete");
for (let element of deleteBtnList) {
    element.onclick = onDelete;
}

// Strike when clicked on the list item.
let list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle("checked");
    }
}, false);

function addNewTask() {
    // Create li element.
    let taskInput = document.getElementById("task_input");
    if (taskInput.value !== '') {
        let ulList = document.getElementById("task_list");
        let li = document.createElement("li");

        li.textContent = taskInput.value;
        ulList.appendChild(li);

        // Add delete button
        let btn = document.createElement("button");
        btn.className = "btn_delete";
        btn.textContent = "X";
        li.appendChild(btn);

        // Add delete button action
        btn.onclick = onDelete;
    }
}

function searchTask() {
    let input = document.getElementById("search_input");
    let inputValue = input.value.toLowerCase();
    let li = document.getElementsByTagName('li');

    for (const element of li) {
        let text = element.textContent;
        if (text.toLowerCase().indexOf(inputValue) > -1) {
            if (!element.classList.contains("deleted"))
                element.style.display = "";
        } else {
            element.style.display = "none";
        }
    }
}
