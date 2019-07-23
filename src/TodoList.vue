<template>
<div id="app">
  <Header></Header>
  <Items></Items>
  <List></List>
  <Footer></Footer>
</div>
</template>

<script>
import Header from './components/Header.vue';
import Items from './components/Items.vue';
import List from './components/List.vue';
import Footer from './components/Footer.vue';
export default {
  name:"app",
  components: {
    Header,
    Items,
    List,
    Footer
  }，
  mounted() {
    this.$store.dispatch("getList");
  }
}
</script>

<style>
@import url("./css/TodoList.css");
</style>
