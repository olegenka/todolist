<template>
  <div id="app" class = "todos">
    <h1>ToDoApp</h1>
    <p><img src="/767ca771755f4675d4063c03e17c8595-medical-checklist-icon-by-vexels.png" height="150" width="150" ></p>
   <hr>

    <router-view />
  </div>
</template>

<script>
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
.todos{
  background: azure;
}
</style>
