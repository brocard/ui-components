<script>
export default {
  props: {
    color: {
      type: String,
      default: 'primary'
    },
  }
}
</script>

<template>
  <button :style="{ backgroundColor: color }">
    <!-- Dynamic Content -->
    <slot />
  </button>
</template>