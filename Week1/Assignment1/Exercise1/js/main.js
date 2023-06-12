// Create delete button
let taskList = document.getElementsByTagName('li');
let i;
for (i = 0; i < taskList.length; i++) {
    // let span = document.createElement("span");
    let btn = document.createElement("button");
    btn.className = "btn_delete";
    btn.textContent = "X";
    // span.className = "delete";
    // span.appendChild(btn);
    taskList[i].appendChild(btn);
}

let deleteBtnList = document.getElementsByClassName("btn_delete");
for (let i = 0; i < deleteBtnList.length; i++) {
    deleteBtnList[i].onclick = function() {
        let el = this.parentElement;
        console.log(el.tagName);
        el.display.style = "none";
    }
}
