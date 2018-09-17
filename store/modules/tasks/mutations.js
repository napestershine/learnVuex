export default {
  clearTasks: state => {
    state.tasks = []
  },
  setTasks: (state, payload) => {
    state.tasks = payload
  },
  setTask: (state, payload) => {
    state.task = payload
  }
}
