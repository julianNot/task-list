<template>
  <div>
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
  <AddTaskFormVue @task-added="handleTaskAdded" />
</template>
<script>
import { v4 as uuidv4 } from 'uuid';
import { mapActions, mapState } from 'vuex'
import AddTaskFormVue from './AddTaskForm.vue'
import Task from './Task.vue'

export default {
  name: 'taskList',
  components: { 
    AddTaskFormVue,
    Task
  },
  methods: {
    /* 
      Obtiene la Action de agregar una nueva tarea
    */
    ...mapActions('taskModule', ['addNewTask']),

    /* 
      Captura el valor emitido por el componente Hijo
      Crea una nueva tarea, guardandola en el State de Vuex
    */
    handleTaskAdded(taskTitle) {
      const newTask = {
        id: uuidv4(),
        title: taskTitle,
        isActive: false
      };
      this.addNewTask(newTask)
    },
  },
  computed: {
    /* 
      Obtiene directamente del state
    */
    ...mapState('taskModule',['tasks']),
  },
  
}
</script>
<style scoped>
</style>