
let tasksList = document.getElementById("dolist-list");
let allTasks = document.getElementById("js-all-tasks");
let doneTasks = document.getElementById("js-done-tasks");
let addNewTaskField = document.getElementById("dolist-task-new");
let addButton = document.getElementById('add-task');
class Task
{
    constructor(content)
    {
        this.id = doId();
        this.content = content;
        this.state = 'current';
    }
    taskDone(){
        this.state = 'done';
    }
    taskCurrent()
    {
        this.state = 'current';
    }
}
let task_3 =  new Task("Дело №3");
task_3.taskDone();
console.log(task_3.state);
let tasks = {
    current: [
        new Task("Дело №2"), new Task("Дело №1")
    ],
    done: [
        task_3,
    ],
    get allTasks() {
        return this.current.length + this.done.length;
    },
    get doneTasks() {
        return this.done.length;
    }
};
function doId() {
    return Math.random().toString(36).substr(2, 16);
}
function createItem(el) {

    let item = document.createElement('li'),
    remove = document.createElement('div'),
    text = document.createElement('span');
    remove.classList.add('dolist-task-remove');
    remove.addEventListener('click', function () {
        removeTask(this);
    });
    text.classList.add('dolist-text');
    text.addEventListener('click', function () {
        doneTask(this);
    });
    switch (el.state) 
    {
        case 'done':
            item.classList.add('dolist-task', 'dolist-task--done');
            break;
        default:
            item.classList.add('dolist-task');
    }
    item.id = el.id;
    text.innerHTML = el.content;
    item.appendChild(text);
    item.appendChild(remove);
    tasksList.appendChild(item);
};
function doneTask(el) {
    let elem = el.parentNode,
        elemId = elem.id,
        elemState = elem.classList.contains('dolist-task--done');
    const [itemsRemove, itemsAdd] = elemState ? [tasks.done, tasks.current] : [tasks.current, tasks.done];
    elem.classList.toggle('dolist-task--done');
    for (const [index, item] of itemsRemove.entries()) {
        if (item.id !== elemId) continue;
        itemsAdd.push(item);
        itemsRemove.splice(index, 1);
    }
    console.log(tasks.doneTasks);
    doneTasks.innerHTML = tasks.doneTasks;
}

function removeTask(el) {
    let removeEl = el.parentNode,
        removeElId = removeEl.id,
        removeElState = removeEl.classList.contains('dolist-task--done');

    removeEl.remove();
    const items = removeElState ? tasks.done : tasks.current;
    for (const [index, item] of items.entries()) {
        if (item.id !== removeElId) continue;
        items.splice(index, 1);
    }
    allTasks.innerHTML = tasks.allTasks;
    doneTasks.innerHTML = tasks.doneTasks;
}

function addTasks(str) {
    let elem = new Task(str);
    tasks.current.push(elem);
    createItem(elem);
    allTasks.innerHTML = tasks.allTasks;
}
addButton.addEventListener('click',function() {
     {
        let value = addNewTaskField.value;
        addTasks(value);
        addNewTaskField.value = "";
    }
})
function main() {
    for (let item of tasks.current) {
        createItem(item);
    }
    for (let item of tasks.done) {
        console.log(item);
        createItem(item);
    }
    allTasks.innerHTML = tasks.allTasks;
    doneTasks.innerHTML = tasks.doneTasks;
}
main();