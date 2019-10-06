<template>
  <div>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    text: {
      type: String,
      required: true
    },
    default: {
      type: Boolean,
      default: false
    },
    warning: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.alert--default {
  background-color: #f2f5f7;
  padding: 20px 0;
  border: 2px dotted #d3d3d3;
  text-align: center;
}

.alert--warning {
  background-color: #fdedf0;
  padding: 20px 0;
  border: 2px dotted #e52855;
  text-align: center;
  color: #e52855;
}
</style>
