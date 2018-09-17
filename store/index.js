import Vuex from 'vuex'
import TasksModule from './modules/tasks'

const store = () => {
  return new Vuex.Store({
    modules: {
      TasksModule
    }
  })
}

export default store
