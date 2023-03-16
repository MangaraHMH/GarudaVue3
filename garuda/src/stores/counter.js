import axios from 'axios'
import { defineStore } from 'pinia'
// const baseUrl = 'http://localhost:3000'
const baseUrl = 'https://news-mantap.up.railway.app'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    news: [],
    newsById: {}
  }),
  actions: {
    async fetchNews() {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}`
        })
        this.news = data
      } catch (err) {
        console.log(err)
      }
    },

    async fetchNewsById(id) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `${baseUrl}/${id}`
        })
        this.newsById = data
      } catch (err) {
        console.log(err)
      }
    },

    async editNews(id, title, image, synopsis, desc) {
      try {
        const { data } = await axios({
          method: 'PUT',
          url: `${baseUrl}/edit/${id}`,
          data: {
            title,
            image,
            synopsis,
            desc
          }
        })
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    }
  }
})
