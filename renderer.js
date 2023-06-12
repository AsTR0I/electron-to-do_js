

const DeletedItems = {} // словаррь для удалённых элементов


const todo_add = document.querySelector("span.todo_add")
let wrapper = document.querySelector(".wrapper")

let text_refresh = document.querySelector(".todo_text")
console.dir(document.querySelector("input.todo_text"))

let todo__items = document.querySelector(".todo__items")

todo_add.addEventListener('click',()=>{

    let text = document.querySelector("input.todo_text").value;

    // li
    let element = document.createElement("li");
    element.classList.add("item")
    // span
    let span = document.createElement("span");
    span.classList.add("delete");
    element.appendChild(span);
    // Set text content
    element.innerHTML = text;
    element.insertAdjacentElement('beforeend', span);
    todo__items.appendChild(element);
    document.querySelector("input.todo_text").value = " "; //Очищаем текст
    console.log(`после очистки: ${text}`);
    let liElements = todo__items.querySelectorAll("li");
    let liCount = liElements.length;
    console.log(`licount = ${liCount}`)
    element.id = `${liCount}`;
    span.id = `b${liCount}`


// добавляет для кнопки (которую находит по id) слушатель, который при нажатии удаляет нужный элемент из ul
// с помощью нахождения id кнопки и id элемента (у них одинаковые id, но у кнопки есть в начале буква "b")
    document.getElementById(`b${liCount}`).addEventListener('click',()=>{
        // запиывает в соварь обьект с именем liCount и описывает ключ: значение внутри обьекта
        DeletedItems[liCount] = {
        liId:`${liCount}`,
        deleteButtonId: `b${liCount}`,
        text: document.getElementById(liCount).textContent
    }
        let elemForDelete = document.getElementById(`${liCount}`);
        elemForDelete.parentNode.removeChild(elemForDelete);

        console.log(DeletedItems)
    })

})
// select 
const selectElement = document.querySelector('select');
const selectedValue = selectElement.value;
console.log(selectedValue);

selectElement.addEventListener('change', () => {
  const selectedValue = selectElement.value;
  console.log(selectedValue);
  
if (selectedValue === 'deleted') {
    // Скрыть все элементы
    const liElements = todo__items.querySelectorAll('li');
    liElements.forEach((liElement) => {
      liElement.style.display = 'none';
    });

           // Создать новые li элементы из словаря
    for (const key in DeletedItems) {
        const item = DeletedItems[key];
  
        const newLiElement = document.createElement('li'); // создаем li
        newLiElement.classList.add('item'); // присваиваем ему класс item
        newLiElement.id = item.liId; // присваиваем ему id liid
        newLiElement.id = 'delited';
        newLiElement.innerHTML = `${item.text}`; // закидываем текст
        todo__items.appendChild(newLiElement);
      }
  }else if (selectedValue === 'active') {
    // Показать все элементы
    let elements = document.querySelectorAll('li')
    elements.forEach((element) => {
      if (element.id !== 'delited') {
        element.style.display = 'flex';
      } else {
        element.style.display = 'none';
      }
    });
}
});