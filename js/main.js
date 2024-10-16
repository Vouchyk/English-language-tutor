document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.advantages-header h1');
    const content = document.querySelector('.advantages-content');

    const showOnScroll = () => {
        const headerPosition = header.getBoundingClientRect().top; // Отримуємо позицію заголовка
        const contentPosition = content.getBoundingClientRect().top; // Отримуємо позицію контенту
        const windowHeight = window.innerHeight; // Висота вікна браузера

        // Якщо заголовок або контент перебуває в межах видимого вікна
        if (headerPosition < windowHeight - 100) {
            header.classList.add('visible');
        }
        if (contentPosition < windowHeight - 100) {
            content.classList.add('visible');
        }
    };

    // Викликаємо функцію для ініціалізації
    showOnScroll();

    // Додаємо слухач подій для прокручування
    window.addEventListener('scroll', showOnScroll);
});





// Функція для перемикання видимості навігаційного меню
function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    nav.classList.toggle("active"); // Змінюємо клас для навігації
    hamburger.classList.toggle("active"); // Змінюємо клас для гамбургера
}

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelectorAll("#nav a"); // Вибираємо всі посилання в навігаційному меню

    // Додайте обробник подій для гамбургера
    hamburger.addEventListener("click", toggleMenu);

    // Додаємо обробник подій до кожного посилання
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            // Закриваємо меню при кліку на посилання
            toggleMenu();
        });
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('header'); // Знайдіть заголовок
        const scrollPosition = window.scrollY; // Отримати позицію прокрутки

        if (scrollPosition > 0) {
            header.classList.add('transparent'); // Додати клас при прокручуванні
        } else {
            header.classList.remove('transparent'); // Видалити клас, коли на верхній позиції
        }
    });
});




// Функція для відкриття модального вікна "Хочу стати Репетитором"
function openBecomeModal() {
    document.getElementById('becomeModal').style.display = 'flex'; // Використовуємо flex для центрування
}

// Функція для відкриття модального вікна "Знайти Репетитора"
function openSearchModal() {
    document.getElementById('searchModal').style.display = 'flex'; // Використовуємо flex для центрування
}

// Функція для відкриття модального вікна "Запитання"
function openQuestionModal() {
    document.getElementById('questionModal').style.display = 'flex'; // Використовуємо flex для центрування
}

// Додаємо обробники подій до кнопок для відкриття модальних вікон
document.getElementById('openBecomeModalButton').addEventListener('click', openBecomeModal);
document.getElementById('openSearchModalButton').addEventListener('click', openSearchModal);
document.getElementById('openQuestionModalButton').addEventListener('click', openQuestionModal);

// Функція для закриття модальних вікон
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Закриття модального вікна при натисканні на хрестик
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        closeModal(this.closest('.modal').id); // Закриваємо модальне вікно, в якому знаходиться кнопка закриття
    });
});

// Закриття модального вікна при натисканні поза модальним контентом
window.addEventListener('click', function(event) {
    const modals = [
        document.getElementById('becomeModal'), 
        document.getElementById('searchModal'), 
        document.getElementById('questionModal')
    ];
    
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
});
