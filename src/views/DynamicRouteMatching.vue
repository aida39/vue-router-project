<template>
    <div>{{ userId }}</div>
</template>

<script>
export default {
  data () {
    return {
      userId: this.$route.query.userId
    }
  }
}
</script>
