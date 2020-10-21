<template >
  <div class = todos>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <BackHome />
    <hr>
    <ToDoList
        v-bind:todos="todos"
        @remove-todo="removeTodo"
    />
    <router-view />
  </div>
</template>

<script>
import BackHome from '@/components/BackHome'
import ToDoList from '@/components/ToDoList'
export default {
  name: 'app',
  data() {
    return {
      todos: [
        {id: 1, title: 'Купить хлеб', completed: false },
        {id: 2, title: 'Купить масло', completed: false },
        {id: 3, title: 'Купить пиво', completed: false }
      ]
    }
  },
  mounted(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {this.todos = json})
  },
  methods:{
    removeTodo(id){
      this.todos=this.todos.filter(t=>t.id !== id)
    }
  },
  components: {
    ToDoList,BackHome
  }
}
</script>