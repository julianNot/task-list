<template>
  <TasksListView />
</template>

<script>
import TasksListView from '@/modules/todo/views/TasksListView.vue'

export default {
  name: 'App',
  components: {
    TasksListView
  }
}
</script>