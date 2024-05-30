function showDate() {
    let out = document.getElementById('current-date');
    let today = new Date();
    const Days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

    out.innerHTML = `
        <div class="frame">
            <p>------------------</p>
            <div>Дата и время России: ${today.toLocaleString('ru-RU')}</div>
            <div>Дата и время Греции: ${today.toLocaleString('el-GR')}</div>
            <div>Дата и время Швейцарии: ${today.toLocaleString('fr-CH')}</div>
            <img src="date.gif" style="margin-left: 10px;">
            <div>Дата и время  Албании: ${today.toLocaleString('sq-AL')}</div>
            <div>Дата и время Китая: ${today.toLocaleString('zh-MO')}</div>
            <div>Дата и время Словакии: ${today.toLocaleString('sk-SK')}</div>
            <p>------------------</p>
            <div>Текущий год: ${today.getFullYear()}</div>
            <div>Текущий месяц: ${today.getMonth() + 1}</div>
            <div>Текущая дата: ${today.getDate()}</div>
            <div>День недели: ${Days[today.getDay()]}</div>
        </div>
    `;
}

function getDayWeek() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value - 1; // Месяца в JavaScript считаются с 0
    let year = document.getElementById('year').value;
    let date = new Date(year, month, day);
    let Days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    let dayOfWeek = Days[date.getDay()];
    document.getElementById('day-of-week').textContent = 'День недели: ' + dayOfWeek;
}