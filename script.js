function showPlayers(team) {
    // Скрываем плитки
    document.getElementById('tiles').style.display = 'none';

    // Показываем кнопку "Назад"
    document.querySelector('.back-button').style.display = 'block';

    // Показываем выбранный список игроков
    document.getElementById(team).style.display = 'block';
}

function showTiles() {
    // Показываем плитки
    document.getElementById('tiles').style.display = 'block';

    // Скрываем кнопку "Назад"
    document.querySelector('.back-button').style.display = 'none';

    // Скрываем все списки игроков
    document.querySelectorAll('.player-list').forEach(function(el) {
        el.style.display = 'none';
    });
}