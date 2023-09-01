//
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const question = document.querySelectorAll('.faq');

question.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault();
      // Handle form submission here (e.g., send data to the server).
      // You can add AJAX or other logic to handle the form submission.
      // For this example, we're just preventing the default behavior.
  });
});


// // Define the function to change the color
// function changeTabColor(event) {
//   // Reset the color of all tabs to their default color
//   const tabs = document.querySelectorAll('.topnav'); // Change 'links' to the actual class or selector of your navigation tabs
//   tabs.forEach(tab => {
//     tab.style.backgroundColor = 'grey'; // Reset the background color
//   });

//   // Change the color of the clicked tab
//   const clickedTab = event.target;
//   clickedTab.style.backgroundColor = 'blue'; // Replace 'your-chosen-color' with the color you want
// }

// // Attach the function to each navigation tab
// const tabs = document.querySelectorAll('.topnav'); // Change 'links' to the actual class or selector of your navigation tabs
// tabs.forEach(tab => {
//   tab.addEventListener('click', changeTabColor);
// });
  


const passwordInput = document.getElementById('password');
const message = document.getElementById('message');

passwordInput.addEventListener('input', function() {
  const password = passwordInput.value;
  const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

  if (valid) {
    message.textContent = 'Password is valid';
    message.className = 'valid';
  } else {
    message.textContent = 'Password is invalid';
    message.className = 'invalid';
  }
});