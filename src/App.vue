<template>
  <div id="app">
    <button @click="topPage">トップページ</button>
    <button @click="routerPractice">RouterPracticeページへ</button>
    <button @click="userListPage">ユーザー一覧ページ</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    topPage () {
      if (this.$route.name !== 'home') {
        this.$router.push({ name: 'home' })
      }
    },
    routerPractice () {
      if (this.$route.name !== 'RouterPractice') {
        this.$router.push({ name: 'RouterPractice' })
      }
    },
    userListPage () {
      if (this.$route.name !== 'UserList') {
        this.$router.push({ name: 'UserList', query: { redirect: true } })
      }
    }
  }
}
</script>
