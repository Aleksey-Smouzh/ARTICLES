const getResourse = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`error at the url ${url}, error ststus ${response}`);
  }
  return await response.json();
};
const data = getResourse(
  "https://61d496de8df81200178a8d99.mockapi.io/api/v1/user"
).then((data) => console.log(data));

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
  todoList = JSON.parse(localStorage.getItem("todo"));   // получать данные и з локал сторидж и преобразовывать в мосив 
  displayMessages();
}

addButton.addEventListener("click", function(){    //обработчик событий
  
  let newTodo = {       // мосив в который будет добавляться последннее сообщение
    todoData: addMessageDate.value,
    todoDeadline: addMessageDeadline.value,
    todoTitle: addMessageTitle.value,
    todoLoadText: addMessageLoadText.value,
    todoLoadFoto: addMessageLoadFoto.value,
    checked: false,
    important: false
  };

  todoList.push(newTodo);  //сюда добавляеть каждое новое дело
  displayMessages();
  localStorage.setItem("todo", JSON.stringify(todoList)); //  место хранения данных
 });


function displayMessages() {
  let displayMessage = "";     //перебирает обект и выводит на страницу в теге <li></li>
  if(todoList.length === 0) todo.innerHTML = ' ';
  todoList.forEach(function (item, i) {   //колбэк функция
    displayMessage += `
    <li>
    <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
    <label for='item_${i}' class="${item.important ? 'important' : ''}" >${
      item.todoData
    },&nbsp <br>
    ${item.todoDeadline},&nbsp 
    ${item.todoTitle},&nbsp 
    ${item.todoLoadText},&nbsp
    ${item.todoLoadFoto}</label>
    </li>
    `; // инторполяция
    todo.innerHTML = displayMessage;

    console.log(todoList, displayMessage);
  });
}
todo.addEventListener("change", function(event){
  let idInput = event.target.getAttribute("id");
  let forLabel = todo.querySelector('[for=' + idInput +']');
  let valueLabel = forLabel.innerHTML;
  

  todoList.forEach(function(item){
    if (item.todo === valueLabel){
      item.checked = !item.checked;
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
  });
});



 todo.addEventListener('contextmenu', function(event){
   event.preventDefault();
   todoList.forEach(function (item, i) {
     if (item.todo === event.target.innerHTML) {
       if (event.ctrlKey || event.metaKey) {
         todoList.splice(i, 1);
       } else {
         item.important = !item.important;
       }
       displayMessages();
       localStorage.setItem("todo", JSON.stringify(todoList));
     }
   });
 });
