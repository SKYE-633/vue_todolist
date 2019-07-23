<template>
  <div>
    <div>
      姓名：{{getLoginUser}}
      <ol>
        <li>
          <a href="/" onclick="return confirm('确认返回吗')">返回</a>
        </li>
        <li>
          <router-link to="/TodoList">TodoList列表</router-link>
        </li>
        <li>
          <router-link to="/mine">我的</router-link>
        </li>
      </ol>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TodoList from "./TodoList";
export default {
  name: "Main",
  components: {
    TodoList
  },
  computed: {
    getLoginUser: function() {
      return this.$store.state.name;
    }
  }
};
</script>

<style>
</style>