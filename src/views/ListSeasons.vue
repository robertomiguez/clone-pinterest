<template>
    <div>
       <Select :options="options" @selected="setSelected" class="select"/>
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
    images: []
  }),
  methods: {
    async setSelected (selected) {
      try {
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
.select {
    margin-bottom: 15px;
    width: 200px;
}
img {
    width: 100%;
    height: auto;
    border-radius: 12px;
}
</style>
