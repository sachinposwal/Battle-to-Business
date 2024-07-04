document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            answer.style.display = 'block';
        } else {
            answer.style.display = 'none';
        }
    });
});
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));