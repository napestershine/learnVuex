export default {
  getTasks ({ commit }, payload) {
    commit('clearTasks')

    return new Promise((resolve, reject) => {
      this.$axios.$get(payload)
        .then((response) => {
          commit('setTasks', response)
          resolve()
        }).catch((err) => {
          console.log(err)
          reject(err)
        })
    })
  },
  getTask ({commit}, payload) {
    return new Promise((resolve, reject) => {
      this.$axios.$get(`/tasks/${payload}`)
        .then(response => {
          commit('setTask', response)
          resolve(response)
        })
        .catch(err => {
          console.log(err.response)
          reject(err)
        })
    })
  }
}
