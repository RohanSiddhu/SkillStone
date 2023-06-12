// Create delete button
let taskList = document.getElementsByTagName('li');
for (let i = 0; i < taskList.length; i++) {
    let btn = document.createElement("button");
    btn.className = "btn_delete";
    btn.textContent = "X";
    taskList[i].appendChild(btn);
}

// Delete button action: Hide list item.
let deleteBtnList = document.getElementsByClassName("btn_delete");
for (let element of deleteBtnList) {
    element.onclick = function() {
        let el = this.parentElement;
        el.style.display = "none";      // Hide the list element
    }
}
