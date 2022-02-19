//1. добавить изменение темы через document.querySelector('.page').classList.remove('light-theme'); и document.querySelector('.page').classList.add('dark-theme')

// пример
let page = document.querySelector(".page");
let themeButton = document.querySelector(".theme-button");

themeButton.onclick = function () {
  page.classList.toggle("light-theme");
  page.classList.toggle("dark-theme"); //или одну тему?
};

//2.
