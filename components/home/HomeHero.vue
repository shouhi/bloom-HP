<template lang="pug">
v-app
  v-main
    v-row(justify="center" align="center" class="bg")
      v-col(cols="12" sm="8" md="6")
        h1(class="font-weight-bold") MAKE A GARDEN
        h3 あなたの可能性を広げられる
        h3 集いの場を創り出す
</template>

<script>
export default {}
</script>
<style scoped>
.bg {
  height: 100%;
  background-size: cover;
  background-image: url('~@/assets/images/garden.jpeg');
  background-color: rgba(255, 255, 255, 0.3);
  background-blend-mode: lighten;
}
.font-weight-bold {
  font-size: 50px;
}
h1 {
  color: white;
}
</style>
