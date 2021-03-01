<template lang="pug">
v-app
  home-hero
  home-topic
  home-service
  parts-footer
</template>

<script>
import HomeHero from '~/components/home/HomeHero.vue'
import HomeTopic from '~/components/home/HomeTopic.vue'
import HomeService from '~/components/home/HomeService.vue'
import partsFooter from '~/components/layout/footer.vue'
import TopicCard from '~/components/top/TopicCard.vue'
export default {
  components: {
    HomeHero,
    HomeTopic,
    HomeService,
    partsFooter,
    TopicCard,
  },
}
</script>
<style scoped></style>
