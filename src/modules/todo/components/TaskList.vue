<template>
  <Task v-for="task in tasks" :key="task.id" :title="task.title" :isActive="task.isActive" />
  <AddTaskFormVue @task-added="handleTaskAdded" />
</template>
<script>
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
    ...mapActions('taskModule', ['addNewTask']),
    handleTaskAdded(taskTitle) {
      const newTask = {
        title: taskTitle,
        isActive: false
      };
      this.addNewTask(newTask)
    },
  },
  computed: {
    ...mapState('taskModule',['tasks']),
  },
  
}
</script>
<style scoped>
  
</style>