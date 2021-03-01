<template lang="pug">
Section.topics  
  v-row
    v-col
      h2.display-2.font-weight-bold TOPICS
      h2.display-1.font-weight-bold 新着情報
  v-row
  topic-card(
    v-for="(topic, key) in topics" :key="key"
    :value="topic"
    :num="key"
  )
</template>

<script>
import TopicCard from '~/components/top/TopicCard.vue'
export default {
  components: {
    TopicCard,
  },
  data() {
    return {
      topics: [
        {
          title: 'SEEDAS',
          description: '関学生3名と大工大1名の学生でカフェ経営👏',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
        },
      ],
    }
  },
}
</script>
<style scoped>
.topics {
  height: 100%;
  /* margin-top: 20px; */
  /* background-color: lightpink; */
}
h2 {
  margin: 3rem 0px;
  text-align: center;
}
</style>
