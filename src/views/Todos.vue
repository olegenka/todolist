<template>
  <div>
    <BackHome />
    <hr>
    <ToDoList
        v-bind:todos="todos"
    />
    <router-view />
  </div>
</template>

<script>
import BackHome from '@/components/BackHome'
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
    ToDoList,BackHome
  }
}
</script>