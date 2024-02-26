

<template>
<main>


<!--heading -->

  <header>
    <img src="./assets/flowers1.jpg" alt="nature logo">
    <h1> task using pinia</h1>
    

  </header>


  <!--new task form-->
  <div class="new-task-form">
    <TaskForm/>
  </div>


  <!--filter-->
  <nav class="filter">
    <button @click="filter='all '">all tasks</button>
    <button @click="filter='all '">fav  tasks</button>

  </nav>
  <!--task list-->
          
  <div class="task-list" v-if="filter=== 'all'">
    <p>list of task  :{{ taskStore.totalCount }}</p>
    <div v-for="task in taskStore.tasks">
      <TaskDetails :task="task"/>
    </div>
  </div>


  <div class="task-list" v-if="filter==='favs'">
    <p>list of task  {{ taskStore.favCount }} you have that many favours to do </p>
    <div v-for="task in taskStore.favs">
      <TaskDetails :task="task"/>
       
    
    </div>
  </div>



  
</main>



  
</template>
<script>import { ref } from 'vue'
import TaskDetails from './components/TaskDetails.vue'
    import { useTaskStore } from './stores/TaskStore.js'
     export default{
      components:{TaskDetails},
      setup(){
          const taskStore = useTaskStore()
          const filter=ref('all')

          return {taskStore, filter}
      }
     }


</script>

<style>
body{
  text-align: center;
}
img{

  width: 100px;
  height: 50px;
  align-items: center;
  margin: 0 auto;
}
h1{
  align-items: center;
  margin: 20px ;

}

</style>

