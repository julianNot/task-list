<template>
  <div class="container">
    <div>
      <img alt="Vue logo" src="../../../assets/logo.png" width="150">
      <h2>Task List App</h2>
    </div>
    <TaskList />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import TaskList from '@/modules/todo/components/TaskList.vue'

export default {
  name: 'taskListView',
  components: {
    TaskList
  },
  methods: {
    ...mapActions('taskModule', ['loadTasks']),
  },
  created(){
    this.loadTasks()
  }
}
</script>
<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>