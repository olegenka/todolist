<template>
  <div>
    <h1>Home page</h1>
    <hr/>
    <button class="btn get back" @click="goHome">
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5.5a.5.5 0 0 0 0-1H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5z"/>
      </svg>
      Go Home
    </button>

    <button class="btn get" @click="goToTodos"> Todo list
      <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle-fill" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-11.5.5a.5.5 0 0 1 0-1h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5z"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "TopNavigationBar",
  methods: {
    goToTodos() {
      this.$router.push('/newVersion')
    },
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.get {
  color: lightcoral;
  font-size: xx-large;
}

</style>