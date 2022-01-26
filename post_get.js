// const getResourse = async (url) => {
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`error at the url ${url}, error ststus ${response}`);
//   }
//   return await response.json();
// };
// const data = getResourse(
//   "https://61d496de8df81200178a8d99.mockapi.io/api/v1/user"
// ).then((data) => console.log(data));

let addMessageDate = document.querySelector("#date_of"), // получение элементов
  addMessageDeadline = document.querySelector("#deadline"),
  addMessageStatus = document.querySelector("#status"),
  addMessageTitle = document.querySelector("#title_articl"),
  addMessageLoadText = document.querySelector("#text"),
  addMessageLoadFoto = document.querySelector("#foto"),
  addButton = document.querySelector("#send"),
  todo = document.querySelector("#todo");

let todoList = [];

if (localStorage.getItem("todo")) {
  todoList = JSON.parse(localStorage.getItem("todo")); // получать данные и з локал сторидж и преобразовывать в мосив
  displayMessages();
}

addButton.addEventListener("click", function () {
  //обработчик событий

  let newTodo = {
    // мосив в который будет добавляться последннее сообщение
    todoData: addMessageDate.value,
    todoDeadline: addMessageDeadline.value,
    todoTitle: addMessageTitle.value,
    todoLoadText: addMessageLoadText.value,
    todoLoadFoto: addMessageLoadFoto.value,
    // checked: false,
    // important: false,
  };

  todoList.push(newTodo); //сюда добавляеть каждое новое дело
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList)); //  место хранения данных
});

function displayMessages() {
  let displayMessage = ""; //перебирает обект и выводит на страницу в теге <li></li>
  if (todoList.length === 0) todo.innerHTML = " ";
  todoList.forEach(function (item, i) {
    //колбэк функция
    displayMessage += `
    <li>
    <div id='item_${i}' ></div>
    <label for='item_${i}' class='${item.important ? "important" : ""}' >
    ${item.todoData},&nbsp <br>
    ${item.todoDeadline},&nbsp 
    ${item.todoTitle},&nbsp 
    <br>${item.todoLoadText},&nbsp
    <br>${item.todoLoadFoto}</label>
    </li>
    `; // инторполяция
    todo.innerHTML = displayMessage;

    console.log(todoList, displayMessage);
  });
}

todo.addEventListener("change", function (event) {
  let idInput = event.target.getAttribute("id");
  console.log(idInput);
  let forLabel = todo.querySelector("[for = " + idInput + "]");
  console.log("forLabel:", forLabel);
  let valueLabel = forLabel.innerHTML;
  console.log("valueLabel:", valueLabel);

  // todoList.forEach(function (item) {
  //   console.log("item", todoList);
  //   if (item.todo === valueLabel) { // не работает
  //     item.checked = !item.checked;  // не работает
  //     localStorage.setItem('todo', JSON.stringify(todoList)) // НЕ РАБОТАЕТ НЕ ЗАПИСЫВАЕТ В ЛОКАЛЬНОЕ ХРАНИЛИЩЕ!!!!!
  //   }

  // });
});

// let del = document.getElementsByTagName("li");
// for (i = 0; i < del.length; i++) {
//   let span = document.createElement("span");
//   span.className = "close";
//   let close = document.createTextNode("\u00D7");
//   span.appendChild(close);
//   del[i].appendChild(span);
// }

// let dele = document.getElementsByTagName("close");
// let d;
// for (d = 0; d < dele.length; d++) {
//   dele[d].onclick = function () {
//     let div = this.parentElement;
//     div.style.display = "none";

//   };
// }

// todo.addEventListener("change", function (event) {
//   console.log(todo.addEventListener);
//   console.log(todo);
//   let idInput = document.getAttribute('id')                //getElementsByTagName("li");
// console.log(idInput);

// });

// event.target инициализация событий //getAttribute() возвращает значение указанного атрибута элемента.
//   let forLabel = todo.querySelector("[for=" + idInput + "]");
//   let valueLabel = forLabel.innerHTML;

//   todoList.forEach(function (item) {
//     if (item.todo === valueLabel) {
//       item.checked = !item.checked;
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   });
// });

// todo.addEventListener("contextmenu", function (event) {
//   console.log(todo.addEventListener);
//   console.log(todo);
//   event.preventDefault();
//   todoList.forEach(function (item, i) {
//     if (item.todo === event.target.innerHTML) {
//       if (event.ctrlKey || event.metaKey) {
//         todoList.splice(i, 1);
//       } else {
//         item.important = !item.important;
//       }
//       displayMessages();
//       localStorage.setItem("todo", JSON.stringify(todoList));
//     }
//   });
// });
