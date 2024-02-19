class User {
  constructor() {
    this.users = this.getUsers() || [];
  }
  saveUser(userData) {
    const newUser = {
      id: Date.now(),
      ...userData,
    };

    this.users.push(newUser);

    localStorage.setItem("users", JSON.stringify(this.users));

    const success = true;
    return success;
  }

  signinUser(username) {
    return {
      success: true,
      username,
    };
  }

  getUsers() {
    return JSON.parse(localStorage.getItem("users")) || [];
  }
}
