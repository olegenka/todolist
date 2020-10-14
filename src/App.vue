<template>
  <div id="app">
    <h1>Todo APP</h1>
    <hr>
    <ToDoList
    v-bind:todos="todos"
    />
  </div>
</template>

<script>
import ToDoList from '@/components/ToDoList'
export default {
  name: 'App',
  data() {
    return {
    todos: [
          {id: 1, title: 'Купить хлеб', completed: false },
          {id: 2, title: 'Купить масло', completed: false },
          {id: 3, title: 'Купить пиво', completed: false }
       ]
   }
  },
  components: {
   ToDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
