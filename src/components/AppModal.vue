<template>
  <Teleport to="#modals">
    <div v-if="isOpen">
      <!-- Container -->
      <div class="fixed inset-0 flex items-center justify-center z-99">
        <!-- Overlay -->
        <div class="absolute inset-0 bg-black bg-opacity-75" @click="decline"></div>
        <div
            class="relative flex flex-col bg-gray-100 max-h-11/12"
            :style="`min-width: ${minWidth}px; max-width: ${maxWidth}px;`"
        >
          <!-- Header -->
          <div class="p-6 border-b">
            <div class="text-lg font-medium tracking-tight">
              <slot name="title" />
            </div>
          </div>
          <!-- Filter -->
          <div v-if="$slots.filter" class="px-6 py-2 flex items-center bg-white">
            <slot name="filter" />
          </div>
          <!-- Body -->
          <div class="flex-1 border-b px-6 py-2" :class="{ 'overflow-hidden overflow-y-auto': scrollable }">
            <slot name="content" />
            <!-- Alerts -->
            <div class="px-6 py-4" v-if="error || success">
              <BaseAlert v-if="error" type="error">Error</BaseAlert>
              <BaseAlert v-if="success" type="success">Success</BaseAlert>
            </div>
          </div>
          <!-- Footer -->
          <div v-if="$slots.controls" class="px-6 py-4 text-right">
            <BaseButtonGroup>
              <slot name="controls" :decline="decline" :confirm="confirm" />
            </BaseButtonGroup>
          </div>
          <!-- Close icon -->
          <button
              v-show="closeIcon"
              @click="decline"
              class="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
          >
            <BaseIcon name="close" size="lg" />
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { onBeforeUnmount, ref, watch } from 'vue'

export default {
  props: {
    closeIcon: {
      type: Boolean,
      default: true
    },
    minWidth: {
      type: Number,
      default: 500
    },
    maxWidth: {
      type: Number,
      default: 960
    },
    error: {
      type: String,
      default: ''
    },
    success: {
      type: String,
      default: ''
    },
    closeByEsc: {
      type: Boolean,
      default: true
    },
    scrollable: {
      type: Boolean,
      default: true
    }
  },

  setup(props) {
    let resolve
    let reject

    const isOpen = ref(false)
    watch(isOpen, () => {
      if (isOpen.value) {
        document.body.style.setProperty('overflow', 'hidden')
      }
    })

    const open = () => {
      isOpen.value = true
      return new Promise((ok, fail) => {
        resolve = ok
        reject = fail
      })
    }

    const decline = () => {
      close()
      resolve(false)
    }

    const confirm = () => {
      close()
      resolve(true)
    }

    const close = () => {
      isOpen.value = false
      document.body.style.removeProperty('overflow')
    }

    const onEscape = e => {
      if (isOpen.value && e.keyCode === 27) {
        decline()
      }
    }

    if (props.closeByEsc) {
      document.addEventListener('keydown', onEscape)
    }

    onBeforeUnmount(() => {
      document.removeEventListener('keydown', onEscape)
    })

    return {
      isOpen,
      open,
      decline,
      confirm
    }
  }
}
</script>
