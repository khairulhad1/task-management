document.addEventListener("DOMContentLoaded", () => {
  // Ambil nilai username yang disimpan di localStorage
  const usernameByInput = localStorage.getItem("usernameLoggedIn");

  // Perbarui innerText elemen dengan ID "usernameText"
  const usernameTextElement = document.getElementById("usernameText");
  if (usernameTextElement) {
    usernameTextElement.innerText = usernameByInput || "Default Username";
  }
});
