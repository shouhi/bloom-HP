<template lang="pug">
  v-app-bar(flat fixed app color="transparent")
      v-toolbar-title
      a(@click='onMenu("/")' class="img")
        img(src='~/assets/images/logo.png', height='100', width="100", )
      v-spacer
      v-toolbar-items
      v-btn(text) ABOUT
      v-btn(text) TOPICS
      v-btn(text) SERVICE
      v-btn(text) CONTACT
</template>
<script>
export default {}
</script>
<style scoped>
.img {
  margin-top: 20px;
}
</style>
