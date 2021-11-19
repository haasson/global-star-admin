<template>
  <div class="menu">
    <MenuItem
      v-for="(item, key) in data"
      :name="item.name"
      :children="item.menuHideChildren ? {} : item.children"
      :path="`/${key}`"
      :style="{order: item.position}"
      class="menu-item"
    />
  </div>
</template>

<script>
import { computed } from 'vue'
import useDatabase from '../composable/database'

import MenuItem from './MenuItem.vue'

export default {
  name: 'Menu',
  components: { MenuItem },

  setup() {
    const {get, data} = useDatabase('siteMap')
    get()

    const menuData = computed(() => {

    })



    return {
      data,
    }
  }
}
</script>

<style scoped>
.menu {
  display: flex;
}
.menu-item {
  flex-grow: 1;
}

.relative {
  padding: 10px;
  background-color: pink;
}

.trigger {
  background-color: green;
}

.dropdown {
  padding: 10px;
  background-color: yellow;
}
</style>
