<template>
  <div class="card">
    <input @click="setComplete(task.id)" type="checkbox" :value="task.isActive" class="checkmark">
    <span :class="task.isActive? 'blink' : ''">{{ task.title }}</span>
    <button class="btn btn-delete" @click="deleteTask(task.id)">Borrar</button>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'taskComponent',
  props: {
    task: null,
  },
  methods: {
    /* 
      Se obtienen las Actions de Vuex
      Para eliminar una tarea o
      Cabmiar el estado de la misma
    */
    ...mapActions('taskModule', ['deleteTask', 'setComplete']),
  },
  
}
</script>

<style scoped>
.card {
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 5px 10px;
  box-shadow: 3px 5px 15px 0px rgba(0,0,0,0.75);
  margin: 20px 0;
  width: 400px;
}

.checkmark {
  height: 20px;
  width: 20px;
  background-color: #eee;
}

.blink {
  text-decoration: line-through;
}
</style>
