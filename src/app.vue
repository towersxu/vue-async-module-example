<template>
  <gaia-header></gaia-header>
  <mask></mask>
</template>

<script>
  /**
   * App模块
   * @module header模块
   * @see module ./components/header/cheader.vue
   */
  var gaiaHeader = require('./components/header/gaia-header.vue');
  var mask = require('./components/mask/mask.vue');
  module.exports = {
    replace:false,
    data:function(){
      return {}
    },
    components:{
      gaiaHeader:gaiaHeader,
      mask:mask
    },
    events:{
      'app-mask-show':function(msg) {
        this.$broadcast('mask_show',msg);
      }
    }
  };
</script>
