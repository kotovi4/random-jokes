const text = document.querySelector('.text'),
      btn = document.querySelector('.btn'),
      img = document.querySelector('.img');

function getData() {
  fetch('https://api.icndb.com/jokes')
    .then((res) => res.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.value.length);
      text.textContent = data.value[randomIndex].joke;
    });
}

btn.addEventListener('click', () => {
  getData();
  img.classList.add('shake-img');

  setTimeout(() => {
    img.classList.remove('shake-img');
  }, 1000);
});
