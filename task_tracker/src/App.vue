<template>
  <div class="w-3/4 mx-auto my-6 p-6 border border-solid border-black bg-gray-50">
    <Header
      title="Task Tracker"
      @toggleForm="toggleForm"
    />
    <FormNewTask
      v-if="showForm"
      @saveTask="saveTask"
    />
    <Tasks
      :tasks="tasks"
      @delete-task="deleteTask"
      @toggleReminder="toggleReminder"
    />
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Tasks from './components/Tasks.vue'
import FormNewTask from './components/FormNewTask.vue'

export default {
  name: 'App',
  components: {
    Header,
    Tasks,
    FormNewTask,
  },
  data() {
    return {
      tasks: [],
      showForm: false,
    }
  },
  methods: {
    deleteTask(id){
      this.tasks = this.tasks.filter(task => task.id !== id )
    },

    toggleReminder(id) {
      this.tasks.map(task => {
        task.id === id ? task.reminder = !task.reminder : task.reminder
      })
    },

    saveTask(task) {
      this.tasks = [...this.tasks, task]
    },

    toggleForm() {
      this.showForm = !this.showForm
    }
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: 'Doctor Appointment',
        day: 'March 1st at 2:30pm',
        reminder: true,
      },
      {
        id: 2,
        text: 'Meeting at School',
        day: 'March 3rd at 3:30pm',
        reminder: false,
      },
      {
        id: 3,
        text: 'Food Shopping',
        day: 'March 5th at 9:30am',
        reminder: true,
      },
    ];
  }
}
</script>