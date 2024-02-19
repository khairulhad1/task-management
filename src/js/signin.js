document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("userForm");
  const userManager = new User();
  const users = userManager.getUsers();

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const usernameByInput = document.getElementById("username").value;

    const result = userManager.signinUser(usernameByInput);

    // Periksa apakah username sudah ada di dalam data pengguna
    const existingUser = users.find(
      (user) => user.username === result.username
    );

    if (!existingUser) {
      alert("nama yang anda masukkan belum terdaftar");
    } else {
      window.location.href = "../public/tasks.html";
      localStorage.setItem("usernameLoggedIn", usernameByInput);
      document.getElementById("usernameText").innerText = usernameByInput;
    }
  });
});
