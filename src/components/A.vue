<style scoped>
.container {
  border: 1px solid #00f;
}
.red {
  color: #f00;
}
</style>

<template>
  <div class="container">
    <h2 class="red">{{msg}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
import { getMessage } from '../services/message'

export default {
  data () {
    return {
      msg: getMessage()
    }
  }
}
</script>
