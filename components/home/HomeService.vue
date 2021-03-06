<template lang="pug">
Section.services  
  v-row
    v-col
      h2.display-2.font-weight-bold SERVICE
      h3 事業内容
  v-row
    service-card(
      v-for="(service, key) in services" :key="key"
      :value="service"
      :num="key"
    )
</template>

<script>
import ServiceCard from '~/components/top/ServiceCard.vue'
export default {
  components: {
    ServiceCard,
  },
  data() {
    return {
      services: [
        {
          title: 'Bloom',
          description: '学生と経営者が情報交換できる飲食店',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          path: 'https://b-loom-official.studio.site/',
        },
        {
          title: 'SEEDAS',
          description: '学生と店舗のマッチングサービス',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          path: 'https://www.instagram.com/seedas_/',
        },
        {
          title: 'ProTask',
          description: '大学課題管理アプリ',
          image: 'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          path: 'https://protaskg.studio.site/',
        },
      ],
    }
  },
}
</script>
<style scoped>
.services {
  height: 100%;
  /* margin-top: 20px; */
  /* background-color: lightpink; */
}
h2 {
  margin-top: 100px;
  text-align: center;
}
h3 {
  text-align: center;
  font-size: 25px;
  color: gold;
}
</style>
