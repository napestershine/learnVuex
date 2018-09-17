<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm12 md12>
      <div class="text-xs-center">
        <h1>Toto List</h1>
        <v-btn color="success" @click="completeAll()">Complete All</v-btn>
      </div>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task.body }}
        </li>
      </ul>
      
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      tasks: 'TasksModule/getTasks',
      task: 'TasksModule/getTask'
    })
  }
}
</script>

