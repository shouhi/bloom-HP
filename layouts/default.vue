<template lang="pug">
  v-app
    partsHeader
    v-main
      Nuxt
</template>

<script>
import partsHeader from '~/components/layout/header.vue'
export default {
  components: {
    partsHeader,
  },
  data() {
    return {
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
    }
  },
}
</script>
<style scoped></style>
