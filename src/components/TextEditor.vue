<template>
  <div class="editorx_body">
    <div id="codex-editor"></div>
  </div>

  <button @click="save">Save</button>
</template>

<script>
import EditorJS from '@editorjs/editorjs'
import Header from '@editorjs/header'
import List from '@editorjs/list'
import Table from '@editorjs/table'
import ImageTool from '@editorjs/image'
import { onMounted, ref } from 'vue'

export default {
  name: 'TextEditor',
  setup(_, {emit}) {
    const editor = ref()
    onMounted(() => {
      initEditor()
    })

    const initEditor = () => {
      editor.value = new EditorJS({
        holder: 'codex-editor',
        defaultBlock: 'paragraph',
        // autofocus: true,
        inlineToolbar: true,
        placeholder: 'Введите текст',
        minHeight: 100,

        data: {
          blocks: [
            {
              type: 'paragraph',
              data: {
                text: 'hhdjghfjhgjfhgfjhgfjhg'
              }
            }
          ]
        },

        tools: {
          header: {
            class: Header,
            config: {levels: [2], defaultLevel: 2}
          },
          list: {
            class: List,
            config: {}
          },
          table: {
            class: Table,
            config: {}
          },
          image: {
            class: ImageTool,
            config: {}
          },
        }
      })
    }

    const save = () => {
      editor.value.save().then((data) => emit('update:modelValue', data))
    }

    return {save}
  }
}
</script>

<style lang="scss" scoped>

.editorx_body {
  max-width: 650px;
  margin: 0 auto;
  //border: 1px solid #ccc;
  //padding: 0 30px;
  .ce-block {
    padding: 0 10px;
    border: 1px solid #ccc;
  }
}



</style>
