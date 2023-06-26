<template>
  <div>
    <input v-model="titleNewTask" type="text">
    <button @click="addNewTask">Crear</button>
  </div>
</template>
<script>
export default {
  name: 'addTaskForm',
  data() {
    return {
      titleNewTask: ''
    }
  },
  methods: {
    addNewTask() {
      console.log('Add ',this.titleNewTask)
      this.$emit('task-added', this.titleNewTask)
      this.titleNewTask = ''
    }
  }
}
</script>
<style>
  
</style>