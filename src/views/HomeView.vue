<template>
  <div id="home">
    <button @click="get">detailへ</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: 'a182da'
    }
  },
  methods: {
    get () {
      this.$router.push({ name: 'ItemDetail', query: { status: false } })
    }
  }
}
</script>
