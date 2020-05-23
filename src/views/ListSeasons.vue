<template>
    <div class='container'>
       <div v-show='selected' class="top">
            <Select :options="options" @selected="setSelected" class="select"/>
            <div class='title'> {{ selected }} season </div>
            <img src="../assets/demo.png" class='logo'>
       </div>
       <div v-if='!selected' class='welcome'>
         <span class='start'>start here</span>
         <Select :options="options" @selected="setSelected" class="select"/>
       </div>
       <stack
              :column-min-width="300"
              :gutter-width="15"
              :gutter-height="15"
              monitor-images-loaded
       >
        <stack-item
                    v-for="(image, i) in images"
                    :key="i"
                    style="transition: transform 300ms"
        >
            <img :src="image.urls.small" :alt="image.alt_description" />
        </stack-item>
      </stack>
    </div>
</template>

<script>
import axios from 'axios'
import Select from '../components/forms/Select'
import { Stack, StackItem } from 'vue-stack-grid'

export default {
  name: 'ListSeasons',
  components: {
    Select,
    Stack,
    StackItem
  },
  data: () => ({
    options: ['Fall', 'winter', 'spring', 'summer'],
    images: [],
    selected: null
  }),
  methods: {
    async setSelected (selected) {
      try {
        this.selected = selected
        const res = await axios.get(`${process.env.VUE_APP_BASE_URL}?query=${selected}&per_page=20`,
          {
            headers: {
              Authorization: `Client-ID ${process.env.VUE_APP_UNSPLASH_API_KEY}`,
              'Accept-Version': 'v1'
            }
          })
        this.images = res.data.results
      } catch (error) {
        this.images = []
      }
    }
  }
}
</script>

<style>
.container {
    width: 80vw;
    margin: 0 auto;
}
.top {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.select {
    margin-bottom: 15px;
    width: 200px;
}

.title {
    flex-grow: 1;
    font-size: 0px;
    text-align: center;
    font-family: monospace;
    color: #3b99fcb3;
}

@media (min-width: 800px) {
 .title {
    flex-grow: 8;
    font-size: 30px;
  }
}

.logo {
    width: 140px;
    height: 53px;
    border-image: 0px;
}
.logo-central {
    width: 500px;
    height: 120px;
    border-image: 0px;
}
.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
}
.start {
    color: #032f5eb3;
    margin: 2px;
    font-size: 26px;
    font-family: monospace;
}
img {
    width: 100%;
    height: auto;
    border-radius: 12px;
}
</style>
