const handleDomContentLoaded = function () {
    const body = document.body;
    const header = document.querySelector('header');
    const burgerBtn = document.querySelector('header .nav-btn');
    const overlay = document.querySelector('.header .overlay');
    function handleBurgerClick() {
        if (header.classList.contains('is-active')) {
            closeNavigation();
        } else {
            openNavigation();
        }
    }
    function closeNavigation() {
        body.classList.remove('disable-scroll');
        header.classList.remove('is-active');
    }
    function openNavigation() {
        body.classList.add('disable-scroll');
        header.classList.add('is-active');
    }
    burgerBtn.addEventListener('click', handleBurgerClick);
    overlay.addEventListener('click', closeNavigation);
}
document.addEventListener('DOMContentLoaded', handleDomContentLoaded);



document.addEventListener('DOMContentLoaded', function () {
    const faqCards = document.querySelectorAll('.faq-card');

    faqCards.forEach(card => {
        const arrow = card.querySelector('.arrow');
        const answer = card.querySelector('.answer');

        arrow.addEventListener('click', function () {
            if (card.classList.contains('open')) {
                answer.style.display = 'none'; // Скрываем ответ
                arrow.setAttribute('src', 'img/jpg/down-arrow.png'); // Устанавливаем стрелку вниз
                card.classList.remove('open'); // Удаляем класс open
                if (window.innerWidth < 768) { // Меньше 768px - мобильное устройство
                    card.style.height = '200px'; // Устанавливаем большую высоту карточки для мобильных устройств
                } else {
                    card.style.height = '105px'; // Устанавливаем обычную высоту карточки для других устройств
                }
            } else {
                answer.style.display = 'block'; // Показываем ответ
                arrow.setAttribute('src', 'img/jpg/up-arrow.png'); // Устанавливаем стрелку вверх
                card.classList.add('open'); // Добавляем класс open
                // Проверяем ширину экрана
                if (window.innerWidth < 768) { // Меньше 768px - мобильное устройство
                    card.style.height = '390px'; // Устанавливаем большую высоту карточки для мобильных устройств
                } else {
                    card.style.height = '171px'; // Устанавливаем обычную высоту карточки для других устройств
                }
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.secondary-link');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);

            // Убираем класс 'active' у всех ссылок
            links.forEach(link => {
                link.classList.remove('active');
            });
            // Добавляем класс 'active' только нажатой ссылке
            this.classList.add('active');
        });
    });

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.content-section');

    sections.forEach((section, index) => {
        const prevButton = section.querySelector('.prevButton');
        const nextButton = section.querySelector('.nextButton');

        prevButton.addEventListener('click', function() {
            if (index > 0) {
                sections[index].style.display = 'none';
                sections[index - 1].style.display = 'block';
                sections[index - 1].scrollIntoView({ behavior: 'smooth' });
            }
        });

        nextButton.addEventListener('click', function() {
            if (index < sections.length - 1) {
                sections[index].style.display = 'none';
                sections[index + 1].style.display = 'block';
                sections[index + 1].scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.secondary-link');
    const sections = document.querySelectorAll('.content-section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            updateActiveLink(this); // Обновляем активную ссылку
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавно перемещаемся вверх при переключении секции
        });
    });

    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    function updateActiveLink(clickedLink) {
        // Убираем класс 'active' у всех ссылок
        links.forEach(link => {
            link.classList.remove('active');
        });
        // Добавляем класс 'active' только нажатой ссылке
        clickedLink.classList.add('active');
    }
});








document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.secondary-link');
    const sections = document.querySelectorAll('.content-section');

    // Обработчик событий для ссылок в меню
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
            updateActiveLink(this); // Обновляем активный пункт меню
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавно перемещаемся вверх при переключении секции
        });
    });

    // Обработчик событий для кнопок переключения между секциями
    sections.forEach((section, index) => {
        const prevButton = section.querySelector('.prevButton');
        const nextButton = section.querySelector('.nextButton');

        prevButton.addEventListener('click', function() {
            if (index > 0) {
                sections[index].style.display = 'none';
                sections[index - 1].style.display = 'block';
                sections[index - 1].scrollIntoView({ behavior: 'smooth' });
                updateActiveLink(links[index - 1]); // Обновляем активный пункт меню
            }
        });

        nextButton.addEventListener('click', function() {
            if (index < sections.length - 1) {
                sections[index].style.display = 'none';
                sections[index + 1].style.display = 'block';
                sections[index + 1].scrollIntoView({ behavior: 'smooth' });
                updateActiveLink(links[index + 1]); // Обновляем активный пункт меню
            }
        });
    });

    // Функция отображения секции
    function showSection(sectionId) {
        sections.forEach(section => {
            if (section.id === sectionId) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Функция обновления активного пункта меню
    function updateActiveLink(clickedLink) {
        // Убираем класс 'active' у всех ссылок
        links.forEach(link => {
            link.classList.remove('active');
        });
        // Добавляем класс 'active' только нажатой ссылке
        clickedLink.classList.add('active');
    }
});





document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedbackForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Отменяем стандартное поведение отправки формы

        // Получаем значения полей формы
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();

        // Проверяем, что все поля заполнены
        if (name === '' || email === '' || message === '') {
            alert('Будь ласка, заповніть всі поля форми.'); // Выводим сообщение об ошибке, если поля не заполнены
            return; // Прекращаем выполнение функции
        }

        // Проверяем корректность введенного email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Будь ласка, введіть коректну адресу електронної пошти.'); // Выводим сообщение об ошибке, если email введен неправильно
            return; // Прекращаем выполнение функции
        }

        // Если все поля заполнены корректно, отображаем модальное окно с сообщением
        const modal = document.getElementById('modal');
        modal.style.display = 'block';

        // Очищаем поля формы после успешной отправки
        form.reset();
    });
});

// Закрытие модального окна при клике на крестик
const modal = document.getElementById('modal');
const closeBtn = modal.querySelector('.close');
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});