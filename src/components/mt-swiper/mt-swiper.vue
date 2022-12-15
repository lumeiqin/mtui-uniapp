<template>
  <div
      ref="swiperContainer"
      class="mt-swiper"
      id="swiper"
      :style="{ height: height }"
      @click="swiperClick">

    <div
        ref="sliderWrapper"
        class="swiper_box"
        :style="{
            transform: `translateX(${transX}px)`
        }" v-if="loading">

      <template v-if="urlList && urlList.length > 0">
        <image :src="item" v-for="(item, index) in currentList" :key="index"></image>
      </template>

      <template v-else>
        <slot></slot>
      </template>
    </div>
    <div class="swiper_loading" v-else>
      <i class="iconfont icon-loading"></i>
    </div>

    <div class="swiper-pagination" v-if="showDot && loading">
      <span :class="{'act': items === activeIndex + 1}" v-for="items in swiperItemCount" :key="items"></span>
    </div>
  </div>
</template>

<script>
let width = 375
let prevX = 0

export default {
  name: 'mt-swiper',
  props: {
    urlList: {
      type: Array,
      default: null
    },
    startIndex: {
      type: Number,
      default: 0
    },
    showDot: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '400rpx'
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentList: [],
      activeIndex: 0,
      swiperItemCount: 0,

      transX: 0,
    }
  },
  watch: {
    activeIndex(newvalue) {
      this.$emit('change', newvalue)
    },
    loading(newvalue) {
      if (newvalue) {
        const slots = this.$slots && this.$slots.default || []
        this.swiperItemCount = slots.length;

        this.$nextTick(() => {
          uni.createSelectorQuery().select('#swiper').boundingClientRect((data) => {
            width = data.width;
            if (this.swiperItemCount > 1) {
              this.transX = prevX = -width * this.activeIndex
            }
          }).exec()
        })
      }
    }
  },
  created() {
    if (this.urlList && this.urlList.length) {
      this.currentList = this.urlList;
      this.swiperItemCount = this.currentList.length;
    } else {
      const slots = this.$slots && this.$slots.default || []
      this.swiperItemCount = slots.length;
    }

    this.$nextTick(() => {
      uni.createSelectorQuery().select('#swiper').boundingClientRect((data) => {
        width = data.width;
        if (this.swiperItemCount > 1) {
          this.transX = prevX = -width * this.activeIndex
        }
      }).exec()
    })
  },
  methods: {
    previous() {
      if (this.activeIndex <= 0) return
      this.activeIndex--
      this.gotoX()
    },
    next() {
      if (this.activeIndex >= this.swiperItemCount - 1) return
      this.activeIndex++
      this.gotoX()
    },

    gotoX() {
      this.transX = prevX = -width * this.activeIndex
    },
    swiperClick() {
      this.$emit('click', this.activeIndex - 1)
    },
  }
}
</script>
