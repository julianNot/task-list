export const setTasks =  (state, tasks) => {
  state.tasks = [ ... state.tasks, ...tasks]
  state.isLoading = false
}

export const addNewTask = (state, task) => {
  state.tasks.push(task)
}