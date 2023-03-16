<script>
export default {
  name: 'Nav'
}
</script>

<template>
  <nav>
    <div class="nav">
      <h1 @click.prevent="$router.push(`/`)">Berita Games</h1>
    </div>
  </nav>
  <!-- <h2 @click.prevent="$router.push(`/`)">NEWS GOKIL</h2> -->
</template>

<style>
body {
  margin: 0;
  font-family: "Lato", sans-serif;
}
nav {
  position: relative;
  top: 0;
  display: flex;
  padding: 1rem 3rem;
  background-color: rgb(0, 72, 255);
  color: white;
  /* background-color: whitesmoke; */
  transition: top 500ms ease-in-out;
  margin-bottom: 30px;
}
</style>
