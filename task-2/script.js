"use strict";

// Current image and date
const img = document.querySelectorAll(".image-item");

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
infoDate.textContent = "Дата та час: " + "  " + formattedDate;

// open/close modal
function openImg(img) {
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");

  modal.style.display = "block";
  modalImage.style.borderRadius = "10px";
  modalImage.src = img.src;
}

function closeImg() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}
