window.onload = () => {

    const input = document.getElementById("text") as HTMLInputElement;
    const errorMessage = document.querySelector(".error-message") as HTMLSpanElement;

    input.addEventListener("keyup", function(event: KeyboardEvent): void {
        if (event.keyCode === 13) {
            event.preventDefault();
            if (input.value !== "") {
                addNewTask((document.getElementById("text") as HTMLInputElement).value);
                input.value = "";
            } else {
                showErrorInput()
            }
        }
    })

    function showErrorInput(): void {
        errorMessage.style.opacity= "1";
        setTimeout(() => {
            errorMessage.style.opacity = "0";
        }, 2000);
    }

    // @ts-ignore
    document.getElementById("new").addEventListener("click", function(): void {
        const task: string = (document.getElementById("text") as HTMLInputElement).value;
        if (task) {
            addNewTask(task);
            (document.getElementById("text") as HTMLInputElement).value = "";
        } else {
            showErrorInput();
        }

    });

    function removeItem(this: HTMLElement): void {
        const item: HTMLElement = this.parentNode!.parentNode as HTMLElement;
        const parent: HTMLElement = item.parentNode as HTMLElement;

        parent.removeChild(item);
    }

    function completeItem(this: HTMLElement): void {
        const item: HTMLElement = this.parentNode!.parentNode as HTMLElement;
        const parent: HTMLElement = item.parentNode as HTMLElement;
        const parentId: string = parent.id;

        const target: HTMLElement = (parentId === "todo") ? document.getElementById("ready") as HTMLElement : document.getElementById("todo") as HTMLElement;

        parent.removeChild(item);
        target.insertBefore(item, target.childNodes[0]);
    }

    function addNewTask(item: string): void {
        const list: HTMLElement = document.getElementById("todo") as HTMLElement;

        const newItem: HTMLElement = document.createElement("li");
        newItem.innerText = item;

        const buttons: HTMLElement = document.createElement("div");
        buttons.classList.add("buttons");

        const remove: HTMLButtonElement = document.createElement("button");
        remove.classList.add("remove");
        remove.innerHTML = `&#10008;`;
        remove.addEventListener("click", removeItem);

        const complete: HTMLButtonElement = document.createElement("button");
        complete.classList.add("complete");
        complete.innerHTML = "&#10004";
        complete.addEventListener("click", completeItem);

        buttons.appendChild(remove);
        buttons.appendChild(complete);
        newItem.appendChild(buttons);

        list.insertBefore(newItem, list.childNodes[0]);
    }

    const deleteIt: HTMLCollectionOf<Element> = document.getElementsByClassName("remove");
    for (let i: number = 0; i < deleteIt.length; i++) {
        (deleteIt[i] as HTMLElement).addEventListener("click", removeItem);
    }

    const changeIt: HTMLCollectionOf<Element> = document.getElementsByClassName("complete");
    for (let i: number = 0; i < changeIt.length; i++) {
        (changeIt[i] as HTMLElement).addEventListener("click", completeItem);
    }
}
