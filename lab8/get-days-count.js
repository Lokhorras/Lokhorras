function SHOWDAYS() {
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday)/1000/60/60/24;
    daysCount = Math.floor(daysCount);
    document.getElementById('countDays').textContent = 'Количество дней с даты рождения: ' + daysCount;
}

function CLEARR() {
    document.getElementById('birthday').value = '';
    document.getElementById('countDays').textContent = '';
}