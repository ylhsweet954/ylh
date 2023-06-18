<template>
  <button v-on:mousedown="onMouseDown" v-on:mousemove="onMouseMove" v-on:mouseup="onMouseUp">
    Drag me
  </button>
  <CopyComponent v-if="copyShow" :x="x" :y="y" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const CopyComponent = defineComponent({
  props: {
    x: Number,
    y: Number
  },
  template: `<button :style="{ position: 'absolute', left: x + 'px', top: y + 'px' }">Copy</button>`
})
let prevX = 0
let prevY = 0

export default defineComponent({
  components: { CopyComponent },
  data() {
    return {
      startX: 0,
      startY: 0,
      copyShow: false,
      x: 0,
      y: 0
    }
  },
  methods: {
    onMouseDown(e: MouseEvent) {
      this.startX = e.clientX
      this.startY = e.clientY
      this.copyShow = true
    },
    onMouseMove(e: MouseEvent) {
      requestAnimationFrame(() => {
        this.x = prevX + e.clientX - this.x
        this.y = prevY + e.clientY - this.y
        prevX = this.x
        prevY = this.y
      })
    },
    onMouseUp() {
      this.copyShow = false
    }
  }
})
</script>
