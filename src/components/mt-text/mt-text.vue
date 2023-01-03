<template>
  <block>
    <text v-if="type === 'tel'"></text>
  </block>
</template>

<script>
export default {
  name: "mt-text",
  props: {
    type: {
      type: String,
      default: ''
    },
    value: {
      type: [Number | String],
      default: ''
    }
  },
  created() {
    this.value = ""
  }
}
</script>

<style scoped>

</style>
