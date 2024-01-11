const inputBox = document.getElementById("task__input");
const tasksList = document.getElementById("tasks__list");

const removeTask = e => {
	e.target.closest(".task").remove();
}

const addTask = () => {
	const taskText = inputBox.value.trim()
	inputBox.value = "";
	
	if(taskText == '') return

	tasksList.innerHTML +=
	`<div class="task">
		<div class="task__title">
			${taskText}
		</div>
		<a href="#" class="task__remove">&times;</a>
	</div>`;

	e.preventDefault();
}

tasksList.addEventListener("click", (e) => {
	if (e.target.classList.contains('task__remove')) e.target.closest(".task").remove();
})

document.getElementById("tasks__add").addEventListener("click", addTask);
// inputBox.addEventListener("keypress", e => {
// 	if (e.keyCode == 13) addTask(e);
// });