<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'
export default {
  name: 'Edit',
  data() {
    return {
      formEdit: {
        title: '',
        image: '',
        synopsis: '',
        desc: ''
      }
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['editNews', 'fetchNewsById'])
  },
  computed: {
    ...mapState(useCounterStore, ['newsById'])
  },
  created() {
    this.fetchNewsById(this.$route.params.id)
    this.editNews(this.newsById.id, this.formEdit)
    this.formEdit.title = this.newsById.title
    this.formEdit.image = this.newsById.image
    this.formEdit.synopsis = this.newsById.synopsis
    this.formEdit.desc = this.newsById.desc
  }
}
</script>

<template>
  <h1 style="text-align: center">Edit News Id:{{ newsById.id }}</h1>
  <div class="container">
    <form
      @submit.prevent="
        editNews(
          this.newsById.id,
          this.formEdit.title,
          this.formEdit.image,
          this.formEdit.synopsis,
          this.formEdit.desc
        )
      "
    >
      <label for="title">Title</label>
      <input
        type="text"
        id="title"
        name="firstname"
        placeholder="Input title here.."
        autocomplete="off"
        v-model="formEdit.title"
      />

      <label for="image">Image</label>
      <input
        type="text"
        id="image"
        name="lastname"
        placeholder="Input image here.."
        autocomplete="off"
        v-model="formEdit.image"
      />

      <label for="sysnopsis">Synopsis</label>
      <input
        type="text"
        id="sysnopsis"
        name="lastname"
        placeholder="Input synopsis here.."
        autocomplete="off"
        v-model="formEdit.synopsis"
      />

      <label for="desc">Description</label>
      <textarea
        id="desc"
        name="desc"
        placeholder="Input description here.."
        style="height: 100px"
        autocomplete="off"
        v-model="formEdit.desc"
      ></textarea>
      <center>
        <input type="submit" value="Submit" />
      </center>
    </form>
  </div>
</template>

<style>
input[type='text'],
select,
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 10px;
  resize: vertical;
}

input[type='submit'] {
  background-color: rgb(0, 132, 255);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.container {
  border-radius: 5px;
  padding: 20px;
}
</style>
