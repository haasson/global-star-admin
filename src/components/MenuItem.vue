<template>
  <div @mouseleave="close">
    <div ref="buttonEl" @mouseover="open()" class="trigger">
      {{ name }}
    </div>

    <div ref="dropdownEl" v-show="isOpen" class="dropdown">

      <MenuItem
          v-for="(child, key) in children"
          :style="{order: child.position}"
          :name="`${path}/${key}`"
          :children="child.menuHideChildren ? {} : child.children"
          :path="`${path}/${key}`"
          :placement="'right-start'"

          class="sub-item"
      />
    </div>
  </div>


</template>

<script>
import useDropdown from '../composable/dropdown'

export default {
  name: 'MenuItem',
  props: {
    name: {
      type: String,
      default: 'temp'
      // required: true
    },
    children: {
      type: Object
    },
    path: {
      type: String,
      required: true
    },
    placement: {
      type: String,
      default: 'bottom-start'
    }
  },

  setup(props) {

    const { buttonEl, dropdownEl, open, close, isOpen } = useDropdown({ placement: props.placement })

    return {

      buttonEl,
      dropdownEl,
      open,
      close,
      isOpen
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-item {
  position: relative;
}

.trigger {
  background-color: green;
  padding: 5px;
  text-align: center;
  border-left: 1px solid yellow;
  border-right: 1px solid yellow;
  color: white;
  cursor: pointer;
}

.sub-item {
  width: 100%;
}

.dropdown {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: hotpink;
}
</style>
