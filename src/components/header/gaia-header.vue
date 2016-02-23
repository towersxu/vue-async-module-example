<template>
  <div class="header">
    <div class="container">
      <div class="logo sp i138"><a href="/"></a> </div>
      <p class="des">创作者交流社区</p>
      <div class="user">
        <span class="link reg" v-on:click="register">注册</span>
        <span class="link log" v-on:click="login">登录</span>
      </div>
      <div class="search">
        <input class="search-box" type="text" placeholder="">
        <i class="search-icon sp i95"></i>
      </div>
    </div>
  </div>
</template>

<script>
  var cheader = {
    methods: {
      register:function() {
        this.$dispatch('app-mask-show',{t:0});
      },
      login:function(){
        this.$dispatch('app-mask-show',{t:1});
      }
    }
  };
  module.exports = cheader;
</script>

