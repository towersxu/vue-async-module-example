<template>
  <div class="msg">{{ msg }}</div>
</template>

<script>
// this is an example component with external dependencies.
// the "../service" module doesn't actually exists, but we
// will inject it in our tests!
import SomeService from '../service'

export default {
  data () {
    return {
      msg: SomeService.msg
    }
  }
}
</script>
