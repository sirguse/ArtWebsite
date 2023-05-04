const splash = document.querySelector(".Intro"); /* Tworzenie efektu intro */

document.addEventListener("DOMContentLoaded", (e)=>{
  setTimeout(()=>{
    splash.classList.add('xd');
  }, 2000);
})


function showSecondPage() {
  var firstPage = document.querySelector('.FirstPage');
  var secondPage = document.querySelector('.SecondPage');
  
  firstPage.style.display = 'none';
  secondPage.style.display = 'block';
}




