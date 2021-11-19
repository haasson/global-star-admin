import { onMounted, onBeforeUnmount, ref, h, toRaw } from 'vue'

export default {
  props: ['call'],
  setup(props) {
    const el = ref(null)

    const listener = e => {
      if (e.target === el.value || el.value.contains(e.target)) return
      props.call()
    }

    onMounted(() => {
      document.addEventListener('click', listener)
    })

    onBeforeUnmount(() => {
      document.removeEventListener('click', listener)
    })

    return {
      el
    }
  },
  render() {
    return h(this.$slots.default()[0], { ref: 'el' })
  }
}
