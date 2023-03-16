<script>
export default {
  name: 'CardNews',
  props: ['items']
}
</script>

<template>
  <div class="card" @click.prevent="$router.push(`/${items.id}`)">
    <img :src="items.image" alt="Avatar" style="width: 100%" />
    <div class="container">
      <h4>{{ items.title }}</h4>
      <p>{{ items.sysnopsis }}</p>
    </div>
  </div>
</template>

<style>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 20%;
  border-radius: 15px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
  justify-content: center;
}
</style>
