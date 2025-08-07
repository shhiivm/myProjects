let arr = [
  // {
  //   name:'watch movie',
  //   dueDate : '25-12-2025'
  // },
  // {
  //   name:'play games',
  //   dueDate : '20-12-2040'
  // }
];

const get_btn = document.querySelector("#btn");

const textValue = document.querySelector("#task");

const getDate = document.querySelector("#date");

get_btn.addEventListener("click", () => {
  addtodo();
});

function addtodo() {
  const name = textValue.value;
  const date = getDate.value;

  if (name === "") {
    alert("Enter Some task");
    return;
  }
  if (date === "") {
    alert("Enter date");
    return;
  }

  arr.push({
    name: name,
    dueDate: date,
  });
  console.log(arr);

  textValue.value = "";
  getDate.value = "";
  displayItems();
}

function displayItems() {
  let todoHtml = "";

  for (i = 0; i < arr.length; i++) {
    const todoObject = arr[i];
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `<div class = "add-task">
        ${name}
      </div>
      <div class = "add-date"> 
        ${dueDate}
      </div> 
      <button onclick = "
        arr.splice(${i},1);
        displayItems();
        "
        class= "delete-btn"
        > Delete</button>
        `;
    todoHtml += html;
  }
  // console.log(todoHtml);
  document.querySelector("#display-items").innerHTML = todoHtml;
}
