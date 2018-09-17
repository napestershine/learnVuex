import Vue from 'vue'
import Vuex from 'vuex'
import TasksModule from './modules/tasks'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    TasksModule
  }
})

export default store
