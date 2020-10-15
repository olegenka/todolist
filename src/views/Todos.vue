<template>
  <div>
    <h2>Todo APP</h2>
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