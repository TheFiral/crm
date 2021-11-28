const button = document.querySelector(".create-section"),
    wrapper = document.querySelector(".create-new-section"),
    createTask = document.querySelectorAll(".create-new-task")


button.addEventListener("click", () => {
    const newSection = document.createElement('div');
    newSection.innerHTML = "<h3>новый раздел</h3>" +
        "<button class=\"create-new-task\">создать новую задачу</button>";
    newSection.classList.add("task-list-wrapper");
    wrapper.before(newSection);
    newSection.function = addNewTask(newSection)
    })

    createTask.forEach((task) => task.addEventListener("click", () => {
        const parent = task.parentNode,
            child = document.createElement('div');

        child.innerHTML = "<h3>новая задача</h3>"
        parent.appendChild(child)
    }))

function addNewTask(element){
    element.addEventListener("click", () => {
        const child = document.createElement('div');
        child.innerHTML = "<h3>новая задача</h3>"
        element.appendChild(child)
    })
}