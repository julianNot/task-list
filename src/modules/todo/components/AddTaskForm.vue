<template>
  <div>
    <input placeholder="Ingresa tu nueva tarea" v-model="titleNewTask" class="input-task" type="text">
    <button class="btn btn-create" @click="addNewTask">Crear</button>
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
    /* 
      Emitir el valor ingresado por el usuario al componente padre
      para crear una nueva tarea
    */
    addNewTask() {
      if(this.titleNewTask) {
        this.$emit('task-added', this.titleNewTask)
        this.titleNewTask = ''
      }
    }
  }
}
</script>