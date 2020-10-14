<template>
  <li>
    {{todo.title}}
    {{todo.id}}
  </li>
</template>

<script>
export default
{
  props:{
    todo:{
      type:Object,
          require:true

    }
  }
}

</script>