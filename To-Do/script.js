const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskContainer = document.getElementById("taskContainer");

addBtn.addEventListener("click", () => {
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.className = "task";

    let number = taskContainer.children.length + 1;
    let numDiv = document.createElement("div");
    numDiv.className = "numCircle";
    numDiv.textContent = number;

    let textSpan = document.createElement("span");
    textSpan.className = "taskText";
    textSpan.textContent = taskText;

    textSpan.addEventListener("click", () => {
        textSpan.classList.toggle("completed");
    });

    let del = document.createElement("button");
    del.textContent = "X";
    del.className = "deleteBtn";

    del.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        renumberCircles();
    });

    li.appendChild(numDiv);
    li.appendChild(textSpan);
    li.appendChild(del);

    taskContainer.appendChild(li);
    taskInput.value = "";
});

function renumberCircles() {
    let items = taskContainer.querySelectorAll(".task");

    items.forEach((li, index) => {
        li.querySelector(".numCircle").textContent = index + 1;
    });
}
