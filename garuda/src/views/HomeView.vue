<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
import CardNews from '../components/CardNews.vue'
export default {
  name: 'Home',
  components: { CardNews },
  methods: {
    ...mapActions(useCounterStore, ['fetchNews'])
  },
  computed: {
    ...mapState(useCounterStore, ['news'])
  },
  created() {
    this.fetchNews()
  }
}
</script>

<template>
  <div class="home">
    <div class="container">
      <CardNews v-for="data in news" :key="data.id" :items="data" />
    </div>
  </div>
</template>

<style>
.home {
  display: flex;
  padding-bottom: 20px;
}
.container {
  display: flex;
  gap: 20px;
  flex-flow: wrap;
}
</style>
