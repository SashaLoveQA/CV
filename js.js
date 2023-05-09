/* Это объявление переменной, мы наши кнопку по тегу */
const button = document.querySelector('button');

/* Тут на кнопку навешиваем обрабочик, который ждёт клика и тогда запустит логику */
button.addEventListener('click', function() {
	alert('Все в жизни возможно, главное, насколько сильно ты этого хочешь :) P.S. Если у меня получилось стать QA, все точно возможно!')
})


button.addEventListener('click', function openImage(gif){
	image='gif1.gif'
})