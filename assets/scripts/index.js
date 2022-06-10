// выводить погоду?

// вынести в отдельный файл таймер??
// import * as Timer from "./timer";

//отсчет времени____________________________________________
let counterTime = 0;
let timer;

const timerScreen = document.querySelector(".timer__screen");

//формат отображения времени
const displayTimer = () => {
  const hours = Math.floor(counterTime / 3600);
  const minutes = Math.floor((counterTime % 3600) / 60);
  const seconds = Math.floor(counterTime % 60);

  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  timerScreen.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

//прямой отсчет
const countUp = () => {
  counterTime++;
  displayTimer();
};

const countTimer = () => {
  timer = clearInterval(timer);
  timer = setInterval(countUp, 1000);
};

const restartTimer = () => {
  timer = clearInterval(timer);
  counterTime = 0;
  displayTimer();
  countTimer();
};

const stopTimer = () => {
  timer = clearInterval(timer);
  counterTime = 0;
  displayTimer();
};

document.addEventListener("DOMContentLoaded", countTimer);

displayTimer(); //чтобы на таймере всегда были цифры
// ____________________________________________________;

// функция переворачивания карты

const section = document.querySelector(".section");
let counter = 0;
const counterText = document.querySelector(".counter__value");
const restartBtn = document.querySelector(".restartBtn");
const playAgainBtn = document.querySelector(".win__button");

//карточки
const getData = () => [
  { imgSrc: "../assets/images/js.png", name: "javascript" },
  {
    imgSrc: "../assets/images/HTML2.png",
    name: "html",
  },
  { imgSrc: "../assets/images/css2.png", name: "css" },
  { imgSrc: "../assets/images/react.png", name: "react" },
  { imgSrc: "../assets/images/figma.png", name: "figma" },
  { imgSrc: "../assets/images/github.png", name: "github" },
  { imgSrc: "../assets/images/js.png", name: "javascript" },
  {
    imgSrc: "../assets/images/HTML2.png",
    name: "html",
  },
  { imgSrc: "../assets/images/css2.png", name: "css" },
  { imgSrc: "../assets/images/react.png", name: "react" },
  { imgSrc: "../assets/images/figma.png", name: "figma" },
  { imgSrc: "../assets/images/github.png", name: "github" },
];

// перемешивание карточек
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();

  cardData.forEach((item) => {
    //для каждой карточки:
    //-создаем html-элементы
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    //-добавляем классы созданным элементам
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //элемент face = соответствующая картинка
    face.src = item.imgSrc;

    //добавляем каждому элементу атрибут name
    card.setAttribute("name", item.name);

    //размещаем карточки внутри секции
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    //вешаем клик на карточку
    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkedCards(e);
    });
  });
};

//проверка
const checkedCards = (e) => {
  const clickedCard = e.target;
  clickedCard.classList.add("flipped");

  const flippedCards = document.querySelectorAll(".flipped");
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
    } else {
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1500);
      });
    }
    counter++;
    counterText.innerHTML = counter;
  }
  if (
    document.querySelectorAll(".card").length ==
    document.querySelectorAll(".card.toggleCard").length
    //для тестирования
    // document.querySelectorAll(".card.toggleCard").length === 2
  ) {
    console.log("game over");
    document.querySelector(".win").classList.add("active");
    const time = document.querySelector(".timer__screen").innerHTML;
    document.querySelector(".win__time").innerHTML = time;
    stopTimer();
  }
};

//перезапуск игры
const restart = () => {
  const cardData = randomize();
  const faces = document.querySelectorAll(".face");
  const cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none"; //пока происходит restart нельзя ничего нажимать
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].getAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
};

cardGenerator();

//кнопка перезапуска
restartBtn.addEventListener("click", () => {
  restart();
  restartTimer();
  counterText.innerHTML = 0;
  counter = 0;
});

//кнопка играть еще раз
playAgainBtn.addEventListener("click", () => {
  document.querySelector(".win").classList.remove("active");
  restart();
  restartTimer();
  counterText.innerHTML = 0;
  counter = 0;
});

//доделать:
//переворачивание карты неровное
//проверить на валидаторе
