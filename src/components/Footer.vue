<template>
    <div>
      <ul id="filters">
        <li><a href="#" @click="display('All')">ALL</a></li>
        <li><a href="#" @click="display('Actived')">Active</a></li>
        <li><a href="#" @click="display('Completed')">Complete</a></li>
    </ul>
    </div>
</template>
<script>
export default {
    name: "Filters",
    methods: {
        display(flag) {
         this.$store.commit("updateDisplayItems", flag);
        }
  }
}
</script>
<style>

</style>
