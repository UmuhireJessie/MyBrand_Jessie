const server = "https://andelamybrandapi.herokuapp.com/";

let token = localStorage.getItem("token");

async function getuserInfo() {
  response = await fetch(server + "userinfo", {
    headers: {
      Authorization: token,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

  const user = await response.json();
  if (token && user.data.role == "user") {
    location.href = "../../html/login.html";
  } else if (!token) {
    location.href = "../../html/login.html";
  }
}

getuserInfo();


