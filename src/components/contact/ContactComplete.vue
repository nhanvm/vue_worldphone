<template>
  <div class="row">
    <div class="col-md-8 mx-auto">
      <div>
        <h2 class="text-center mb-3">THANK YOU!</h2>
        <h3 class="text-center text-success"><font-awesome-icon :icon="['fas', 'check']" /></h3>
        <p>Thanks a bunch for filling that out. It means a lot to us, just like you do! We really appreciate you giving us a moment of your time today. Thanks for being you.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactComplete'
}
</script>

<style scoped>
  h2 {
    font-size: 32px;
    font-weight: bold
  }
</style>
