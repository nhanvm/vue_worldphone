<template>
  <footer>
      <h2>{{title}}</h2>
  </footer>
</template>

<script>
export default {
  name: 'cpnFooter',
  props: {
    title: String
  },
  methods: {
  }
}
</script>

<style>
  footer {
    padding-top: 100px;
  }
</style>
