// const menu = document.querySelector(".nav");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger = document.querySelector(".nav-toggler");

// function toggleMenu() {
//     if (menu.classList.contains("showMenu")) {
//         menu.classList.contains("showMenu");
//         hamburger.style.display="flex";
//     }else {
//         menu.classList.add("showMenu");
//         hamburger.style.display = "none";
//       }
// }

// hamburger.addEventListener("click", toggleMenu);

// menuItems.forEach(
//   function(menuItem) {
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )

const hamburger = document.querySelector(".nav-toggler");
const navMenu = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const server = "https://andelamybrandapi.herokuapp.com/";
let response;
let token;

const logoutElt = document.getElementById("logout-btn");
const loginElt = document.getElementById("login-btn");
logoutElt.style.display = "none";

token = localStorage.getItem("token");

if (!token) {
  logoutElt.style.display = "none";
} else {
  logoutElt.style.display = "inline-block";
  loginElt.style.display = "none";
}

function logout() {
    swal({
        title: "Log out",
        text: "Are you sure?",
        icon: "warning",
        buttons: true,
    
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            location.href = "../index.html";
          }
        })
        .then(() => {
          login_button.style.display = "inline-block";
        });
}

