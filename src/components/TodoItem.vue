<template>
<div>
  <li @click="handleDelete">
    <input type="checkbox" v-model="itemIsCompleted" />
    {{content}}
  </li>
</div>
</template>

<script>
export default {
  props: ['content', 'index'],
  data () {
    return {
      itemIsCompleted : ''
    }
  },
  methods: {
    handleDelete () {
      this.$emit('delete',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
