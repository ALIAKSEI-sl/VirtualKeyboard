let divMain = document.createElement('div');
    divMain.className = "divMain";   
document.body.append(divMain);

let title = document.createElement('p');
    title.className = "title";
    title.textContent = "RSS Виртуальна клавиатура";
divMain.append(title);

let textarea = document.createElement('textarea');
    textarea.className = "textarea";
    textarea.id = "textarea";
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

let keyboard_button1_1 = keyboard_doby.querySelector('.keyboard_button1_1');
let ru = document.createElement('span');
    ru.className = "ru";
    keyboard_button1_1.append(ru);
        let casedown = document.createElement('span');
        casedown.className = "casedown";
        casedown.textContent = "ё";
        ru.append(casedown);        
        let caseUp = document.createElement('span');
        caseUp.className = "caseUp";
        caseUp.textContent = "Ё";
        ru.append(caseUp);
        caseUp.classList.add('hidden');
        let caps = document.createElement('span');
        caps.className = "caps";
        caps.textContent = "Ё";
        ru.append(caps);
        caps.classList.add('hidden');
        let shiftcaps = document.createElement('span');
        shiftcaps.className = "shiftcaps";
        shiftcaps.textContent = "ё";
        ru.append(shiftcaps);
        shiftcaps.classList.add('hidden');

let en = document.createElement('span');
    en.className = "en";
    keyboard_button1_1.append(en);
        casedown = document.createElement('span');
        casedown.className = "casedown";
        casedown.textContent = "`";
        en.append(casedown);
        casedown.classList.add('hidden')
        caseUp = document.createElement('span');
        caseUp.className = "caseUp";
        caseUp.textContent = "~";
        en.append(caseUp);
        caseUp.classList.add('hidden');
        caps = document.createElement('span');
        caps.className = "caps";
        caps.textContent = "`";
        en.append(caps);
        caps.classList.add('hidden');
        shiftcaps = document.createElement('span');
        shiftcaps.className = "shiftcaps";
        shiftcaps.textContent = "~";
        en.append(shiftcaps);
        shiftcaps.classList.add('hidden');

let keyboard_button1_2 = keyboard_doby.querySelector('.keyboard_button1_2');
    ru = document.createElement('span');
    ru.className = "ru";
    keyboard_button1_2.append(ru);
                    casedown = document.createElement('span');
                    casedown.className = "casedown";
                    casedown.textContent = "1";
                    ru.append(casedown);        
                    caseUp = document.createElement('span');
                    caseUp.className = "caseUp";
                    caseUp.textContent = "!";
                    ru.append(caseUp);
                    caseUp.classList.add('hidden');
                    caps = document.createElement('span');
                    caps.className = "caps";
                    caps.textContent = "1";
                    ru.append(caps);
                    caps.classList.add('hidden');
                    shiftcaps = document.createElement('span');
                    shiftcaps.className = "shiftcaps";
                    shiftcaps.textContent = "!";
                    ru.append(shiftcaps);
                    shiftcaps.classList.add('hidden');
        
    en = document.createElement('span');
    en.className = "en";
    keyboard_button1_2.append(en);
                casedown = document.createElement('span');
                casedown.className = "casedown";
                casedown.textContent = "1";
                en.append(casedown);
                casedown.classList.add('hidden')
                caseUp = document.createElement('span');
                caseUp.className = "caseUp";
                caseUp.textContent = "!";
                en.append(caseUp);
                caseUp.classList.add('hidden');
                caps = document.createElement('span');
                caps.className = "caps";
                caps.textContent = "1";
                en.append(caps);
                caps.classList.add('hidden');
                shiftcaps = document.createElement('span');
                shiftcaps.className = "shiftcaps";
                shiftcaps.textContent = "!";
                en.append(shiftcaps);
                shiftcaps.classList.add('hidden');

let keyboard_button1_3 = keyboard_doby.querySelector('.keyboard_button1_3');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_3.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "2";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "\"";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "2";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "\"";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_3.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "2";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "@";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "2";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "@";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_4 = keyboard_doby.querySelector('.keyboard_button1_4');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_4.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "3";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "№";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "3";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "№";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_4.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "3";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "#";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "3";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "#";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_5 = keyboard_doby.querySelector('.keyboard_button1_5');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_5.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "4";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ";";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "4";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ";";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_5.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "4";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "$";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "4";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "$";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_6 = keyboard_doby.querySelector('.keyboard_button1_6');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_6.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "5";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "%";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "5";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "%";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_6.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "5";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "%";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "5";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "%";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_7 = keyboard_doby.querySelector('.keyboard_button1_7');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_7.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "6";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ":";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "6";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ":";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_7.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "6";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "^";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "6";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "^";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_8 = keyboard_doby.querySelector('.keyboard_button1_8');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_8.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "7";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "?";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "7";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "?";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_8.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "7";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "?";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "7";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "?";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_9 = keyboard_doby.querySelector('.keyboard_button1_9');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_9.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "8";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "*";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "8";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "*";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_9.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "8";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "*";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "8";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "*";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_10 = keyboard_doby.querySelector('.keyboard_button1_10');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_10.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "9";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "(";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "9";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "(";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_10.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "9";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "(";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "9";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "(";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_11 = keyboard_doby.querySelector('.keyboard_button1_11');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_11.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "0";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ")";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "0";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ")";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_11.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "0";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ")";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "0";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ")";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_12 = keyboard_doby.querySelector('.keyboard_button1_12');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_12.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "-";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "_";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "-";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "_";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_12.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "-";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "_";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "-";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "_";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_13 = keyboard_doby.querySelector('.keyboard_button1_13');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_13.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "=";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "+";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "=";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "+";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_13.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "=";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "+";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "=";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "+";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button1_14 = keyboard_doby.querySelector('.keyboard_button1_14');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button1_14.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "backspace";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "backspace";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "backspace";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "backspace";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button1_14.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "backspace";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "backspace";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "backspace";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "backspace";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_1 = keyboard_doby.querySelector('.keyboard_button2_1');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_1.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "tab";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "tab";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "tab";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "tab";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_1.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "tab";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "tab";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "tab";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "tab";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_2 = keyboard_doby.querySelector('.keyboard_button2_2');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_2.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "й";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Й";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Й";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "й";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_2.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "q";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Q";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Q";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "q";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_3 = keyboard_doby.querySelector('.keyboard_button2_3');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_3.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ц";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ц";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ц";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ц";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_3.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "w";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "W";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "W";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "w";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_4 = keyboard_doby.querySelector('.keyboard_button2_4');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_4.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "у";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "У";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "У";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "у";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_4.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "e";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "E";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "E";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "e";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_5 = keyboard_doby.querySelector('.keyboard_button2_5');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_5.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "к";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "К";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "К";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "к";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_5.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "r";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "R";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "R";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "R";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_6 = keyboard_doby.querySelector('.keyboard_button2_6');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_6.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "е";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Е";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Е";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "е";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_6.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "t";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "T";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "T";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "t";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_7 = keyboard_doby.querySelector('.keyboard_button2_7');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_7.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "н";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Н";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Н";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "н";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_7.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "y";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Y";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Y";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "y";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_8 = keyboard_doby.querySelector('.keyboard_button2_8');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_8.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "г";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Г";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Г";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "г";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_8.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "u";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "U";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "U";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "u";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_9 = keyboard_doby.querySelector('.keyboard_button2_9');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_9.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ш";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ш";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ш";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ш";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_9.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "i";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "I";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "I";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "i";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_10 = keyboard_doby.querySelector('.keyboard_button2_10');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_10.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "щ";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Щ";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Щ";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "щ";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_10.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "o";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "O";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "O";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "o";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_11 = keyboard_doby.querySelector('.keyboard_button2_11');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_11.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "з";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "З";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "З";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "з";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_11.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "p";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "P";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "P";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "p";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_12 = keyboard_doby.querySelector('.keyboard_button2_12');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_12.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "х";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Х";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Х";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "х";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_12.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "[";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "{";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "[";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "{";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_13 = keyboard_doby.querySelector('.keyboard_button2_13');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_13.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ъ";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ъ";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ъ";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ъ";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_13.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "]";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "}";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "]";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "}";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_14 = keyboard_doby.querySelector('.keyboard_button2_14');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_14.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "\\";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "/";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "\\";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "/";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_14.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "\\";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "|";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "\\";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "|";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button2_15 = keyboard_doby.querySelector('.keyboard_button2_15');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button2_15.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "*";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "*";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "*";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "*";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button2_15.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "*";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "*";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "*";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "*";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_1 = keyboard_doby.querySelector('.keyboard_button3_1');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_1.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "caps lock";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "caps lock";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "caps lock";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "caps lock";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_1.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "caps lock";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "caps lock";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "caps lock";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "caps lock";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_2 = keyboard_doby.querySelector('.keyboard_button3_2');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_2.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ф";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ф";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ф";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ф";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_2.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "a";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "A";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "A";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "a";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_3 = keyboard_doby.querySelector('.keyboard_button3_3');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_3.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ы";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ы";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ы";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ы";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_3.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "s";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "S";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "S";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "s";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_4 = keyboard_doby.querySelector('.keyboard_button3_4');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_4.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "в";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "В";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "В";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "в";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_4.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "d";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "D";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "D";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "d";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_5 = keyboard_doby.querySelector('.keyboard_button3_5');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_5.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "а";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "А";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "А";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "а";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_5.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "f";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "F";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "F";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "f";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_6 = keyboard_doby.querySelector('.keyboard_button3_6');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_6.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "п";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "П";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "П";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "п";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_6.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "g";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "G";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "G";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "g";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_7 = keyboard_doby.querySelector('.keyboard_button3_7');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_7.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "р";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Р";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Р";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "р";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_7.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "h";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "H";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "H";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "h";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_8 = keyboard_doby.querySelector('.keyboard_button3_8');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_8.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "о";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "О";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "О";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "о";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_8.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "j";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "J";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "J";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "j";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_9 = keyboard_doby.querySelector('.keyboard_button3_9');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_9.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "л";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Л";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Л";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "л";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_9.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "k";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "K";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "K";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "k";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_10 = keyboard_doby.querySelector('.keyboard_button3_10');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_10.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "д";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Д";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Д";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "д";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_10.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "l";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "L";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "L";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "l";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_11 = keyboard_doby.querySelector('.keyboard_button3_11');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_11.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ж";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ж";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ж";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ж";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_11.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = ";";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ":";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = ";";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ":";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_12 = keyboard_doby.querySelector('.keyboard_button3_12');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_12.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "э";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Э";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Э";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "э";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_12.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "'";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "\"";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "'";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "\"";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button3_13 = keyboard_doby.querySelector('.keyboard_button3_13');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button3_13.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "enter";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "enter";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "enter";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "enter";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button3_13.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "enter";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "enter";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "enter";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "enter";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_1 = keyboard_doby.querySelector('.keyboard_button4_1');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_1.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "shift";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "shift";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "shift";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "shift";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_1.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "shift";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "shift";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "shift";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "shift";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_2 = keyboard_doby.querySelector('.keyboard_button4_2');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_2.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "я";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Я";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Я";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "я";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_2.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "z";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Z";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Z";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "z";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_3 = keyboard_doby.querySelector('.keyboard_button4_3');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_3.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ч";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ч";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ч";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ч";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_3.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "x";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "X";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "X";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "x";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_4 = keyboard_doby.querySelector('.keyboard_button4_4');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_4.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "с";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "С";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "С";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "с";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_4.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "c";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "C";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "C";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "c";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_5 = keyboard_doby.querySelector('.keyboard_button4_5');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_5.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "м";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "М";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "М";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "м";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_5.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "v";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "V";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "V";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "v";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_6 = keyboard_doby.querySelector('.keyboard_button4_6');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_6.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "и";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "И";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "И";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "и";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_6.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "b";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "B";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "B";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "b";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_7 = keyboard_doby.querySelector('.keyboard_button4_7');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_7.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "т";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Т";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Т";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "т";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_7.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "n";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "N";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "N";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "n";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_8 = keyboard_doby.querySelector('.keyboard_button4_8');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_8.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ь";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ь";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ь";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ь";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_8.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "m";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "M";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "M";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "m";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_9 = keyboard_doby.querySelector('.keyboard_button4_9');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_9.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "б";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Б";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Б";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "б";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_9.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = ",";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "<";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = ",";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "<";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_10 = keyboard_doby.querySelector('.keyboard_button4_10');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_10.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ю";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "Ю";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "Ю";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ю";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_10.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = ".";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ">";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = ".";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ">";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_11 = keyboard_doby.querySelector('.keyboard_button4_11');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_11.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = ".";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = ",";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = ".";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = ",";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_11.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "/";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "?";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "/";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "?";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_12 = keyboard_doby.querySelector('.keyboard_button4_12');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_12.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "▲";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "▲";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "▲";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "▲";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_12.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "▲";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "▲";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "▲";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "▲";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button4_13 = keyboard_doby.querySelector('.keyboard_button4_13');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button4_13.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "shift";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "shift";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "shift";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "shift";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button4_13.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "shift";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "shift";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "shift";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "shift";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_1 = keyboard_doby.querySelector('.keyboard_button5_1');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_1.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ctrl";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "ctrl";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "ctrl";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_1.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ctrl";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "ctrl";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "ctrl";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_2 = keyboard_doby.querySelector('.keyboard_button5_2');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_2.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "win";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "win";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "win";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "win";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_2.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "win";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "win";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "win";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_3 = keyboard_doby.querySelector('.keyboard_button5_3');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_3.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "alt";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "alt";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "alt";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "alt";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_3.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "alt";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "alt";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "alt";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_4 = keyboard_doby.querySelector('.keyboard_button5_4');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_4.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = " ";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = " ";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = " ";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = " ";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_4.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = " ";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = " ";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = " ";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = " ";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_5 = keyboard_doby.querySelector('.keyboard_button5_5');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_5.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "alt";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "alt";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "alt";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "alt";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_5.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "alt";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "alt";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "alt";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_6 = keyboard_doby.querySelector('.keyboard_button5_6');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_6.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "◄";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "◄";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "◄";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "◄";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_6.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "◄";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "◄";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "◄";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "◄";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_7 = keyboard_doby.querySelector('.keyboard_button5_7');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_7.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "▼";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "▼";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "▼";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "▼";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_7.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "▼";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "▼";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "▼";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "▼";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_8 = keyboard_doby.querySelector('.keyboard_button5_8');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_8.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "►";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "►";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "►";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "►";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_8.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "►";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "►";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "►";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "►";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');

let keyboard_button5_9 = keyboard_doby.querySelector('.keyboard_button5_9');
ru = document.createElement('span');
ru.className = "ru";
keyboard_button5_9.append(ru);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ctrl";
ru.append(casedown);        
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "ctrl";
ru.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "ctrl";
ru.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
ru.append(shiftcaps);
shiftcaps.classList.add('hidden');
                    
en = document.createElement('span');
en.className = "en";
keyboard_button5_9.append(en);
casedown = document.createElement('span');
casedown.className = "casedown";
casedown.textContent = "ctrl";
en.append(casedown);
casedown.classList.add('hidden')
caseUp = document.createElement('span');
caseUp.className = "caseUp";
caseUp.textContent = "ctrl";
en.append(caseUp);
caseUp.classList.add('hidden');
caps = document.createElement('span');
caps.className = "caps";
caps.textContent = "ctrl";
en.append(caps);
caps.classList.add('hidden');
shiftcaps = document.createElement('span');
shiftcaps.className = "shiftcaps";
shiftcaps.textContent = "ctrl";
en.append(shiftcaps);
shiftcaps.classList.add('hidden');


keyboard_button1_1.addEventListener('click', change1_1);
function change1_1 (event) {
    keyboard_button1_1.style.background = "#e95b5b";
        keyboard_button1_1.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_1.style.background = "black";
            keyboard_button1_1.style.borderRadius = "3px";
          }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_1.firstChild.childNodes[i].classList.contains('hidden')) {            
            content += keyboard_button1_1.firstChild.childNodes[i].textContent                                
    }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_1.lastChild.childNodes[i].classList.contains('hidden')) {            
            content += keyboard_button1_1.lastChild.childNodes[i].textContent                    
    }
    }
    textarea.value += content    
}

keyboard_button1_2.addEventListener('click', change1_2);
function change1_2 (event) {
    keyboard_button1_2.style.background = "#e95b5b";
        keyboard_button1_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_2.style.background = "#444444";
            keyboard_button1_2.style.borderRadius = "3px";
          }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_2.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_2.firstChild.childNodes[i].textContent           
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_2.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_2.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_3.addEventListener('click', change1_3);
function change1_3 (event) {
    keyboard_button1_3.style.background = "#e95b5b";
    keyboard_button1_3.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_3.style.background = "#444444";
        keyboard_button1_3.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_3.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_3.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_3.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_3.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_4.addEventListener('click', change1_4);
function change1_4 (event) {
    keyboard_button1_4.style.background = "#e95b5b";
    keyboard_button1_4.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_4.style.background = "#444444";
        keyboard_button1_4.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_4.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_4.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_4.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_4.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_5.addEventListener('click', change1_5);
function change1_5 (event) {
    keyboard_button1_5.style.background = "#e95b5b";
    keyboard_button1_5.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_5.style.background = "#444444";
        keyboard_button1_5.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_5.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_5.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_5.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_5.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_6.addEventListener('click', change1_6);
function change1_6 (event) {
    keyboard_button1_6.style.background = "#e95b5b";
    keyboard_button1_6.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_6.style.background = "#444444";
        keyboard_button1_6.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_6.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_6.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_6.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_6.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_7.addEventListener('click', change1_7);
function change1_7 (event) {
    keyboard_button1_7.style.background = "#e95b5b";
    keyboard_button1_7.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_7.style.background = "#444444";
        keyboard_button1_7.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_7.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_7.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_7.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_7.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_8.addEventListener('click', change1_8);
function change1_8 (event) {
    keyboard_button1_8.style.background = "#e95b5b";
    keyboard_button1_8.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_8.style.background = "#444444";
        keyboard_button1_8.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_8.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_8.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_8.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_8.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_9.addEventListener('click', change1_9);
function change1_9 (event) {
    keyboard_button1_9.style.background = "#e95b5b";
    keyboard_button1_9.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_9.style.background = "#444444";
        keyboard_button1_9.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_9.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_9.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_9.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_9.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_10.addEventListener('click', change1_10);
function change1_10 (event) {
    keyboard_button1_10.style.background = "#e95b5b";
    keyboard_button1_10.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_10.style.background = "#444444";
        keyboard_button1_10.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_10.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_10.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_10.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_10.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_11.addEventListener('click', change1_11);
function change1_11 (event) {
    keyboard_button1_11.style.background = "#e95b5b";
    keyboard_button1_11.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_11.style.background = "#444444";
        keyboard_button1_11.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_11.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_11.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_11.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_11.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_12.addEventListener('click', change1_12);
function change1_12 (event) {
    keyboard_button1_12.style.background = "#e95b5b";
    keyboard_button1_12.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_12.style.background = "#444444";
        keyboard_button1_12.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_12.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_12.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_12.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_12.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_13.addEventListener('click', change1_13);
function change1_13 (event) {
    keyboard_button1_13.style.background = "#e95b5b";
    keyboard_button1_13.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_13.style.background = "444444";
        keyboard_button1_13.style.borderRadius = "3px";
      }, 500)   
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button1_13.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_13.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button1_13.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button1_13.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button1_14.addEventListener('click', change1_14);
function change1_14 (event) {
    keyboard_button1_14.style.background = "#e95b5b";
    keyboard_button1_14.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button1_14.style.background = "black";
        keyboard_button1_14.style.borderRadius = "3px";
      }, 500)
      textarea.value = textarea.value.slice(0, textarea.value.length-1)      
    }

keyboard_button2_1.addEventListener('click', change2_1);
function change2_1 (event) {   
    keyboard_button2_1.style.background = "#e95b5b";
    keyboard_button2_1.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_1.style.background = "black";
        keyboard_button2_1.style.borderRadius = "3px";
      }, 500)
    textarea.value += "    "
}

keyboard_button2_2.addEventListener('click', change2_2);
function change2_2 (event) {
    keyboard_button2_2.style.background = "#e95b5b";
    keyboard_button2_2.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_2.style.background = "#444444";
        keyboard_button2_2.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_2.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_2.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_2.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_2.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_3.addEventListener('click', change2_3);
function change2_3 (event) {
    keyboard_button2_3.style.background = "#e95b5b";
    keyboard_button2_3.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_3.style.background = "#444444";
        keyboard_button2_3.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_3.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_3.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_3.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_3.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_4.addEventListener('click', change2_4);
function change2_4 (event) {
    keyboard_button2_4.style.background = "#e95b5b";
    keyboard_button2_4.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_4.style.background = "#444444";
        keyboard_button2_4.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_4.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_4.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_4.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_4.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_5.addEventListener('click', change2_5);
function change2_5 (event) {
    keyboard_button2_5.style.background = "#e95b5b";
    keyboard_button2_5.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_5.style.background = "#444444";
        keyboard_button2_5.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_5.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_5.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_5.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_5.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_6.addEventListener('click', change2_6);
function change2_6 (event) {
    keyboard_button2_6.style.background = "#e95b5b";
    keyboard_button2_6.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_6.style.background = "#444444";
        keyboard_button2_6.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_6.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_6.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_6.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_6.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_7.addEventListener('click', change2_7);
function change2_7 (event) {
    keyboard_button2_7.style.background = "#e95b5b";
    keyboard_button2_7.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_7.style.background = "#444444";
        keyboard_button2_7.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_7.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_7.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_7.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_7.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_8.addEventListener('click', change2_8);
function change2_8 (event) {
    keyboard_button2_8.style.background = "#e95b5b";
    keyboard_button2_8.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_8.style.background = "#444444";
        keyboard_button2_8.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_8.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_8.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_8.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_8.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_9.addEventListener('click', change2_9);
function change2_9 (event) {
    keyboard_button2_9.style.background = "#e95b5b";
    keyboard_button2_9.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_9.style.background = "#444444";
        keyboard_button2_9.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_9.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_9.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_9.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_9.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_10.addEventListener('click', change2_10);
function change2_10 (event) {
    keyboard_button2_10.style.background = "#e95b5b";
    keyboard_button2_10.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_10.style.background = "#444444";
        keyboard_button2_10.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_10.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_10.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_10.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_10.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_11.addEventListener('click', change2_11);
function change2_11 (event) {
    keyboard_button2_11.style.background = "#e95b5b";
    keyboard_button2_11.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_11.style.background = "#444444";
        keyboard_button2_11.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_11.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_11.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_11.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_11.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_12.addEventListener('click', change2_12);
function change2_12 (event) {
    keyboard_button2_12.style.background = "#e95b5b";
    keyboard_button2_12.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_12.style.background = "#444444";
        keyboard_button2_12.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_12.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_12.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_12.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_12.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_13.addEventListener('click', change2_13);
function change2_13 (event) {
    keyboard_button2_13.style.background = "#e95b5b";
    keyboard_button2_13.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_13.style.background = "#444444";
        keyboard_button2_13.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_13.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_13.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_13.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_13.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_14.addEventListener('click', change2_14);
function change2_14 (event) {
    keyboard_button2_14.style.background = "#e95b5b";
    keyboard_button2_14.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_14.style.background = "#444444";
        keyboard_button2_14.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_14.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_14.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_14.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_14.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button2_15.addEventListener('click', change2_15);
function change2_15 (event) {
    keyboard_button2_15.style.background = "#e95b5b";
    keyboard_button2_15.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button2_15.style.background = "black";
        keyboard_button2_15.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button2_15.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_15.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button2_15.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button2_15.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_2.addEventListener('click', change3_2);
function change3_2 (event) {
    keyboard_button3_2.style.background = "#e95b5b";
    keyboard_button3_2.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_2.style.background = "#444444";
        keyboard_button3_2.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_2.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_2.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_2.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_2.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_3.addEventListener('click', change3_3);
function change3_3 (event) {
    keyboard_button3_3.style.background = "#e95b5b";
    keyboard_button3_3.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_3.style.background = "#444444";
        keyboard_button3_3.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_3.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_3.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_3.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_3.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_4.addEventListener('click', change3_4);
function change3_4 (event) {
    keyboard_button3_4.style.background = "#e95b5b";
    keyboard_button3_4.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_4.style.background = "#444444";
        keyboard_button3_4.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_4.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_4.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_4.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_4.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_5.addEventListener('click', change3_5);
function change3_5 (event) {
    keyboard_button3_5.style.background = "#e95b5b";
    keyboard_button3_5.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_5.style.background = "#444444";
        keyboard_button3_5.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_5.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_5.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_5.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_5.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_6.addEventListener('click', change3_6);
function change3_6 (event) {
    keyboard_button3_6.style.background = "#e95b5b";
    keyboard_button3_6.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_6.style.background = "#444444";
        keyboard_button3_6.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_6.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_6.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_6.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_6.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_7.addEventListener('click', change3_7);
function change3_7 (event) {
    keyboard_button3_7.style.background = "#e95b5b";
    keyboard_button3_7.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_7.style.background = "#444444";
        keyboard_button3_7.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_7.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_7.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_7.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_7.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_8.addEventListener('click', change3_8);
function change3_8 (event) {
    keyboard_button3_8.style.background = "#e95b5b";
    keyboard_button3_8.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_8.style.background = "#444444";
        keyboard_button3_8.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_8.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_8.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_8.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_8.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_9.addEventListener('click', change3_9);
function change3_9 (event) {
    keyboard_button3_9.style.background = "#e95b5b";
    keyboard_button3_9.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_9.style.background = "#444444";
        keyboard_button3_9.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_9.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_9.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_9.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_9.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_10.addEventListener('click', change3_10);
function change3_10 (event) {
    keyboard_button3_10.style.background = "#e95b5b";
    keyboard_button3_10.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_10.style.background = "#444444";
        keyboard_button3_10.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_10.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_10.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_10.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_10.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_11.addEventListener('click', change3_11);
function change3_11 (event) {
    keyboard_button3_11.style.background = "#e95b5b";
    keyboard_button3_11.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_11.style.background = "#444444";
        keyboard_button3_11.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_11.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_11.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_11.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_11.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_12.addEventListener('click', change3_12);
function change3_12 (event) {
    keyboard_button3_12.style.background = "#e95b5b";
    keyboard_button3_12.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_12.style.background = "#444444";
        keyboard_button3_12.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button3_12.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_12.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button3_12.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button3_12.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button3_13.addEventListener('click', change3_13);
function change3_13 (event) {
    keyboard_button3_13.style.background = "#e95b5b";
    keyboard_button3_13.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button3_13.style.background = "black";
        keyboard_button3_13.style.borderRadius = "3px";
      }, 500)   
    textarea.value += "\n"
}

keyboard_button4_1.addEventListener('click', change4_1);
function change4_1 (event) {
    keyboard_button4_1.style.background = "#e95b5b";
    keyboard_button4_1.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_1.style.background = "black";
        keyboard_button4_1.style.borderRadius = "3px";
      }, 500)
}

keyboard_button4_2.addEventListener('click', change4_2);
function change4_2 (event) {
    keyboard_button4_2.style.background = "#e95b5b";
    keyboard_button4_2.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_2.style.background = "#444444";
        keyboard_button4_2.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_2.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_2.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_2.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_2.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_3.addEventListener('click', change4_3);
function change4_3 (event) {
    keyboard_button4_3.style.background = "#e95b5b";
    keyboard_button4_3.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_3.style.background = "#444444";
        keyboard_button4_3.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_3.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_3.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_3.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_3.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_4.addEventListener('click', change4_4);
function change4_4 (event) {
    keyboard_button4_4.style.background = "#e95b5b";
    keyboard_button4_4.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_4.style.background = "#444444";
        keyboard_button4_4.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_4.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_4.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_4.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_4.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_5.addEventListener('click', change4_5);
function change4_5 (event) {
    keyboard_button4_5.style.background = "#e95b5b";
    keyboard_button4_5.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_5.style.background = "#444444";
        keyboard_button4_5.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        
        if (!keyboard_button4_5.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_5.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_5.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_5.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_6.addEventListener('click', change4_6);
function change4_6 (event) {
    keyboard_button4_6.style.background = "#e95b5b";
    keyboard_button4_6.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_6.style.background = "#444444";
        keyboard_button4_6.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_6.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_6.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_6.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_6.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_7.addEventListener('click', change4_7);
function change4_7 (event) {
    keyboard_button4_7.style.background = "#e95b5b";
    keyboard_button4_7.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_7.style.background = "#444444";
        keyboard_button4_7.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_7.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_7.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_7.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_7.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_8.addEventListener('click', change4_8);
function change4_8 (event) {
    keyboard_button4_8.style.background = "#e95b5b";
    keyboard_button4_8.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_8.style.background = "#444444";
        keyboard_button4_8.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_8.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_8.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_8.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_8.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_9.addEventListener('click', change4_9);
function change4_9 (event) {
    keyboard_button4_9.style.background = "#e95b5b";
    keyboard_button4_9.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_9.style.background = "#444444";
        keyboard_button4_9.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_9.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_9.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_9.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_9.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_10.addEventListener('click', change4_10);
function change4_10 (event) {
    keyboard_button4_10.style.background = "#e95b5b";
    keyboard_button4_10.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_10.style.background = "#444444";
        keyboard_button4_10.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_10.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_10.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_10.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_10.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_11.addEventListener('click', change4_11);
function change4_11 (event) {
    keyboard_button4_11.style.background = "#e95b5b";
    keyboard_button4_11.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_11.style.background = "#444444";
        keyboard_button4_11.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_11.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_11.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_11.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_11.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_12.addEventListener('click', change4_12);
function change4_12 (event) {
    keyboard_button4_12.style.background = "#e95b5b";
    keyboard_button4_12.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_12.style.background = "black";
        keyboard_button4_12.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button4_12.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_12.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button4_12.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button4_12.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button4_13.addEventListener('click', change4_13);
function change4_13 (event) {
    keyboard_button4_13.style.background = "#e95b5b";
    keyboard_button4_13.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button4_13.style.background = "black";
        keyboard_button4_13.style.borderRadius = "3px";
      }, 500)
    }

keyboard_button5_1.addEventListener('click', change5_1);
function change5_1 (event) {
    keyboard_button5_1.style.background = "#e95b5b";
    keyboard_button5_1.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_1.style.background = "black";
        keyboard_button5_1.style.borderRadius = "3px";
      }, 500)
}

keyboard_button5_2.addEventListener('click', change5_2);
function change5_2 (event) {
    keyboard_button5_2.style.background = "#e95b5b";
    keyboard_button5_2.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_2.style.background = "black";
        keyboard_button5_2.style.borderRadius = "3px";
      }, 500)
}

keyboard_button5_3.addEventListener('click', change5_3);
function change5_3 (event) {
    keyboard_button5_3.style.background = "#e95b5b";
    keyboard_button5_3.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_3.style.background = "black";
        keyboard_button5_3.style.borderRadius = "3px";
      }, 500)
}

keyboard_button5_4.addEventListener('click', change5_4);
function change5_4 (event) {
    keyboard_button5_4.style.background = "#e95b5b";
    keyboard_button5_4.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_4.style.background = "#444444";
        keyboard_button5_4.style.borderRadius = "3px";
      }, 500)
    textarea.value += " "
}

keyboard_button5_5.addEventListener('click', change5_5);
function change5_5 (event) {
    keyboard_button5_5.style.background = "#e95b5b";
    keyboard_button5_5.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_5.style.background = "black";
        keyboard_button5_5.style.borderRadius = "3px";
      }, 500)
}

keyboard_button5_6.addEventListener('click', change5_6);
function change5_6 (event) {
    keyboard_button5_6.style.background = "#e95b5b";
    keyboard_button5_6.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_6.style.background = "black";
        keyboard_button5_6.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button5_6.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button5_6.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button5_6.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button5_6.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button5_7.addEventListener('click', change5_7);
function change5_7 (event) {
    keyboard_button5_7.style.background = "#e95b5b";
    keyboard_button5_7.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_7.style.background = "black";
        keyboard_button5_7.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button5_7.firstChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button5_7.firstChild.childNodes[i].textContent
        }
    }
    for (i=0; i<4; i++) {
        if (!keyboard_button5_7.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button5_7.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button5_8.addEventListener('click', change5_8);
function change5_8 (event) {
    keyboard_button5_8.style.background = "#e95b5b";
    keyboard_button5_8.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_8.style.background = "black";
        keyboard_button5_8.style.borderRadius = "3px";
      }, 500)
    let content = ""
    for (i=0; i<4; i++) {
        if (!keyboard_button5_8.firstChild.childNodes[i].classList.contains('hidden')) {            
            content += keyboard_button5_8.firstChild.childNodes[i].textContent
        }
    }
    console.log(keyboard_button5_8.firstChild.childNodes[0].classList.contains('hidden'))
    for (i=0; i<4; i++) {
        if (!keyboard_button5_8.lastChild.childNodes[i].classList.contains('hidden')) {
            content += keyboard_button5_8.lastChild.childNodes[i].textContent
        }
    }
    textarea.value += content
}

keyboard_button5_9.addEventListener('click', change5_9);
function change5_9 (event) {
    keyboard_button5_9.style.background = "#e95b5b";
    keyboard_button5_9.style.borderRadius = "50px";
    setTimeout(() => {
        keyboard_button5_9.style.background = "black";
        keyboard_button5_9.style.borderRadius = "3px";
      }, 500)
}

let flag = false;
let flagLeng = "ru";
document.body.addEventListener("keyup", changelange)
function changelange (event) {    
    let casedown = document.querySelectorAll(".casedown");
    let caps = document.querySelectorAll(".caps");
    
    if (event.code == "AltLeft") {flag = true}
    if (event.code == "ShiftLeft" && flag) {
    for (i=0; i<casedown.length; i++) {
        if (!keyboard_button3_1.classList.contains('back-clik')) {
            if (casedown[i].parentElement.classList.contains('ru') && caps[0].classList.contains("hidden")){
            if (!casedown[i].classList.contains('hidden')){
                casedown[i].classList.add("hidden")              
            }
            else {
                casedown[i].classList.remove("hidden")
            }
            }     
            if (casedown[i].parentElement.classList.contains('en') && caps[1].classList.contains("hidden")) {
            if (casedown[i].classList.contains('hidden')){
                casedown[i].classList.remove("hidden")
            }
            else {
                casedown[i].classList.add("hidden")
            }
            }
        }

        if (keyboard_button3_1.classList.contains('back-clik')) {
            if (caps[i].parentElement.classList.contains('ru') && casedown[0].classList.contains("hidden")){
            if (!caps[i].classList.contains('hidden')){
                caps[i].classList.add("hidden")              
            }
            else {
                caps[i].classList.remove("hidden")
            }
            }     
            if (caps[i].parentElement.classList.contains('en') && casedown[1].classList.contains("hidden")) {
            if (caps[i].classList.contains('hidden')){
                caps[i].classList.remove("hidden")
            }
            else {
                caps[i].classList.add("hidden")
            }
            }
        }       
    }   
        flag = false
        if (flagLeng === "ru") {flagLeng = "en"}
        else (flagLeng = "ru")
        console.log(flagLeng)    
    }
}

keyboard_button3_1.addEventListener('click', change3_1);
function change3_1 (event) {
    keyboard_button3_1.classList.toggle("back-clik")
    let casedown = document.querySelectorAll(".casedown");
    let caps = document.querySelectorAll(".caps");
    for (i=0; i<casedown.length; i++) {
        if (casedown[i].parentElement.classList.contains('ru') && caps[1].classList.contains('hidden')){
            if (!casedown[i].classList.contains('hidden')){
                casedown[i].classList.add("hidden")
                caps[i].classList.remove("hidden")
            }
            else {
                if (casedown[1].classList.contains('hidden')) {
                casedown[i].classList.remove("hidden")
                caps[i].classList.add("hidden")
                }
            }
        }      
    }
    for (i=0; i<casedown.length; i++) {
        if (casedown[i].parentElement.classList.contains('en') && caps[0].classList.contains('hidden')){
            if (!casedown[i].classList.contains('hidden')) {
                casedown[i].classList.add("hidden")
                caps[i].classList.remove("hidden")
            }
            else {                   
            
            if (casedown[0].classList.contains('hidden')) {
             casedown[i].classList.remove("hidden")
              caps[i].classList.add("hidden")
            }
            }
        }      
    } 
}

keyboard_button4_1.addEventListener('mousedown', change4_1);
function change4_1 (event) {
    let casedown = document.querySelectorAll(".casedown");
    let caseUp = document.querySelectorAll(".caseUp");
    for (i=0; i<casedown.length; i++) {
        if (!keyboard_button3_1.classList.contains('back-clik')) {
            if (casedown[i].parentElement.classList.contains('ru')){
                if (flagLeng === "ru") {
                if (!casedown[i].classList.contains('hidden')){
                    casedown[i].classList.add("hidden")
                    caseUp[i].classList.remove("hidden")
                    keyboard_button4_1.style.background = "#e95b5b";
                    keyboard_button4_1.style.borderRadius = "50px";
                    setTimeout(() => {
                        keyboard_button4_1.style.background = "black";
                        keyboard_button4_1.style.borderRadius = "3px";
                      }, 500)         
                }
                else{
                    casedown[i].classList.remove("hidden")
                    caseUp[i].classList.add("hidden") 
                }
                }
            }
            if (casedown[i].parentElement.classList.contains('en')){
                if (flagLeng === "en") {
                if (!casedown[i].classList.contains('hidden')){
                    casedown[i].classList.add("hidden")
                    caseUp[i].classList.remove("hidden")
                    keyboard_button4_1.style.background = "#e95b5b";
                    keyboard_button4_1.style.borderRadius = "50px";
                    setTimeout(() => {
                        keyboard_button4_1.style.background = "black";
                        keyboard_button4_1.style.borderRadius = "3px";
                      }, 500)         
                }
                else{
                    casedown[i].classList.remove("hidden")
                    caseUp[i].classList.add("hidden") 
                }
                }
            }
        }
    }

}

keyboard_button4_13.addEventListener('mousedown', change4_13);
function change4_13 (event) {
    let casedown = document.querySelectorAll(".casedown");
    let caseUp = document.querySelectorAll(".caseUp");
    for (i=0; i<casedown.length; i++) {
        if (!keyboard_button3_1.classList.contains('back-clik')) {
            if (casedown[i].parentElement.classList.contains('ru')){
                if (flagLeng === "ru") {
                if (!casedown[i].classList.contains('hidden')){
                    casedown[i].classList.add("hidden")
                    caseUp[i].classList.remove("hidden")
                    keyboard_button4_13.style.background = "#e95b5b";
                    keyboard_button4_13.style.borderRadius = "50px";
                    setTimeout(() => {
                        keyboard_button4_13.style.background = "black";
                        keyboard_button4_13.style.borderRadius = "3px";
                      }, 500)         
                }
                else{
                    casedown[i].classList.remove("hidden")
                    caseUp[i].classList.add("hidden") 
                }
                }
            }
            if (casedown[i].parentElement.classList.contains('en')){
                if (flagLeng === "en") {
                if (!casedown[i].classList.contains('hidden')){
                    casedown[i].classList.add("hidden")
                    caseUp[i].classList.remove("hidden")
                    keyboard_button4_13.style.background = "#e95b5b";
                    keyboard_button4_13.style.borderRadius = "50px";
                    setTimeout(() => {
                        keyboard_button4_13.style.background = "black";
                        keyboard_button4_13.style.borderRadius = "3px";
                      }, 500)         
                }
                else{
                    casedown[i].classList.remove("hidden")
                    caseUp[i].classList.add("hidden") 
                }
                }
            }
        }
    }

}
//!casedown[i].classList.contains('hidden') && casedown[1].classList.contains('hidden')

document.body.addEventListener("keydown", click) 
function click (event) {
    if (event.code === "Backquote") {
        keyboard_button1_1.style.background = "#e95b5b";
        keyboard_button1_1.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_1.style.background = "black";
            keyboard_button1_1.style.borderRadius = "3px";
          }, 500)                
    }
    if (event.code === "Digit1") {
        keyboard_button1_2.style.background = "#e95b5b";
        keyboard_button1_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_2.style.background = "#444444";
            keyboard_button1_2.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit2") {
        keyboard_button1_3.style.background = "#e95b5b";
        keyboard_button1_3.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_3.style.background = "#444444";
            keyboard_button1_3.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit3") {
        keyboard_button1_4.style.background = "#e95b5b";
        keyboard_button1_4.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_4.style.background = "#444444";
            keyboard_button1_4.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit4") {
        keyboard_button1_5.style.background = "#e95b5b";
        keyboard_button1_5.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_5.style.background = "#444444";
            keyboard_button1_5.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit5") {
        keyboard_button1_6.style.background = "#e95b5b";
        keyboard_button1_6.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_6.style.background = "#444444";
            keyboard_button1_6.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit6") {
        keyboard_button1_7.style.background = "#e95b5b";
        keyboard_button1_7.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_7.style.background = "#444444";
            keyboard_button1_7.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit7") {
        keyboard_button1_8.style.background = "#e95b5b";
        keyboard_button1_8.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_8.style.background = "#444444";
            keyboard_button1_8.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit8") {
        keyboard_button1_9.style.background = "#e95b5b";
        keyboard_button1_9.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_9.style.background = "#444444";
            keyboard_button1_9.style.borderRadius = "3px";
          }, 500)                   
    }if (event.code === "Digit9") {
        keyboard_button1_10.style.background = "#e95b5b";
        keyboard_button1_10.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_10.style.background = "#444444";
            keyboard_button1_10.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Digit0") {
        keyboard_button1_11.style.background = "#e95b5b";
        keyboard_button1_11.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_11.style.background = "#444444";
            keyboard_button1_11.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Minus") {
        keyboard_button1_12.style.background = "#e95b5b";
        keyboard_button1_12.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_12.style.background = "#444444";
            keyboard_button1_12.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Equal") {
        keyboard_button1_13.style.background = "#e95b5b";
        keyboard_button1_13.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_13.style.background = "#444444";
            keyboard_button1_13.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Backspace") {
        keyboard_button1_14.style.background = "#e95b5b";
        keyboard_button1_14.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button1_14.style.background = "black";
            keyboard_button1_14.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Tab") {
        keyboard_button2_1.style.background = "#e95b5b";
        keyboard_button2_1.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_1.style.background = "black";
            keyboard_button2_1.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyQ") {
        keyboard_button2_2.style.background = "#e95b5b";
        keyboard_button2_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_2.style.background = "#444444";
            keyboard_button2_2.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyW") {
        keyboard_button2_3.style.background = "#e95b5b";
        keyboard_button2_3.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_3.style.background = "#444444";
            keyboard_button2_3.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyE") {
        keyboard_button2_4.style.background = "#e95b5b";
        keyboard_button2_4.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_4.style.background = "#444444";
            keyboard_button2_4.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyR") {
        keyboard_button2_5.style.background = "#e95b5b";
        keyboard_button2_5.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_5.style.background = "#444444";
            keyboard_button2_5.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyT") {
        keyboard_button2_6.style.background = "#e95b5b";
        keyboard_button2_6.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_6.style.background = "#444444";
            keyboard_button2_6.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyY") {
        keyboard_button2_7.style.background = "#e95b5b";
        keyboard_button2_7.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_7.style.background = "#444444";
            keyboard_button2_7.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyU") {
        keyboard_button2_8.style.background = "#e95b5b";
        keyboard_button2_8.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_8.style.background = "#444444";
            keyboard_button2_8.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyI") {
        keyboard_button2_9.style.background = "#e95b5b";
        keyboard_button2_9.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_9.style.background = "#444444";
            keyboard_button2_9.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyO") {
        keyboard_button2_10.style.background = "#e95b5b";
        keyboard_button2_10.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_10.style.background = "#444444";
            keyboard_button2_10.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyP") {
        keyboard_button2_11.style.background = "#e95b5b";
        keyboard_button2_11.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_11.style.background = "#444444";
            keyboard_button2_11.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "BracketLeft") {
        keyboard_button2_12.style.background = "#e95b5b";
        keyboard_button2_12.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_12.style.background = "#444444";
            keyboard_button2_12.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "BracketRight") {
        keyboard_button2_13.style.background = "#e95b5b";
        keyboard_button2_13.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_13.style.background = "#444444";
            keyboard_button2_13.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Backslash") {
        keyboard_button2_14.style.background = "#e95b5b";
        keyboard_button2_14.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_14.style.background = "#444444";
            keyboard_button2_14.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "NumpadMultiply") {
        keyboard_button2_15.style.background = "#e95b5b";
        keyboard_button2_15.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button2_15.style.background = "black";
            keyboard_button2_15.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "CapsLock") {
        change3_1()                         
    }
    if (event.code === "KeyA") {
        keyboard_button3_2.style.background = "#e95b5b";
        keyboard_button3_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_2.style.background = "#444444";
            keyboard_button3_2.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyS") {
        keyboard_button3_3.style.background = "#e95b5b";
        keyboard_button3_3.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_3.style.background = "#444444";
            keyboard_button3_3.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyD") {
        keyboard_button3_4.style.background = "#e95b5b";
        keyboard_button3_4.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_4.style.background = "#444444";
            keyboard_button3_4.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyF") {
        keyboard_button3_5.style.background = "#e95b5b";
        keyboard_button3_5.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_5.style.background = "#444444";
            keyboard_button3_5.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyG") {
        keyboard_button3_6.style.background = "#e95b5b";
        keyboard_button3_6.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_6.style.background = "#444444";
            keyboard_button3_6.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyH") {
        keyboard_button3_7.style.background = "#e95b5b";
        keyboard_button3_7.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_7.style.background = "#444444";
            keyboard_button3_7.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyJ") {
        keyboard_button3_8.style.background = "#e95b5b";
        keyboard_button3_8.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_8.style.background = "#444444";
            keyboard_button3_8.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyK") {
        keyboard_button3_9.style.background = "#e95b5b";
        keyboard_button3_9.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_9.style.background = "#444444";
            keyboard_button3_9.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyL") {
        keyboard_button3_10.style.background = "#e95b5b";
        keyboard_button3_10.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_10.style.background = "#444444";
            keyboard_button3_10.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Semicolon") {
        keyboard_button3_11.style.background = "#e95b5b";
        keyboard_button3_11.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_11.style.background = "#444444";
            keyboard_button3_11.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Quote") {
        keyboard_button3_12.style.background = "#e95b5b";
        keyboard_button3_12.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_12.style.background = "#444444";
            keyboard_button3_12.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Enter") {
        keyboard_button3_13.style.background = "#e95b5b";
        keyboard_button3_13.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button3_13.style.background = "black";
            keyboard_button3_13.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ShiftLeft") {
        keyboard_button4_1.style.background = "#e95b5b";
        keyboard_button4_1.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_1.style.background = "black";
            keyboard_button4_1.style.borderRadius = "3px";
          }, 500)
          //change4_1ShiftL()                   
    }
    if (event.code === "KeyZ") {
        keyboard_button4_2.style.background = "#e95b5b";
        keyboard_button4_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_2.style.background = "#444444";
            keyboard_button4_2.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyX") {
        keyboard_button4_3.style.background = "#e95b5b";
        keyboard_button4_3.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_3.style.background = "#444444";
            keyboard_button4_3.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyC") {
        keyboard_button4_4.style.background = "#e95b5b";
        keyboard_button4_4.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_4.style.background = "#444444";
            keyboard_button4_4.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyV") {
        keyboard_button4_5.style.background = "#e95b5b";
        keyboard_button4_5.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_5.style.background = "#444444";
            keyboard_button4_5.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyB") {
        keyboard_button4_6.style.background = "#e95b5b";
        keyboard_button4_6.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_6.style.background = "#444444";
            keyboard_button4_6.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyN") {
        keyboard_button4_7.style.background = "#e95b5b";
        keyboard_button4_7.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_7.style.background = "#444444";
            keyboard_button4_7.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "KeyM") {
        keyboard_button4_8.style.background = "#e95b5b";
        keyboard_button4_8.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_8.style.background = "#444444";
            keyboard_button4_8.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Comma") {
        keyboard_button4_9.style.background = "#e95b5b";
        keyboard_button4_9.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_9.style.background = "#444444";
            keyboard_button4_9.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Period") {
        keyboard_button4_10.style.background = "#e95b5b";
        keyboard_button4_10.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_10.style.background = "#444444";
            keyboard_button4_10.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Slash") {
        keyboard_button4_11.style.background = "#e95b5b";
        keyboard_button4_11.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_11.style.background = "#444444";
            keyboard_button4_11.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ArrowUp") {
        keyboard_button4_12.style.background = "#e95b5b";
        keyboard_button4_12.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_12.style.background = "black";
            keyboard_button4_12.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ShiftRight") {
        keyboard_button4_13.style.background = "#e95b5b";
        keyboard_button4_13.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button4_13.style.background = "black";
            keyboard_button4_13.style.borderRadius = "3px";
          }, 500)
          //change4_13ShiftR()                   
    }
    if (event.code === "ControlLeft") {
        keyboard_button5_1.style.background = "#e95b5b";
        keyboard_button5_1.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_1.style.background = "black";
            keyboard_button5_1.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "MetaLeft") {
        keyboard_button5_2.style.background = "#e95b5b";
        keyboard_button5_2.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_2.style.background = "black";
            keyboard_button5_2.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "AltLeft") {
        keyboard_button5_3.style.background = "#e95b5b";
        keyboard_button5_3.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_3.style.background = "black";
            keyboard_button5_3.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "Space") {
        keyboard_button5_4.style.background = "#e95b5b";
        keyboard_button5_4.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_4.style.background = "#444444";
            keyboard_button5_4.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "AltRight") {
        keyboard_button5_5.style.background = "#e95b5b";
        keyboard_button5_5.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_5.style.background = "black";
            keyboard_button5_5.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ArrowLeft") {
        keyboard_button5_6.style.background = "#e95b5b";
        keyboard_button5_6.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_6.style.background = "black";
            keyboard_button5_6.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ArrowDown") {
        keyboard_button5_7.style.background = "#e95b5b";
        keyboard_button5_7.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_7.style.background = "black";
            keyboard_button5_7.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ArrowRight") {
        keyboard_button5_8.style.background = "#e95b5b";
        keyboard_button5_8.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_8.style.background = "black";
            keyboard_button5_8.style.borderRadius = "3px";
          }, 500)                   
    }
    if (event.code === "ControlRight") {
        keyboard_button5_9.style.background = "#e95b5b";
        keyboard_button5_9.style.borderRadius = "50px";
        setTimeout(() => {
            keyboard_button5_9.style.background = "black";
            keyboard_button5_9.style.borderRadius = "3px";
          }, 500)                   
    }    
    //console.log(event.code)
}
 


