const KAYTTAJANIMI = "admin";
const SALASANA = "salasana";

const loginForm = document.getElementById("loginForm");
const message = document.getElementById("message");

function naytaKirjautunutNakyma(username) {
  document.body.innerHTML = "";

  const main = document.createElement("main");
  main.className = "login-card";

  const icon = document.createElement("div");
  icon.className = "icon";
  icon.textContent = "✅";

  const title = document.createElement("h1");
  title.textContent = `Tervetuloa, ${username}!`;

  const text = document.createElement("p");
  text.className = "subtitle";
  text.textContent = "Olet kirjautunut sisään.";

  const logoutButton = document.createElement("button");
  logoutButton.type = "button";
  logoutButton.textContent = "Kirjaudu ulos";

  logoutButton.addEventListener("click", () => {
    sessionStorage.removeItem("kirjautunut");
    location.reload();
  });

  main.append(icon, title, text, logoutButton);
  document.body.appendChild(main);
}

function naytaVirhe(viesti) {
  message.textContent = viesti;
  message.style.color = "#dc2626";
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  if (username === KAYTTAJANIMI && password === SALASANA) {
    sessionStorage.setItem("kirjautunut", "true");
    naytaKirjautunutNakyma(username);
  } else {
    naytaVirhe("Väärä käyttäjänimi tai salasana.");
  }
});

if (sessionStorage.getItem("kirjautunut") === "true") {
  naytaKirjautunutNakyma(KAYTTAJANIMI);
}