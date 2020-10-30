<template >
  <form v-on:submit.prevent = "onSubmit">
    <div class="input-group mb-3">
      <input type = "text" v-model = "title" class="form-control">
      <div class="input-group-append">
        <button type = "submit" class="btn btn-primary" >Add</button>
      </div>
    </div>
  </form>
</template>


<script>
export default{
   data()
   {
     return{
       title: ''
     }
  },
  methods:{
    onSubmit(){
      console.log('Submit', this.title)
      if (this.title.trim()){
        const newTodo = {
          text:this.title
        }

        this.$emit('add-todo', newTodo)
        this.title = ''
      }
    }
  }
}
</script>