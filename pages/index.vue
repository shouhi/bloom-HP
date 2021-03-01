<template lang="pug">
v-app
  home-hero
  home-topic
  parts-footer
</template>

<script>
import HomeHero from '~/components/home/HomeHero.vue'
import HomeTopic from '~/components/home/HomeTopic.vue'
import partsFooter from '~/components/layout/footer.vue'
import TopicCard from '~/components/top/TopicCard.vue'
export default {
  components: {
    HomeHero,
    HomeTopic,
    partsFooter,
    TopicCard,
  },
}
</script>
<style scoped></style>
