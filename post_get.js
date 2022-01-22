const getResourse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`error at the url ${url}, error ststus ${response}`);
  }
  return await response.json();
};
// const data = getResourse(
//   "https://61d496de8df81200178a8d99.mockapi.io/api/v1/user"
// ).then((data) => console.log(data));

let addMessageDate = document.querySelector("#date_of"),
  addMessageDeadline = document.querySelector("#deadline"),
  addMessageStatus = document.querySelector("#status"),
  addMessageTitle = document.querySelector("#title_articl"),
  addMessageLoadText = document.querySelector("#text"),
  addMessageLoadFoto = document.querySelector("#foto"),
  addButton = document.querySelector("#send"),
  todo = document.querySelector("#todo");

let todoList = [];

addButton.addEventListener("click", function () {
  let newTodo = {
    todoData: addMessageDate.value,
    todoDeadline: addMessageDeadline.value,
    todoTitle: addMessageTitle.value,
    todoLoadText: addMessageLoadText.value,
    todoLoadFoto: addMessageLoadFoto.value,
    checked: false,
  };

  todoList.push(newTodo);
  displayMessages();
  localStorage.setItem('todo', JSON.stringify(todoList));
});
function displayMessages() {
  let displayMessage = "";

  todoList.forEach(function(item, i) {
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? "checked" : ""}>
    <label for='item_${i}'>${item.todo}</label>
    </li>
    `;
    todo.innerHTML = displayMessage;

    console.log("newTodo: ", displayMessage);
  });
}
