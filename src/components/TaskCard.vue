<template>
  <div class="card" style="width: 18rem;">
    <div class="card-header">
    </div>
    <ul class="list-group list-group-flush">
      <router-link class="task-link" :to="{name: 'TaskDetails', params:{id: task.id}}">
      <li class="list-group-item"><b>{{task.title}}</b> on the {{task.date}} @ {{task.time}}</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Task Card',
  props: {
    task: Object
  }
}
</script>

<style scoped>
.card{
  margin: auto;
  border:1px solid black;
  width:40%;
  padding:10px;
}
</style>
