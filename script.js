const changeTheme = document.getElementById("changeTheme");
const bodyEl = document.querySelector(".body");

changeTheme.addEventListener("change", () => {
  console.log(changeTheme, bodyEl);

  bodyEl.classList.toggle("toggle-theme");
});
