document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
      username: document.getElementById("username").value,
    };
    const result = userManager.saveUser(userData);

    result === true
      ? (window.location.href = "../public/signin.html")
      : alert("Gagal menyimpan pengguna. Silakan coba lagi.");
  });
});
