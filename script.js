// // alert("Ashish");

// window.addEventListener("load", () => {
//   const form = document.querySelector("#new-task-form");
//   const input = document.querySelector("#new-task-input");
//   const list_el = document.querySelector("#task");

//   //    console.log(form);
//   form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     const task = input.ariaValueMax;

//     if (!task) {
//       alert("Please fill out task");
//       return;
//     }
//     const task_el = document.createElement("div");
//     task_content_el.classlist.add("content");
//     task_content_el.innertext = task;
//     task.length.appendchild(task_content_el); 

//     const task_input_el = document.createElement("input");
//     task_input_el.classList.add("text");
//     task_input_el.type = "text";
//     task_input_el.value = "task";
//     task_input_el.setAttribute("readonly","readonly")
//     task_content_el.appendChild(task_input_el)

//     const task_actions_el = document.createElement("div");
//     task_actions_el.classList.add("actions");

//     const task_edit_el = document("div");
//     task_edit_el.classList.add("edit");
//     task_edit_el.innerHTML = "Edit";

//     const task_delete_el = document.createElement("button");
//     task_delete_el.classlist.add("delete");
//     task_delete_el.innerHTML=("Delete");

//     task_actions_el.appendchild(task_edit_el);
//     task_actions_el.appendchild(task_delete_el);
    
//     list_el.appendChild(task_el);
//     input.value = "";

//   });
// });
window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form");
	const input = document.querySelector("#new-task-input");
	const list_el = document.querySelector("#tasks");
	const completed_el = document.querySelector("#completed");

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		const task = input.value;

		const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);
		if (!task) {
			       alert("Please fill out task");
			       return;
			     }

		const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		//checkbox for task completed
		const task_completed_el = document.createElement('input');
		task_completed_el.classList.add('checkbox');
		task_completed_el.type = 'checkbox';



		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);
		task_actions_el.appendChild(task_completed_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});

		//checkbox for task completed
		task_completed_el.addEventListener('change', (e) => {
			if (task_completed_el.checked) {
				completed_el.appendChild(task_el);
				list_el.removeChild(task_el);
			}
			else if (!task_completed_el.checked) {
				list_el.appendChild(task_el);
				completed_el.removeChild(task_el);
			}
		});
	});
});