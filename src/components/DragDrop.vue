<template>
  <Base :pluginType="pluginType" :uppy="uppy" :uppyProps="props"/>
</template>

<script>
import Base from './Base.vue'
import DragDrop from '@uppy/drag-drop'
import '@uppy/drag-drop/dist/style.css'

export default {
  components: { Base },
  props: {
    uppy: {
      required: true
    },
    pluginOptions: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      pluginType: DragDrop.default,
      defaultOptions: {
        id: 'vue:DragDrop'
      }
    }
  },
  computed: {
    props () {
      return {
        ...this.defaultOptions,
        ...this.pluginOptions
      }
    }
  }
}
</script>

<style>

</style>
