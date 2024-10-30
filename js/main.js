// ============================================================================
// Функція для анімації заголовка та контенту при прокручуванні
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.advantages-header h1');
    const content = document.querySelector('.advantages-content');

    const showOnScroll = () => {
        const headerPosition = header.getBoundingClientRect().top; // Позиція заголовка
        const contentPosition = content.getBoundingClientRect().top; // Позиція контенту
        const windowHeight = window.innerHeight; // Висота вікна браузера

        // Додаємо клас 'visible', якщо елементи в межах видимого вікна
        if (headerPosition < windowHeight - 100) {
            header.classList.add('visible');
        }
        if (contentPosition < windowHeight - 100) {
            content.classList.add('visible');
        }
    };

    // Ініціалізуємо анімацію при завантаженні
    showOnScroll();

    // Додаємо слухач подій для прокручування
    window.addEventListener('scroll', showOnScroll);
});

// ============================================================================
// Функція для перемикання видимості навігаційного меню
function toggleMenu() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");

    nav.classList.toggle("active"); // Змінюємо клас для навігаційного меню
    hamburger.classList.toggle("active"); // Змінюємо клас для кнопки гамбургера
}

// Додаємо обробники подій для меню навігації
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelectorAll("#nav a"); // Вибираємо всі посилання в навігаційному меню

    // Додайте обробник подій для гамбургера
    hamburger.addEventListener("click", toggleMenu);

    // Додаємо обробник подій до кожного посилання
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            toggleMenu(); // Закриваємо меню при кліку на посилання
        });
    });

    // Додаємо зміну стилю заголовка при прокручуванні
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header'); // Знайдіть заголовок
        const scrollPosition = window.scrollY; // Отримати позицію прокрутки

        // Додаємо/видаляємо клас 'transparent' в залежності від позиції прокрутки
        if (scrollPosition > 0) {
            header.classList.add('transparent'); 
        } else {
            header.classList.remove('transparent'); 
        }
    });
});

// ============================================================================
// Функції для відкриття модальних вікон
function openBecomeModal() {
    document.getElementById('becomeModal').style.display = 'flex'; // Відкриваємо модальне вікно "Хочу стати Репетитором"
}

function openSearchModal() {
    document.getElementById('searchModal').style.display = 'flex'; // Відкриваємо модальне вікно "Знайти Репетитора"
}

function openQuestionModal() {
    document.getElementById('questionModal').style.display = 'flex'; // Відкриваємо модальне вікно "Запитання"
}

// Додаємо обробники подій до кнопок для відкриття модальних вікон
document.getElementById('openBecomeModalButton').addEventListener('click', openBecomeModal);
document.getElementById('openSearchModalButton').addEventListener('click', openSearchModal);
document.getElementById('openQuestionModalButton').addEventListener('click', openQuestionModal);


// ============================================================================
// Закриття модального вікна при натисканні на кнопку закриття
document.querySelectorAll('.close').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        closeModal(this.closest('.modal').id); // Закриваємо модальне вікно, в якому знаходиться кнопка закриття
    });
});

// Закриття модального вікна при натисканні поза його контентом
window.addEventListener('click', function(event) {
    const modals = [
        document.getElementById('becomeModal'), 
        document.getElementById('searchModal'), 
        document.getElementById('questionModal')
    ];
    
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id); // Закриваємо модальне вікно, якщо клікнули на його фон
        }
    });
});

// ============================================================================
// Глобальна змінна для зберігання статусу
let submissionStatus = false;

// Функція для закриття модального вікна за його ідентифікатором
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none'; // Закриваємо модальне вікно
    } else {
        console.error(`Модальне вікно з ID ${modalId} не знайдено.`);
    }
}

// ============================================================================
// Функція для обробки статусу надсилання
function handleSubmissionStatus(status, modalId) {
    submissionStatus = status;
    console.log(`Статус надсилання: ${submissionStatus}`);

    // Якщо статус TRUE, закриваємо модальне вікно
    if (submissionStatus === true) {
        closeModal(modalId); 
    }
}

// ============================================================================
// Функція для показу модального вікна (сповіщення)
function showModal(modalType) {
    const modal = document.querySelector(`.alert-modal.${modalType}`);
    if (modal) {
        modal.style.display = 'block'; // Показуємо модальне вікно

        // Автоматично закрити модальне вікно через 2 секунди
        setTimeout(() => {
            modal.style.display = 'none'; // Закриваємо модальне вікно
        }, 3000);
    }
}

// ============================================================================
// Функція для закриття сповіщення
function closeAlert(modal) {
    modal.style.display = 'none'; // Закриваємо сповіщення
}

// Додаємо обробники подій для кнопок закриття сповіщень
const closeButtons = document.querySelectorAll('.alert-close-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const modal = event.target.closest('.alert-modal');
        closeAlert(modal); // Закриваємо модальне вікно сповіщення
    });
});

// ============================================================================
// Додаємо функцію showModal до глобального об'єкта для доступу з інших файлів
window.showModal = showModal;
