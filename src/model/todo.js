"use strict";
window.onload = () => {
    const input = document.getElementById("text");
    const errorMessage = document.querySelector(".error-message");
    input.addEventListener("keyup", function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (input.value !== "") {
                addNewTask(document.getElementById("text").value);
                input.value = "";
            }
            else {
                showErrorInput();
            }
        }
    });
    function showErrorInput() {
        errorMessage.style.opacity = "1";
        setTimeout(() => {
            errorMessage.style.opacity = "0";
        }, 2000);
    }
    // @ts-ignore
    document.getElementById("new").addEventListener("click", function () {
        const task = document.getElementById("text").value;
        if (task) {
            addNewTask(task);
            document.getElementById("text").value = "";
        }
        else {
            showErrorInput();
        }
    });
    function removeItem() {
        const item = this.parentNode.parentNode;
        const parent = item.parentNode;
        parent.removeChild(item);
    }
    function completeItem() {
        const item = this.parentNode.parentNode;
        const parent = item.parentNode;
        const parentId = parent.id;
        const target = (parentId === "todo") ? document.getElementById("ready") : document.getElementById("todo");
        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    }
    function addNewTask(item) {
        const list = document.getElementById("todo");
        const newItem = document.createElement("li");
        newItem.innerText = item;
        const buttons = document.createElement("div");
        buttons.classList.add("buttons");
        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = `&#10008;`;
        remove.addEventListener("click", removeItem);
        const complete = document.createElement("button");
        complete.classList.add("complete");
        complete.innerHTML = "&#10004";
        complete.addEventListener("click", completeItem);
        buttons.appendChild(remove);
        buttons.appendChild(complete);
        newItem.appendChild(buttons);
        list.insertBefore(newItem, list.childNodes[0]);
    }
    const deleteIt = document.getElementsByClassName("remove");
    for (let i = 0; i < deleteIt.length; i++) {
        deleteIt[i].addEventListener("click", removeItem);
    }
    const changeIt = document.getElementsByClassName("complete");
    for (let i = 0; i < changeIt.length; i++) {
        changeIt[i].addEventListener("click", completeItem);
    }
};
