'use strict'
let listPic = document.querySelector(".list-picture");
let list = document.querySelector(".list");

let btnNext = document.getElementById("btnNext");
let btnPrev = document.getElementById("btnPrev");
let all = document.querySelectorAll(".item");

let n = all.length;

btnNext.addEventListener("click", () => {
  for (let i = 0; i < n; i++) {
    all[i].classList.remove("activNext");
    all[i].classList.remove("activPrev");
    list.children[i].style.zIndex = 0;
  }

  list.children[0].classList.add("activNext");
  list.appendChild(list.firstElementChild);
  ///////////////////////lllllll//////////////////////////
  ///////////////////////////////////////

  for (let i = 0; i < n; i++) {
    listPic.children[i].classList.remove("moveLeft");
    listPic.children[i].classList.remove("moveRight");
  }

  listPic.children[0].classList.add("moveRight");
  listPic.classList.add("moveWidth");

  listPic.appendChild(listPic.firstElementChild);
  btnNext.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth");
    listPic.classList.remove("moveWidthBack");
    btnNext.disabled = false;
  }, 1000)

});
//////////////////////////
///////////////////////////
// /////////////////////prev

btnPrev.addEventListener("click", () => {
  for (let i = 0; i < n; i++) {
    all[i].classList.remove("activPrev");
    all[i].classList.remove("activNext");
    list.children[i].style.zIndex = 0;
  }

  list.children[4].style.zIndex = 5;
  list.children[4].classList.add("activPrev");
  list.insertBefore(list.lastElementChild, list.firstElementChild);

  /////////////////////////////////llllllllllllllllll///////////////////////////
  ////////////////////////
  for (let i = 0; i < n; i++) {
    listPic.children[i].classList.remove("moveLeft");
    listPic.children[i].classList.remove("moveRight");
  }
  listPic.classList.add("moveWidthBack");

  listPic.insertBefore(listPic.lastElementChild, listPic.firstElementChild);
  listPic.children[0].classList.add("moveLeft");

  btnPrev.disabled = true;
  setTimeout(() => {
    listPic.classList.remove("moveWidth");
    listPic.classList.remove("moveWidthBack");
    btnPrev.disabled = false;
  }, 1000)

});


// cube

const productsBoxBody = document.querySelectorAll('.productsBoxBody');


productsBoxBody.forEach((productsBoxBody) => {
  const cube = productsBoxBody.querySelector('.cube');
  const shadow = productsBoxBody.querySelector('.shadowCube');
  let isDragging = false;
  let startX, startY;
  let rotationX = 0, rotationY = 0;

  cube.classList.add('add-rotateY')
  productsBoxBody.addEventListener('mousedown', (e) => {

    isDragging = !isDragging;

    if (isDragging) {
      startX = e.clientX;
      startY = e.clientY;
    }


    if (isDragging) {
      cube.classList.remove('add-rotateY')

    } else {
      cube.classList.add('add-rotateY')

    }

  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    let deltaX = e.clientX - startX;
    let deltaY = e.clientY - startY;

    rotationY += deltaX * 0.5;
    rotationX -= deltaY * 0.5;

    cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;

    let shadowOffsetX = rotationY * 0.1;
    let shadowOffsetY = rotationX * 0.1;

    const shadowX = Math.max(Math.min(shadowOffsetX, 10), -10);
    const shadowY = Math.max(Math.min(shadowOffsetY, 10), -10);

    shadow.style.transform = `translate(${shadowX}px, ${Math.abs(shadowY)}px)`;


    startX = e.clientX;
    startY = e.clientY;
  });
  document.addEventListener('mouseup', (e) => {
    isDragging = false;
    cube.classList.add('add-rotateY')

  });

});

//////////////////////scrol
///////////
function revealOnScroll() {
  const box = document.querySelector('.samplesBox');
  const boxBodies = document.querySelectorAll('.samplesBoxBody');
  const windowHeight = window.innerHeight;
  const boxTop = box.getBoundingClientRect().top;
  const revealPoint = 300;

  if (boxTop < windowHeight - revealPoint) {
    boxBodies.forEach((body, index) => {
      setTimeout(() => {
        body.classList.add('scrollActive');
      }, index * 100);
    });
  }
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
