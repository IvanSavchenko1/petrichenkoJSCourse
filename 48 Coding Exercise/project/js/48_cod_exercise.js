'use strict';
document.addEventListener('DOMContentLoaded',() => {
// код, который сработает ниже, будет отрабатывать только тогда страница загружена
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против..."
    ]
  };

  const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener('submit', (event) => {

    event.preventDefault();
    // preventDefault - отмена стандарт поведения браузера
    // после нажатия кнопки "отправить" браузер не будет перезагружаться


    let newFilm = addInput.value; //value - то, что ввел пользователь
    const favourite = checkbox.checked;

    if (newFilm) {

      if(newFilm.length > 21) {
        newFilm = `${newFilm.substring(0,22)} ...`;
      }

      if (favourite) {
        console.log("добавляем новый фильм")
      }

      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);

      createMovieList(movieDB.movies, movieList);
    }

    event.target.reset();

  })


  const deleteAdv = (arr) => {
    arr.forEach(item => {
      item.remove();
    });
  };

  deleteAdv(adv);

  const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';
  }

  makeChanges(); //меняем фон (из прошлого задания


  const sortArr = (arr) => {
    arr.sort();
  }



  function createMovieList(films, parent) {
    parent.innerHTML = ""; // какой род блок будут очищать и потом помещать новый
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class= "promo__interactive-item"> ${i + 1} ${film}
    <div class="delete"></div>
    </li> `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1); // вырезает элемент из масива

        createMovieList(movieDB.movies, movieList); // для того, чтобы заново выстраивать в правильном порядке список после удаления
      });
    });
  }

  createMovieList(movieDB.movies, movieList)
})