const openFormButton = document.querySelector('.add-student');    // выбирает кнопку, которая открывает форму по классу add-student
const form = document.querySelector('.form');   // выбирает форму

const handleOpenForm = () => {
  const isOpened = !form.classList.contains('opened');    // если форма НЕ(!) содержит(contains) класс opened, это условие записывается в переменную isOpened

  // openFormButton.innerText = isOpened ? 'Close Form' : 'Open Form';   // в случае, когда форма не содержит класс opened, текст кнопки меняется с Open Form на Close Form

  // то же самое
  // if (isOpened) {
  //   openFormButton.innerText = 'Close Form';
  // } else {
  //   openFormButton.innerText = 'Open Form';
  // }
  
  form.classList.toggle('opened');    // toggle добавляет и убирает класс opened
}

openFormButton.addEventListener('click', handleOpenForm);   // на кнопку навешивается событие клика и вызывается функция