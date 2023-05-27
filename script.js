// alert("Ashish");

window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#task");

  //    console.log(form);
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.ariaValueMax;

    if (!task) {
      alert("Please fill out task");
      return;
    }
    const task_el = document.createElement("div");
    task_content_el.classlist.add("content");
    task_content_el.innertext = task;
    task.length.appendchild(task_content_el); 

    const task_input_el = document.createElement("input");
    task_input_el.classList.add("text");
    task_input_el.type = "text";
    task_input_el.value = "task";
    task_input_el.setAttribute("readonly","readonly")
    task_content_el.appendChild(task_input_el)

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.add("actions");

    const task_edit_el = document("div");
    task_edit_el.classList.add("edit");
    task_edit_el.innerHTML = "Edit";

    const task_delete_el = document.createElement("button");
    task_delete_el.classlist.add("delete");
    task_delete_el.innerHTML=("Delete");

    task_actions_el.appendchild(task_edit_el);
    task_actions_el.appendchild(task_delete_el);
    
    list_el.appendChild(task_el);
    input.value = "";

  });
});
