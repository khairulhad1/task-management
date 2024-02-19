document.addEventListener("DOMContentLoaded", () => {
  const taskManager = new Task();
  const existingTask = taskManager.getTasks();
  const taskWrapper = document.getElementById("taskWrapper");
  const taskWrapperEmpty = document.getElementById("taskWrapperEmpty");
  const formatTanggal = (timestamp) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Intl.DateTimeFormat("id-ID", options).format(timestamp);
  };
  const capitalizeFirstStr = (string) => {
    if (!string || string.length === 0) {
      return "";
    }
    const capitalizedFirstLetter = string.charAt(0).toUpperCase();
    const restOfString = string.slice(1);

    return capitalizedFirstLetter + restOfString;
  };

  const displayAllTask = (tasks = existingTask) => {
    if (tasks.length === 0) {
      taskWrapperEmpty.className =
        "flex justify-center items-center h-[420px] mx-auto";
      taskWrapper.className = "hidden";
      console.log("nothing task");
    } else {
      taskWrapper.innerHTML = "";
      taskWrapperEmpty.className = "hidden";
      console.log("task exis");

      tasks.map((task) => {
        const itemTask = document.createElement("div");
        itemTask.className =
          "flex justify-between bg-white p-5 w-full rounded-3xl";
        itemTask.innerHTML = `
        <div class="task-card flex flex-col gap-5">
        <div class="flex gap-3 items-center">
            <div
                class="md:w-[50px] w-[30px] h-[30px] md:h-[50px] flex shrink-0 items-center justify-center bg-[#BDEBFF] rounded-full">
                <img class="task-image" src="${task.src}" alt="icon">
            </div>
            <div class="flex flex-col">
                <p class="font-semibold md:font-bold text-base md:text-lg leading-5 md:leading-[27px]">${capitalizeFirstStr(
                  task.taskName
                )}</p>
                <p class="text-xs md:text-sm leading-4 md:leading-[21px] text-taskia-grey">Created at ${formatTanggal(
                  task.createdAt
                )}</p>
            </div>
        </div>
        <div class="flex md:gap-4 gap-1 font-semibold text-sm leading-[21px]">
            <div class="flex gap-1 items-center">
                <div class="flex shrink-0 w-5 h-5">
                    <img src="img/icons/layer.svg" alt="icon">
                </div>
                <p>${task.taskPriority}</p>
            </div>
           ${
             task.isCompleted === false
               ? ` <div class="flex gap-0 md:gap-1 text-xs items-center">
            <div class="flex shrink-0 w-5 h-5">
                <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                        stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path
                        d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                        stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                        stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <p class="whitespace-nowrap">in Progres</p>
        </div>`
               : `<div class="flex gap-0 md:gap-1 items-center text-taskia-green">
         <div class="flex shrink-0 w-5 h-5">
             <svg width="20" height="21" viewBox="0 0 20 21" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                 <path d="M4.29163 2.16663V18.8333" stroke="currentColor" stroke-width="2"
                     stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                 <path
                     d="M4.29163 3.83337H13.625C15.875 3.83337 16.375 5.08337 14.7916 6.66671L13.7916 7.66671C13.125 8.33337 13.125 9.41671 13.7916 10L14.7916 11C16.375 12.5834 15.7916 13.8334 13.625 13.8334H4.29163"
                     stroke="currentColor" stroke-width="2" stroke-miterlimit="10"
                     stroke-linecap="round" stroke-linejoin="round" />
             </svg>
         </div>
         <p>Completed</p>
     </div>`
           }
        </div>
    </div>
    <div class="flex flex-col md:flex-row items-center justify-center md:justify-end gap-x-3">
    <div class="flex flex-col md:flex-row items-center gap-y-3 md:gap-y-0">
        <a href="#" id="completedId-${task.id}"
            class="text-xs justify-center items-center text-white px-3 py-2 md:font-semibold bg-gradient-to-b from-[#977FFF] to-[#6F4FFF] rounded-full border border-taskia-background-grey ${
              task.isCompleted === true ? "hidden" : ""
            } min-w-[80px]">Complete</a>

        <a href="#" id="delete-${task.id}"
            class="md:ml-4 my-auto md:font-semibold text-xs text-center text-taskia-red border border-taskia-red px-3 py-2 rounded-full min-w-[80px]">Delete</a>
    </div>
</div>


</div>


`;
        taskWrapper.appendChild(itemTask);
        itemTask
          .querySelector(`#completedId-${task.id}`)
          .addEventListener("click", (e) => {
            e.preventDefault();
            const taskId = task.id;
            taskManager.setTaskCompleted(taskId);
            const updateTask = taskManager.getTasks();
            displayAllTask(updateTask);
          });
        itemTask
          .querySelector(`#delete-${task.id}`)
          .addEventListener("click", (e) => {
            e.preventDefault();
            const taskId = task.id;
            taskManager.deleteTask(taskId);
            const updateTask = taskManager.getTasks();
            displayAllTask(updateTask);
          });
      });
    }
  };

  displayAllTask();
});
