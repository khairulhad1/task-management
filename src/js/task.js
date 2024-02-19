class Task {
  constructor() {
    this.tasks = this.getTasks();
  }

  getTasks() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  }
  saveTask(taskData) {
    const newTask = {
      id: Date.now(),
      isCompleted: false,
      ...taskData,
    };

    this.tasks.push(newTask);

    localStorage.setItem("tasks", JSON.stringify(this.tasks));

    const success = true;
    return success;
  }

  setTaskCompleted(taskId) {
    const tasks = this.getTasks();
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.isCompleted = true;
      }
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  deleteTask(taskId) {
    let tasks = this.getTasks();
    tasks = tasks.filter((task) => task.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}
