const toDoList = document.getElementById("toDoList");
const inputField = document.getElementById("inputField");
const plusIcon = document.querySelector("#inputField + span");

toDoList.addEventListener("click", doneTask);

function doneTask(event) {
  if (event.target.tagName === "LI") {
    event.target.classList.toggle("done");
  }
  if (event.target.classList.contains("delete")) {
    event.target.closest("li").remove();
  }
}

inputField.addEventListener("keydown", addTask);
plusIcon.addEventListener("click", addTask);

function addTask(event) {
  const createTask = text => {
    if (text === "") {
      inputField.classList.add("error");
      inputField.placeholder = "Поле не должно быть пустым!";
      setTimeout(() => {
        inputField.classList.remove("error");
        inputField.placeholder = "Добавьте новое дело";
      }, 1000);
    } else {
      const li = document.createElement("li");
      li.innerHTML = `${text} <div class="delete">X</div>`;
      toDoList.append(li);
    }
  };
  if (event.which === 13) {
    createTask(event.target.value);
    event.target.value = "";
  }
  if (event.which === 1 && event.target.tagName === "SPAN") {
    createTask(inputField.value);
    inputField.value = "";
  }
}
