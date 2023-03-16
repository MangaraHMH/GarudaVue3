<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Detail',
  methods: {
    ...mapActions(useCounterStore, ['fetchNewsById'])
  },
  computed: {
    ...mapState(useCounterStore, ['newsById'])
  },
  created() {
    this.fetchNewsById(this.$route.params.id)
  }
}
</script>

<template>
  <div class="buttonEdit">
    <button
      class="btnEdit"
      @click.prevent="$router.push(`/edit/${newsById.id}`)"
      :newsById="newsById"
    >
      Edit
    </button>
  </div>
  <div class="detail">
    <img :src="newsById.image" alt="Avatar" style="width: 25%" />
    <div>
      <h2>{{ newsById.title }}</h2>
      <center>
        <div class="description">
          <p>{{ newsById.desc }}</p>
        </div>
      </center>
    </div>
  </div>
</template>

<style>
.detail {
  text-align: center;
}

.buttonEdit {
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
}

.btnEdit {
  background-color: rgb(0, 132, 255);
  width: 75px;
  height: 30px;
  border-radius: 10px;
  color: white;
}

.description{
  width: 75%;
}
</style>
