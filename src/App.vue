<template lang="jade">
div
  img(class="logo", src="./assets/logo.png")
  h1 {{msg}}
  <button v-on:click="loadModule">Load</button>
  <div id="example"></div>
</template>

<script>

  var Vue = require('vue');
  var CompA = require('./components/A.vue');
  var Q = require('q');

  var app = {
    data:function(){
      return {
        msg: 'Hello from vue-loader!'
      }
    },
    methods:{
      loadModule:function() {
        var link = Vue.component('link',function(){
          var deferred = Q.defer();
          require.ensure(["./Ansyc.vue"], function(require) {
            var a = require("./Async.vue");
            deferred.resolve(a)
          });
          return deferred.promise;
        });
        link().then(function(res){
          new Vue(Object.assign({
            el:'#example'
          },res))
        });
//        var p = new Promise(function(resolve,reject){
//          Vue.component('link',function(resolve,reject){
//            setTimeout(function(){
//              resolve({
//                template:'<a href="http://www.taobao.com">taobao</a>'
//              })
//            },3000)
//          })(resolve,reject);
//        });
//        p.then(function(res){
//          new Vue(Object.assign({
//            el:'#example'
//          },res))
//        });
      }
    },
    components:{
      CompA:CompA,
    }
  };
  module.exports = app;

</script>

<style lang="stylus">
font-stack = Helvetica, sans-serif
primary-color = #999
body
  font 100% font-stack
  color primary-color

.logo
  width 40px
  height 40px
</style>
