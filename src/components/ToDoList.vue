<template>
 <div>
   <ul>
    <Todoitem

        v-for="todo of todos"
        v-bind:key="todo.id"
        v-bind:todo="todo"
        v-on:remove-todo="removeTodo"
    />
   </ul>
 </div>
</template>

<script>
import Todoitem from '@/components/Todoitem'
export default {
  props: ['todos'],
  components: {
    Todoitem
  },
  method: {
    removeTodo(id){
      console.log(id)
     }
    }
}
</script>

<style scoped>

ul {
  list-style: none ;
  margin:0;
  padding: 0;
}
</style>