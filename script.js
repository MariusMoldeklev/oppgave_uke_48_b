// const button = document.querySelector('button');
// const menu = document.querySelector('.menu-background'); // Corrected the class name

// button.addEventListener('click', () => {
//     menu.classList.toggle('activated');
// });

// const menuButtons = document.querySelectorAll('.menu-button'); // Corrected the class name

// const menuButtonArray = Array.from(menuButtons);

// menuButtonArray.forEach(button =>{

//     button.addEventListener('click',()=>{

//         closeAnotherButtons(button);
//         button.classList.toggle('activated');
//     });
// });

// function closeAnotherButtons(activeButton) {
//     menuButtonArray.forEach(button => {

//         if(button != activeButton) {
    
//             if(button.classList.contains('activated')) {
//                 button.classList.remove('activated');
//             }
//         }
//     });
// }

document.addEventListener("DOMContentLoaded", () => {
    const customSelectMenu = document.querySelector(".custom-select-menu");
    const customSelectBtn = customSelectMenu.querySelector(".custom-select-btn");
    const customSelectOptions = customSelectMenu.querySelector(".custom-select-options");
  
    customSelectBtn.addEventListener("click", () => {
      customSelectMenu.classList.toggle("active");
    });
  
    customSelectOptions.addEventListener("click", (event) => {
      if (event.target.classList.contains("custom-select-option")) {
        const selectedOptionText = event.target.innerText;
        customSelectBtn.querySelector(".custom-select-btn-text").innerText = selectedOptionText;
        customSelectMenu.classList.remove("active");
      }
    });
  });
  