<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  color: white;
  background-color: #1976d2;
  border-color: #1976d2;
  padding: 5px 15px;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
}
</style>
