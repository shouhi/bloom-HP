<template lang="pug">
v-col(cols="12" md="4" class="card")
  v-card.mx-auto(style="padding:3rem;" flat min-height="300")
    p.service-number() {{num+1}}
    p.title.text-center.font-weight-bold {{value.title}}
    a(:href="value.path")
      v-img(
          class="white--text align-end"
          contain
          max-height="300"
          :src='require(`~/assets/images/services/${num+1}.png`)'
      )
    v-card-text.text-center {{value.description}}

</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => {
        return {}
      },
    },
    num: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},
}
</script>
<style scoped>
.card {
  border: 1px solid;
  border-bottom: transparent;
  border-top: transparent;
  margin-top: 30px;
}
.service-number {
  font-size: 6rem;
  font-weight: bold;
  color: #00000010;
  float: left;
  position: absolute;
  left: 10px;
  top: 0;
  line-height: 1;
  z-index: 3;
}
</style>
