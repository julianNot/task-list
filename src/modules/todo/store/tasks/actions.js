
export const loadTasks = ({commit}) => {
  const taskListLocalStore = localStorage.getItem('taskList')
  const tasks = (taskListLocalStore)? taskListLocalStore : []

  commit('setTasks', tasks)
}

export const addNewTask = ({commit}, task) => {
  commit('addNewTask', task);
}

export const deleteTask = ({commit}, idTask) => {
  commit('deleteTask', idTask)
}

export const setComplete = ({commit}, idTask) => {
  commit('setComplete', idTask)
}