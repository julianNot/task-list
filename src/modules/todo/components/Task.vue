<template>
  <div>
    <input @click="console.log('cambio')" type="checkbox" :value="isActive">
    <span>{{ title }}</span>
    <button>Borrar</button>
  </div>
</template>
<script>
export default {
  name: 'taskComponent',
  props: {
    title: '',
    isActive: true
  },
  data() {
    return {
      isActiveChange: false
    }
  },
  methods: {
    changedIsActive() {
      console.log('');
    }
  },
  
}
</script>
