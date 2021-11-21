<template>
<!--  <div class="container">-->
<!--    <div v-for="(page, key) in data" class="menu" :style="{order: page.position}">-->
<!--      <div>-->
<!--        {{ key }}-->
<!--      </div>-->
<!--      <div class="collapse">-->
<!--        {{page.position}}-->
<!--      </div>-->
<!--  </div>-->


<TextEditor @update:modelValue="saveText" />



<!--  </div>-->

</template>

<script>
import useDatabase from '../composable/database'
import { computed, onMounted, ref } from 'vue'
import TextEditor from './TextEditor.vue'



export default {
  name: 'PagesList',
  components: { TextEditor },
  setup() {
    const {get, data} = useDatabase('siteMap')
    get()

    const saveText = (data) => console.log(data)

    return {data, saveText}
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
