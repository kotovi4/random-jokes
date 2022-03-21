const text = document.querySelector('.text'),
      btn = document.querySelector('.btn'),
      img = document.querySelector('.img'),
      container = document.querySelector('.container');

const message = {
  loading: 'Загрузка...',
  failure: 'Что-то пошло не так...'
};

function getData() {
  fetch('https://api.icndb.com/jokes')
    .then((res) => res.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.value.length);
      text.textContent = data.value[randomIndex].joke;
    })
    .catch((error) => {
      const errorMessage = document.createElement('div');
      errorMessage.innerHTML = `${message.failure}`;
      container.appendChild(errorMessage);
      console.error(error);
    });
}

getData();

btn.addEventListener('click', () => {
  getData();
  img.classList.add('shake-img');

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 1000);
});
