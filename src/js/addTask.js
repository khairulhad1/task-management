document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("taskForm");
  const taskManager = new Task();

  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const selectedProject = document.querySelector(
      'input[name="Projects"]:checked'
    );
    const selectedImage = selectedProject.closest("label").querySelector("img");
    const src = selectedImage.src.split("/public/")[1];
    const taskData = {
      taskName: document.getElementById("taskName").value,
      taskPriority: document.getElementById("taskPriority").value,
      createdAt: Date.now(),
      src: src,
    };
    const result = taskManager.saveTask(taskData);

    result === true
      ? (window.location.href = "../public/tasks.html")
      : alert("Gagal menyimpan task.");
  });
});

function Open(open = true) {
  const addToProjectContent = document.querySelector(".addToProjectContent");
  if (open) {
    addToProjectContent.classList.remove("left-[-300px]");
  } else {
    addToProjectContent.classList.add("left-[-300px]");
  }
}

const radioInputs = document.querySelectorAll(
  '.addToProjectContent input[type="radio"]'
);

radioInputs.forEach((input) => {
  input.addEventListener("change", function () {
    if (this.checked) {
      Open(false);
    }
  });
});

document.addEventListener("click", function (event) {
  const addToProjectContent = document.querySelector(".addToProjectContent");
  const isClickInsideaddToProjectContent = addToProjectContent.contains(
    event.target
  );
  if (!isClickInsideaddToProjectContent) {
    // Jika klik dilakukan di luar area .addToProjectContent, tutup .addToProjectContent
    Open(false);
  }
});

document
  .getElementById("btnAddToproject")
  .addEventListener("click", function (event) {
    event.stopPropagation(); // Mencegah penyebaran event ke atas ke elemen lain
    Open(event);
  });
