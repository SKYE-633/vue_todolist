<template>
<div>
  <div>
    <h2>Jquery To Do List</h2>
    <div>Simple Todo List with adding and filter by diff status</div>
    <input v-model = "inputValue"/>
    <button @click = "handleSubmit">Add</button>
  </div>
  <ol>
    <todo-item 
    v-for = "(item, index) of list"  
    :key = "index"
    :content = "item"
    :index = "index"
    @delete = "handleDelete">
    </todo-item>
  </ol>
  <div>
    <button @click="showAll">ALL</button>
    <button @click="nothing">Active</button>
    <button @click="allCompleted">Complete</button>
  </div>
</div>
</template>

<script>
import TodoItem from './components/TodoItem'

export default {
  components: {
    'todo-item': TodoItem
  },
  data () {
    return {
      inputValue: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push(this.inputValue)
      this.inputValue = ''
    },
    handleDelete (index) {
      this.list.splice(index, 1)
    },
    showAll () {

    },
    nothing () {
      this.list=''
    },
    allCompleted () {

    }
  }
}
</script>

<style>

</style>
