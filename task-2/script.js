"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelectorAll("img");

  const imgLenght = img.length;

  let currentDate = new Date();
  let formattedDate = currentDate.toLocaleDateString("uk-UA", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const infoLenght = document.getElementById("currentImg");
  infoLenght.textContent = "Кількість зображень:" + " " + imgLenght;

  const infoDate = document.getElementById("currentDate");
  infoDate.textContent = "Дата та час:" + " " + formattedDate;
});
