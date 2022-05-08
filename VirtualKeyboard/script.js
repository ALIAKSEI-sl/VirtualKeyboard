let divMain = document.createElement('div');
    divMain.className = "divMain";   
document.body.append(divMain);

let title = document.createElement('p');
    title.className = "title";
    title.textContent = "RSS Виртуальна клавиатура";
divMain.append(title);

let textarea = document.createElement('textarea');
    textarea.className = "textarea";
divMain.append(textarea);

let keyboard_doby = document.createElement('div');
    keyboard_doby.className = "keyboard_doby";
divMain.append(keyboard_doby);

let description = document.createElement('p');
    description.className = "description";
    description.textContent = "Клавиатура создана в операционной системе Windows";
divMain.append(description);

let language = document.createElement('p');
    language.className = "language";
    language.textContent = "Для переключения языка комбинация левые shift + alt";
divMain.append(language);


for (i=1; i<=5; i++) {
    let keyboard_row = document.createElement('div');
    keyboard_row.className = "keyboard_row";
    keyboard_doby.append(keyboard_row);
    keyboard_row.classList.add(`keyboard_row${i}`);
    
}

let keyboard_row1 = keyboard_doby.querySelector('.keyboard_row1');
for (i=1; i<=14; i++) {
    let keyboard_button = document.createElement('div');
    keyboard_button.className = "keyboard_button";
    keyboard_row1.append(keyboard_button);
    keyboard_button.classList.add(`keyboard_button1_${i}`);
}

let keyboard_row2 = keyboard_doby.querySelector('.keyboard_row2');
for (i=1; i<=15; i++) {
    let keyboard_button = document.createElement('div');
    keyboard_button.className = "keyboard_button";
    keyboard_row2.append(keyboard_button);
    keyboard_button.classList.add(`keyboard_button2_${i}`);
}

let keyboard_row3 = keyboard_doby.querySelector('.keyboard_row3');
for (i=1; i<=13; i++) {
    let keyboard_button = document.createElement('div');
    keyboard_button.className = "keyboard_button";
    keyboard_row3.append(keyboard_button);
    keyboard_button.classList.add(`keyboard_button3_${i}`);
}

let keyboard_row4 = keyboard_doby.querySelector('.keyboard_row4');
for (i=1; i<=13; i++) {
    let keyboard_button = document.createElement('div');
    keyboard_button.className = "keyboard_button";
    keyboard_row4.append(keyboard_button);
    keyboard_button.classList.add(`keyboard_button4_${i}`);
}

let keyboard_row5 = keyboard_doby.querySelector('.keyboard_row5');
for (i=1; i<=9; i++) {
    let keyboard_button = document.createElement('div');
    keyboard_button.className = "keyboard_button";
    keyboard_row5.append(keyboard_button);
    keyboard_button.classList.add(`keyboard_button5_${i}`);
}