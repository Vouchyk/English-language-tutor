// submit.js
const BOT_TOKEN = window.config.BOT_TOKEN; // Отримуємо токен з конфігурації
const CHAT_ID = window.config.CHAT_ID; // Отримуємо ID чату з конфігурації

const API_URL = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

// Функція для відправки даних форми до Telegram
async function sendMessage(formData, messageText) {
  const message = messageText(formData);
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'HTML'
      })
    });
    if (!response.ok) throw new Error('Помилка при надсиланні повідомлення');
    
    // Оновлюємо статус надсилання в main.js
    window.handleSubmissionStatus(true, 'becomeModal'); // Закриває модальне вікно "Хочу стати Репетитором"
    window.handleSubmissionStatus(true, 'questionModal'); // Закриває модальне вікно "Хочу стати Репетитором"
    window.handleSubmissionStatus(true, 'searchModal'); // Закриває модальне вікно "Хочу стати Репетитором"

    // Показуємо модальне вікно успіху
    window.showModal('alert-success');
    
  } catch (error) {

    // Показуємо модальне вікно помилки
    window.showModal('alert-error');
  }
}


// Функція для формування повідомлення для форми "Записатися на урок"
function formatLessonSignupMessage(data) {
  return `<b>Записатися на урок</b>\n<b>Ім'я:</b> ${data.name}\n<b>Вік:</b> ${data.age}\n<b>Телефон:</b> ${data.phone}\n<b>Повідомлення:</b> ${data.message}`;
}

// Функція для формування повідомлення для форми "Задане питання"
function formatQuestionMessage(data) {
  return `<b>Задане питання</b>\n<b>Ім'я:</b> ${data.name}\n<b>Телефон:</b> ${data.phone}\n<b>Питання:</b> ${data.message}`;
}

// Функція для формування повідомлення для форми "Шукати репетитора"
function formatSearchTutorMessage(data) {
  return `<b>Вакансія викладача</b>\n<b>Ім'я:</b> ${data.name}\n<b>Вік:</b> ${data.age}\n<b>Телефон:</b> ${data.phone}\n<b>Досвід:</b> ${data.experience}`;
}

// Додаємо обробники подій для кожної форми
document.getElementById('becomeModal').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    phone: event.target.phone.value,
    age: event.target.age.value,
    message: event.target.message.value
  };
  sendMessage(formData, formatLessonSignupMessage);
});

document.getElementById('questionModal').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    phone: event.target.phone.value,
    message: event.target.message.value
  };
  sendMessage(formData, formatQuestionMessage);
});

document.getElementById('searchModal').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = {
    name: event.target.name.value,
    phone: event.target.phone.value,
    age: event.target.age.value,
    experience: event.target.experience.value
  };
  sendMessage(formData, formatSearchTutorMessage);
});
