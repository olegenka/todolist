<template>
  <div class=todos>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <BackHome/>
    <hr>
    <AddTodo
        @add-todo="addTodo"
    />
    <ToDoList
        v-bind:todos="todos"
        @remove-todo="removeTodo"
    />
    <router-view/>
  </div>
</template>

<script>
import BackHome from '@/components/BackHome'
import ToDoList from '@/components/ToDoList'
import AddTodo from '@/components/AddTodo'

export default {
  name: 'app',
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.$axios.get("/todos")
        .then(result => {
          this.todos = result.data
          console.log(result)
        })
        .catch(error => {
          console.log("asd")
          console.log(error)
        })
    //TODO I left this just for ur patience
    // fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then(response => response.json())
    //     .then(json => {this.todos = json})
  },
  methods: {
    removeTodo(id) {
      this.$axios.delete('/todos/', {data: {"id": id}})
          .then(() => {
            {
              for (let i = 0; i < this.todos.length; i++) {
                if (this.todos[i].id === id) {
                  console.log("delete")
                  this.todos.splice(i, 1)
                }
              }
            }
          })
          .catch(error => console.log(error))
    },
    addTodo(newTodo) {
      console.log(newTodo.text)
      this.$axios.post("/todos/", {text: newTodo.text})
      .then(response => {this.todos.push(response.data)})
      .catch(error => console.log(error))
    }

  },
  components: {
    ToDoList, BackHome, AddTodo
  }
}
</script>