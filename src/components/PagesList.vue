<template>
  <div class="container">
    <div v-for="(page, key) in data" class="menu" :style="{order: page.position}">
      <div>
        {{ key }}
      </div>
      <div class="collapse">
        {{page.position}}
      </div>
  </div>

  </div>

</template>

<script>
import useDatabase from '../composable/database'
import { computed } from 'vue'

export default {
  name: 'PagesList',

  setup() {
    const {get, data} = useDatabase('siteMap')
    get()

    const menuData = computed(() => {

    })

    return {data}
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
.menu {
  width: 100px;
  margin-bottom: 5px;
  padding: 10px;
  border: 1px solid black
}
</style>
