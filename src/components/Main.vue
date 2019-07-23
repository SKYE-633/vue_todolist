<template>
  <div style="text-align:center;">
    <input type="text" v-model="userName" placeholder="请输入姓名" />
    <br />
    <br />
    <button @click="login">开始使用</button>
  </div>
</template>
<script>
export default {
  name: "Main",
  methods: {
    login() {
      this.$store.commit("addUserName", this.userName);
      this.$router.push({ path: "/home" });
    }
  }
};
</script>
<style></style>