<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
// this is an example component with external dependencies.
// we will replace "./service" with a mock during tests!
import SomeService from './service'

export default {
  data () {
    return {
      msg: SomeService.msg
    }
  }
}
</script>
