  // Функция для переключения вкладок
  function openTab(tabId) {
    // Скрываем все табы
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });

    // Убираем активный класс с кнопок
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // Показываем выбранную вкладку и добавляем активный класс к кнопке
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}