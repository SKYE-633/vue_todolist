<template>
<div>
  <div>
    <div>Jquery To Do List</div>
    <div>Simple Todo List with adding and filter by diff status</div>
    <input v-model="inputValue"/>
    <button @click="handleSubmit">Add</button>
  </div>
  <ul>
    
  </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      inputValue:'',
      list:[]
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue=''
    }
  }
}
</script>

<style>

</style>
