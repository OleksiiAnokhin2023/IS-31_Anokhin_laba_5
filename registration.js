const btn = document.getElementById('registr');
const integerInp = document.getElementById('integerField');
const floatInp = document.getElementById('floatField');
const dateInp = document.getElementById('dateField');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const form = document.querySelector('form');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    
    let integerValue = parseInt(integerInp.value);
    if (isNaN(integerValue)) {
        alert("Введіть ціле число.");
        return;
    }

    let floatValue = parseFloat(floatInp.value);
    if (isNaN(floatValue)) {
        alert("Введіть дійсне число.");
        return;
    }

    if (!/^\d{2}\.\d{2}\.\d{4}$/.test(dateInp.value)) {
        alert("Введіть дату у форматі DD.MM.YYYY.");
        return;
    }

    const date = dateInp.value.split('.');
    const day = Number(date[0]);
    const month = Number(date[1]);
    const year = Number(date[2]);

    if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1000 || year > 9999) {
        alert("Невірна дата.");
        return;
    }

    if (password.value !== confirmPassword.value) {
        alert("Паролі не співпадають.");
        return;
    }

    if (password.value.length !== 8) {
        alert("Пароль повинен містити  8 символів.");
        return;
    }

    console.log(`Today is ${day} ${WhatMonth(month)} ${year} year`);
    console.log(integerValue);
    console.log(floatValue);
    console.log(password.value);

    form.reset();
});

function WhatMonth(month) {
    switch (month) {
        case 1: return "January";
        case 2: return "February";
        case 3: return "March";
        case 4: return "April";
        case 5: return "May";
        case 6: return "June";
        case 7: return "July";
        case 8: return "August";
        case 9: return "September";
        case 10: return "October";
        case 11: return "November";
        case 12: return "December";
        default: return "Invalid month";
    }
}
