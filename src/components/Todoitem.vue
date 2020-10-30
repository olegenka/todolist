<template>
  <div>
    <li>
    <span v-bind:class="{done:todo.completed}">
    <input type="checkbox" v-on:change="todo.completed=!todo.completed">
      <strong>{{ index + 1 }}</strong>
    {{ todo.text }}
      <button @click="EditTodo(todo.id,todo.text)" type="button" class="btn btn-primary">
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil-square" fill="currentColor"
             xmlns="http://www.w3.org/2000/svg">
          <path
              d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
         <path fill-rule="evenodd"
               d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
      </svg>
      </button>
    </span>
      <button class="nm btn btn-danger" v-on:click="$emit('remove-todo',todo.id)"> &times;</button>
    </li>
    <b-modal
        ref="EditTodoModal"
        title="Edit"
        @ok="sendRequest"
    >
      <input
          type="text" v-model="info.text"
      >
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        id: Object,
        text: Object
      },
    }
  },
  props: {
    todo: {
      type: Object,
      require: true
    },
    index: Number
  },
  methods:
      {
        EditTodo(id, text) {
          this.$refs['EditTodoModal'].show()
          this.info.id = id
          this.info.text = text
        },
        sendRequest() {
          console.log(this.info.text)
          this.$axios.post("/todos/", {text: this.info.text})
              .then(response => {
                for (let i = 0; i < this.todos.length; i++) {
                  if (this.todos[i].id === this.info.id) {
                    this.todos[i](response.data)
                  }
                }
              })
              .catch(error => console.log(error))
        }
      }
}

</script>
<style scoped>
.li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.nm {
  color: #fff;
  border-radius: 150%;
  font-size: 15px;
  margin-bottom: 5px
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>