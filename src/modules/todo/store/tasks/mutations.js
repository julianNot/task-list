export const setTasks =  (state, tasks) => {
  state.tasks = [ ... state.tasks, ...tasks]
  state.isLoading = false
}

export const addNewTask = (state, task) => {
  state.tasks.push(task)
}

export const deleteTask = (state, idTask) => {
  state.tasks = state.tasks.filter(task => task.id !== idTask);
}

export const setComplete = (state, idTask) => {
  const index = state.tasks.map( t => t.id  ).indexOf( idTask )
    state.tasks[index].isActive = !state.tasks[index].isActive
}