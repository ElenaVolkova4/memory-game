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
    //-добавляем классы
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";

    //элемент face - соответствующая картинка
    face.src = item.imgSrc;

    //размещаем карточки
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
  });
};
cardGenerator();
