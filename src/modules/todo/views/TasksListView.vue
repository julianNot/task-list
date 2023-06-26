<template>
  <img alt="Vue logo" src="../../../assets/logo.png">
  <TaskList />
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
