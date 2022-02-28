//1. добавить изменение темы через document.querySelector('.page').classList.remove('light-theme'); и document.querySelector('.page').classList.add('dark-theme')

// пример
// let page = document.querySelector(".page");
// let themeButton = document.querySelector(".theme-button");

// themeButton.onclick = function () {
//   page.classList.toggle("light-theme");
//   page.classList.toggle("dark-theme"); //или одну тему?
// };

//2.в коце выводить: сколько движений совершено за сколько времени

//3. правильные ответы подсвечиваются?

// функция переворачивания карты

("");

//1 способ
const section = document.querySelector("section");
let counter = 0;
const counterText = document.querySelector(".counter");
const restartBtn = document.querySelector(".restartBtn");

restartBtn;

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
  // console.log(cardData);
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

const cardGenerator = () => {
  const cardData = randomize();
  console.log(cardData);

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
      console.log("wrong");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 2000);
      });
    }
    //почему не срабатывет???
    counter++;
    counterText.innerHTML = counter;
    console.log(counter);
  }
};

//restart
const restart = () => {
  const cardData = randomize();
  const faces = document.querySelectorAll(".face");
  const cards = document.querySelectorAll(".card");
  cardData.forEach((card, index) => {
    cards[index].classList.remove("toggleCard");
  });
};

cardGenerator();

//вешаем на кнопку
restartBtn.addEventListener("click", () => {
  restart();
});

//доделать:
//переворачивание карты неровное
