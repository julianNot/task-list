
export const loadTasks = ({commit}) => {
  const taskListLocalStore = localStorage.getItem('taskList')
  const tasks = (taskListLocalStore)? taskListLocalStore : [{title: 'task1', isActive: true}]

  commit('setTasks', tasks)
}

export const addNewTask = ({commit}, task) => {
  commit('addNewTask', task);
}