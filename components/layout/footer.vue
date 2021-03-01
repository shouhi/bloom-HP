<template lang="pug">
  v-footer(
      color="white"
      padless
    )
    v-row(
        justify="center"
        no-gutters
      )
        v-btn(
          v-for="link in footerLinks"
          :key="link"
          text
          rounded
          class="my-2"
        ) {{ link }}
        v-col.text-center(
          class="py-4"
          cols="12"
        ) {{ new Date().getFullYear() }} — <strong>BLOOM</strong>
</template>
<script>
export default {
  data() {
    return {
      footerLinks: ['ホーム', '開発チーム', '運営会社', 'お問い合わせ'],
    }
  },
}
</script>

<style scoped></style>
