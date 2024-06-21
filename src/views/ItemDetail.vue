<template>
    <div>{{ this.$route.query.status }}</div>
</template>

<script>
export default {
  props: ['status']
}
</script>
