<template>
<div class="class" style="width: 24rem;">
  <div class="card-header">
    Tasks
  </div>
   <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
   <div class="pagination">
   <router-link id="prev"
      :to="{ name: 'TaskList', query: { page: page - 1}}"
      v-if="page != 1"> Prev Page
    </router-link>

    <router-link id="next"
      :to="{ name: 'TaskList', query: { page: page + 1}}"
      v-if="hasNextPage"> Next Page
    </router-link>
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import TaskCard from '@/components/TaskCard.vue'

// import axios from 'axios'

import TasksService from '@/services/TasksService.js'
import { watchEffect } from 'vue'

export default {
  name: 'Task List',
  props: ['page'],
  components: {
    TaskCard
  },
  data () {
    return {
      totalTasks: 0,
      tasks: null /* [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description for task 1',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description for task 1',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description for task 1',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        }
      ] */
    }
  },
  created () {
    watchEffect(() => {
    // axios.get('https://my-json-server.typicode.com/benjaminmalta/MyJSONServerCSS/tasks')
    // TasksService.getTasks()
      console.log('Page is ' + this.page)
      TasksService.getTasks(2, this.page)
        .then(response => {
          this.tasks = response.data
          this.totalTasks = response.headers['x-total-count']
        })
        .catch(error => {
          console.log('ERRORS' + error)
        })
    })
  },
  computed: {
    hasNextPage () {
      var totalPages = Math.ceil(this.totalTasks / 2)
      return this.page < totalPages
    }
  }
}
</script>
<style scoped>
.class{
  margin: auto;

  border-color: red;
}

.pagination{
  display: flex;
  width: 382px;
}
.pagination a{
  flex: 1;
  text-decoration: none;
  color: black;
}

#prev{
  text-align: left;
}
#next{
  text-align: right;
}

</style>
