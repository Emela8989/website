
//темная тема для элемента li
function darkLi(){
    const listItems = document.querySelectorAll('#books li');
    listItems.forEach(element => {
        element.style.backgroundColor = '#333';      // Темный фон плашки
        element.style.color = 'white';               // Белый текст
        element.style.border = '2px solid #555';     // Серая рамка
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.backgroundColor = '#444';      // Темно-серый фон кнопок
        element.style.color = '#fff';                // Белый текст (чтобы было видно на черном)
        element.style.border = '2px solid #666';     // Светлая рамка для выделения
        element.style.boxShadow = '0 4px 6px rgba(0,0,0,0.5)'; // Черная тень
    });
}

//светлая тема для элемента li
function lightLi(){
    const listItems = document.querySelectorAll('#books li');
    listItems.forEach(element => {
        element.style.backgroundColor = '#ffffff';
        element.style.color = '#5b4636';
        element.style.border = '2px solid #d3c4b1';
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.backgroundColor = '#f0e6d2';  // Светло-бежевый фон (лучше, чем просто серый)
        element.style.color = '#5b4636';            // Темно-коричневый текст
        element.style.border = '2px solid #d3c4b1'; // Рамка в тон инпутам
        element.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    })
}

//цветная тема для элемента li
function radLi(){
    const listItems = document.querySelectorAll('#books li');
    listItems.forEach(element => {
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        element.style.color = '#333';
        element.style.border = '2px solid #f093fb'; // Розовая рамка
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
         element.style.backgroundColor = '#ffffff'; // Белые кнопки
        element.style.color = '#333'; // Темный текст
        element.style.border = '2px solid #a1c4fd';
    })
}

let color_theme = "dark";
//функция для создания группы: поле и подпись снизу
function createInput(id, labelText){
    const group = document.createElement('div');
    group.className = 'input-group';
    
    const input = document.createElement('input');
    input.id = id;

    const label = document.createElement('label');
    label.textContent = labelText;

    group.append(input);
    group.append(label);

    return group;
}
const form = document.querySelector('#form');
const btn_rows = document.createElement('div');
btn_rows.className = 'row-container';

//кнопки для темной темы
const dark_btn = document.createElement('button');
btn_rows.append(dark_btn);
dark_btn.type = 'button';
dark_btn.textContent = '🌜';
dark_btn.addEventListener('click', ()=>{
    document.body.style.background = '#222'; // Лучше использовать темно-серый, а не просто grey, для контраста

    // 2. Настраиваем поля ввода
    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        element.style.backgroundColor = '#333';      // Темный фон
        element.style.color = 'white';                // Белый текст
        element.style.border = '2px solid #555';     // Серая рамка
        element.style.boxShadow = 'none';            // Убираем тень, оставшуюся от светлой темы
    });

    // 3. Настраиваем кнопки
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.backgroundColor = '#444';      // Темно-серый фон кнопок
        element.style.color = '#fff';                // Белый текст (чтобы было видно на черном)
        element.style.border = '2px solid #666';     // Светлая рамка для выделения
        element.style.boxShadow = '0 4px 6px rgba(0,0,0,0.5)'; // Черная тень
    });

    const labels = document.querySelectorAll('label');
    labels.forEach(element => {
        element.style.color = '#ccc'; // Светло-серый текст подписей
    });

    darkLi();

    // 5. Настраиваем кнопку удаления (крестик) внутри списка
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(element => {
        element.style.color = '#ff6b6b'; 
    });

    color_theme = "dark";

})

//кнопки для светлой темы
const light_btn = document.createElement('button');
btn_rows.append(light_btn);
light_btn.type = 'button';
light_btn.textContent = '🌞';
light_btn.addEventListener('click', ()=>{
    const body = document.querySelector('body');
    body.style.background = '#fdf6e3';

    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        element.style.backgroundColor = '#ffffff'; // Белый фон
        element.style.color = '#5b4636';            // Темно-коричневый текст
        element.style.border = '2px solid #d3c4b1'; // Мягкая бежевая рамка
        element.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.05)';
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.style.backgroundColor = '#f0e6d2';  // Светло-бежевый фон (лучше, чем просто серый)
        element.style.color = '#5b4636';            // Темно-коричневый текст
        element.style.border = '2px solid #d3c4b1'; // Рамка в тон инпутам
        element.style.boxShadow = '2px 2px 5px rgba(0, 0, 0, 0.1)';
    })

    const labels = document.querySelectorAll('label');
    labels.forEach(element => {
        element.style.color = '#5b4636'; // Подписи тоже делаем коричневыми
    });

    lightLi();
    
    // 5. Кнопка удаления (крестик)
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(element => {
        element.style.color = '#d32f2f'; // Темно-красный, чтобы было видно на светлом
    });

    color_theme = "light";

})

//кнопки для цветной темы
const rad_btn = document.createElement('button');
btn_rows.append(rad_btn);
rad_btn.type = 'button';
rad_btn.textContent = '🌈';
rad_btn.addEventListener('click', ()=>{
    const body = document.querySelector('body');
    body.style.background = 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #a1c4fd 100%)';

    const inputs = document.querySelectorAll('input');
    inputs.forEach(element => {
        element.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; // Полупрозрачный белый
        element.style.color = '#333'; // Темный текст
        element.style.border = '2px solid #ff7f00'; // Оранжевая рамка (как лучик солнца)
    });

    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
         element.style.backgroundColor = '#ffffff'; // Белые кнопки
        element.style.color = '#333'; // Темный текст
        element.style.border = '2px solid #a1c4fd';
    })

    const labels = document.querySelectorAll('label');
    labels.forEach(element => {
        element.style.color = 'black'; // Подписи тоже делаем коричневыми
    });

    radLi();

    // 5. Кнопка удаления
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach(element => {
        element.style.color = '#f5576c'; // Ярко-розовый крестик
    });

    color_theme = "rad";
})
form.append(btn_rows);


//создаем поля для ввода названий
const input_author = createInput('author', 'Имя автора');
const input_book = createInput('book', 'Назвние книги');
const row_cont = document.createElement('div');
row_cont.className = 'row-container';

row_cont.append(input_author);
row_cont.append(input_book);
form.append(row_cont);

const row_list = document.createElement('div');
row_list.className = 'row-container';


//кнопка добавления
const add_bt = document.createElement('button');
add_bt.textContent = 'Добавить книгу';
add_bt.type = 'button';
add_bt.style.color = 'white';
row_list.append(add_bt);
const list = document.querySelector('#books');

//обработчик кнопки добавления
add_bt.addEventListener('click', ()=>{
    const book = document.createElement('li');
    const input_author = document.querySelector('#author');
    const input_name = document.querySelector('#book'); 
    if (input_author.value.trim() == '' || input_name.value.trim() == '')
    {
        alert('Заполните поля!');
    }
    else{
        book.textContent = input_author.value + ' - ' + input_name.value;
        const delete_button = document.createElement('button');
        delete_button.textContent = '❌';
        delete_button.className = 'delete-btn';
        book.appendChild(delete_button);
        list.append(book);
        input_author.value = '';
        input_name.value = '';
        if (color_theme == "dark")
            darkLi();
        else if (color_theme == "light")
            lightLi();
        else
            radLi();
    }
})

//обработчик кнопки удаления записи
list.addEventListener('click', (event)=> {
    if (event.target.classList.contains('delete-btn')){
        const del_elem = event.target.closest('li');
        del_elem.remove();
    }
})

//поисковик
const searchWapper = document.createElement('div');
searchWapper.className = 'search-wrapper';
const searchIcon = document.createElement('span');
searchIcon.textContent = '🔍';
const search = document.createElement('input');

search.addEventListener('input', ()=> {

    //достаем запрос, убираем лишние пробелы и переводим в нижний регистр
    const query = search.value.trim().toLowerCase();

    const books = document.querySelectorAll('li');

    books.forEach(book => {

        const bookText = book.textContent.toLowerCase();

        if (query == '' || bookText.includes(query)){
            book.style.display = 'flex';
        }
        else
        {
            book.style.display = 'none';
        }
    })
})

searchWapper.append(search); searchWapper.append(searchIcon);



row_list.append(searchWapper);
form.append(row_list);
