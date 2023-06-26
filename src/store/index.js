import { createStore } from 'vuex'

import taskModule from '../modules/todo/store/tasks'

const store = createStore({
  modules: {
    taskModule
  }
})

export default store
