<template>
<div>
  <li @dblclick="edit">
    <input type="checkbox" v-model="itemIsCompleted" />
    <input v-if="show" @click="handleClick"/>
    {{content}}
  </li>
</div>
</template>

<script>
export default {
  props: ['content', 'index'],
  data () {
    return {
      itemIsCompleted: '',
      show: false
    }
  },
  methods: {
    handleClick () {
      this.$emit('delete', this.index)
    },
    edit () {
      this.inputValue=''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
