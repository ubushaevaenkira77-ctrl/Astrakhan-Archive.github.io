document.addEventListener('DOMContentLoaded', function() {
    
    // Плавная прокрутка к якорям (для ссылок #about, #contacts)
    const links = document.querySelectorAll('a[href^="#"]');
    
    for (let link of links) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Простая имитация "открытия вкладок" (логика для переключения)
    // Для настоящего SPA нужен более сложный код, но для этого макета 
    // все страницы находятся в одном index.html

    console.log("Сайт Архива загружен!");
});