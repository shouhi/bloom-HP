<template lang="pug">
v-app
  v-main
    v-row(justify="center" align="center" class="bg")
      v-col(cols="12" sm="8" md="6")
        h1(class="font-weight-bold") MAKE A GARDEN
        h3 あなたの可能性を広げられる
        h3 集いの場を創り出す
    Section.topics
      h2.display-1.font-weight-bold  TOPICS 新着情報
      v-row
      TopicCard(
        v-for="(topic, key) in topics" :key="key"
        :value="topic"
        :num="key"
      )
    partsFooter
</template>

<script>
import partsFooter from '~/components/layout/footer.vue'
import TopicCard from '~/components/top/TopicCard.vue'
export default {
  components: {
    partsFooter,
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
.bg {
  height: 100%;
  background-size: cover;
  background-image: url('~@/assets/images/garden.jpeg');
  background-color: rgba(255, 255, 255, 0.4);
  background-blend-mode: lighten;
}
.font-weight-bold {
  font-size: 50px;
}
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
