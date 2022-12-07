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
            transform: `translateX(${transX}px)`,
            transition: isTransToX ? `transform ${duration}ms cubic-bezier(0, 0, 0.25, 1)` : ''
        }"

        @touchstart="touchstartFn"
        @touchmove="touchmoveFn"
        @touchend="touchendFn"
        @transitionend="transitionendFn">

      <template v-if="urlList && urlList.length > 0">
        <image :src="item" v-for="(item, index) in currentList" :key="index"></image>
      </template>

      <template v-else>
        <component :is="firstItem"></component>
        <slot></slot>
        <component :is="lastItem"></component>
      </template>
    </div>

    <div class="swiper-pagination" v-if="showDot">
      <span :class="{'act': items === activeIndex}" v-for="items in swiperItemCount-2" :key="items"></span>
    </div>
  </div>
</template>

<script>
let width = 375
let criticalWidth = 0 // 临界宽度

let prevX = 0 // 上个周期中的tranlateX 坐标
let _autoPlayTimer = null

let touchCount = 0 // 触摸点数量
let touchStatus = 0 // 当前的滑动状态
let startX = 0 // 点击坐标
let autoNext = 0 // 是否需要自动滑动到下一张图片
let directionFlag = 0 // 滑动的方向，-1 为右滑，1 为左滑

// getBoundingClientRect的兼容性
const isSupportGetBoundingClientRect = typeof document.documentElement.getBoundingClientRect === 'function'

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
    autoPlayDelay: {
      type: Number,
      default: null
    },
    duration: {
      type: Number,
      default: 350,
      validator(value) {
        return value >= 0
      }
    },
    showDot: {
      type: Boolean,
      default: true
    },
    slip: {
      type: Boolean,
      default: true
    },
    height: {
      type: String,
      default: '400rpx'
    }
  },
  data() {
    return {
      currentList: [],
      activeIndex: 0,

      transX: 0,
      isTransToX: false, // 正在自动滚动到固定位置的过程中

      firstItem: null,
      lastItem: null,
      swiperItemCount: 0
    }
  },
  created() {

    if (this.urlList && this.urlList.length) {
      let firstUrl = this.urlList.slice(0, 1), endUrl = this.urlList.slice(-1);
      this.currentList = endUrl.concat(this.urlList, firstUrl);

      this.swiperItemCount = this.currentList.length;
    } else {
      const slots = this.$slots && this.$slots.default || []
      this.swiperItemCount = slots.length;
      if (slots.length > 1) {
        this.swiperItemCount = slots.length + 2 // 加上首尾多出来的两个
        this.updateChild(slots)
      }
    }

    this.$nextTick(() => {
      uni.createSelectorQuery().select('#swiper').boundingClientRect((data) => {
        width = data.width;
        criticalWidth = width / 3;
        if (this.swiperItemCount > 1) {
          // 因为首尾都多加了一个swiperItem元素，所以顺延一位
          this.activeIndex = this.getActiveIndex(this.startIndex + 1)
          this.transX = prevX = -width * this.activeIndex
        }
      }).exec()
    })

    clearTimeout(_autoPlayTimer)
    _autoPlayTimer = setTimeout(() => {
      this.autoPlayFn()
    }, 14)
  },
  destroy() {
    clearTimeout(_autoPlayTimer)
  },
  watch: {
    autoPlayDelay() {
      this.autoPlayFn()
    }
  },
  methods: {
    previous() {
      clearTimeout(_autoPlayTimer)
      if (this.activeIndex <= 1) return
      this.activeIndex = this.getActiveIndex(this.activeIndex - 1)
      this.gotoX(-width * this.activeIndex)
    },
    next() {
      clearTimeout(_autoPlayTimer)
      if (this.activeIndex >= this.swiperItemCount - 2) return
      this.activeIndex = this.getActiveIndex(this.activeIndex + 1)
      this.gotoX(-width * this.activeIndex)
    },

    goto(index) {
      clearTimeout(_autoPlayTimer)
      this.activeIndex = index % (this.swiperItemCount - 2) + 1
      this.autoPlayFn()
    },
    transitionendFn(e) {
      if (e.target.className === 'swiper_box') {
        if (this.isTransToX) {
          this.isTransToX = false
          this.transEndFn()
        }
      }
    },
    touchendFn(e) {
      if (!this.slip) return;
      touchCount = e.touches.length
      if (this.ignoreTouch() || touchStatus !== 1) return
      if (this.swiperItemCount !== 1) {
        if (touchCount !== 0) {
          startX = e.touches[touchCount - 1].clientX
          prevX = this.transX
          return
        }
        this.singleTouchEndFn(e)
      }
    },
    singleTouchEndFn() {
      let toX = this.swiperItemCount === 1 ? 0 : this.getSingleTouchEndMultipleChildToX()
      this.gotoX(toX)
    },
    gotoX(toX) {
      if (this.transX === toX) {
        // 已经手动滑到正确的位置
        this.transEndFn()
      } else {
        // 自由滚动到合适的位置
        this.isTransToX = true
        this.transX = toX
        this.correctDurationAct()
      }
    },
    getSingleTouchEndMultipleChildToX() {
      let toX = 0
      let diffX = this.transX + width * this.activeIndex
      const wholeBlock = Math.floor(diffX / width)
      // 如果连续滑过超过一个 swiperItem 块，当做一个来处理
      if (Math.abs(diffX) > width) {
        this.activeIndex = Math.ceil(-this.transX / width)
        diffX = diffX - width * wholeBlock
      }
      // diffX 大于0 说明是右滑，小于0 则是左滑
      if (diffX > 0) {
        directionFlag = -1
        autoNext = diffX > criticalWidth
        toX = autoNext ? -width * (this.activeIndex - 1) : -width * this.activeIndex
      } else if (diffX < 0) {
        directionFlag = 1
        autoNext = Math.abs(diffX) > criticalWidth
        toX = autoNext ? -width * (this.activeIndex + 1) : -width * this.activeIndex
      } else {
        directionFlag = 0
        autoNext = false
        toX = -width * this.activeIndex
      }
      this.activeIndex = this.getActiveIndex(this.activeIndex + (autoNext ? directionFlag : 0))
      return toX
    },
    touchmoveFn(e) {
      if (!this.slip) return;
      e.preventDefault()
      if (this.ignoreTouch() || touchStatus !== 1) return
      if (this.swiperItemCount !== 1) {
        this.singleTouchMoveFn(e)
      }
    },
    singleTouchMoveFn(e) {
      let transX = e.touches[touchCount - 1].clientX - startX + prevX
      if (transX > 0) {
        // 滑动到到第一个了
        startX = e.touches[touchCount - 1].clientX
        // 矫正到正确位置
        prevX = transX = -width * (this.swiperItemCount - 2)
      } else if (transX < -width * (this.swiperItemCount - 1)) {
        // 滑动到最后一个了
        startX = e.touches[touchCount - 1].clientX
        // 矫正到正确位置
        prevX = transX = -width
      }
      this.transX = transX
    },
    touchstartFn(e) {
      if (!this.slip) return;
      clearTimeout(_autoPlayTimer)
      if (this.ignoreTouch()) return
      if (this.isTransToX) {
        if (!isSupportGetBoundingClientRect) {
          return touchStatus = 0
        }
        this.isTransToX = false
        this.transX = prevX = this.$refs.sliderWrapper.getBoundingClientRect().left - this.$refs.swiperContainer.getBoundingClientRect().left
      }
      touchStatus = 1
      touchCount = e.touches.length
      this.singleTouchStartFn(e)
    },
    singleTouchStartFn(e) {
      startX = e.touches[touchCount - 1].clientX
      if (touchCount > 1) {
        prevX = this.transX
      }
    },
    // 如果没有传入 swiper-item子元素，或者只传入了一个子元素, 则不对 touch 事件进行滑动响应
    ignoreTouch() {
      return this.swiperItemCount === 0 || this.swiperItemCount === 1
    },
    transEndFn() {
      this.activeIndex = this.getActiveIndex(this.activeIndex)
      this.transX = prevX = -width * this.activeIndex
      this.$emit('change', this.activeIndex)

      // setTimeout是为了避免当 autoPlayDelay值被指定为 0 时无限轮播出现问题
      // 16.7 是 1000/60 的大约值
      clearTimeout(_autoPlayTimer)
      _autoPlayTimer = setTimeout(() => {
        this.autoPlayFn()
      }, 16.7)
    },
    autoPlayFn() {
      let ifAutoPlay = typeof this.autoPlayDelay === 'number' && this.autoPlayDelay >= 0;
      // 判断是否满足自动轮播的条件
      if (this.swiperItemCount > 1 && ifAutoPlay && touchCount === 0 && this.transX % width === 0) {
        clearTimeout(_autoPlayTimer)

        _autoPlayTimer = setTimeout(() => {
          this.activeIndex = this.activeIndex + 1
          this.transX = -width * this.activeIndex
          this.isTransToX = true
          this.correctDurationAct()
        }, this.autoPlayDelay)
      }
    },
    correctDurationAct() {
      if (typeof this.duration !== 'number' || this.duration <= 0) {
        this.isTransToX = false
        this.transEndFn()
      }
    },
    getActiveIndex(index) {
      if (this.swiperItemCount === 1) return 0;
      if (index >= this.swiperItemCount - 1) return 1
      if (index <= 0) return this.swiperItemCount - 2
      return index
    },
    updateChild(slots) {
      this.firstItem = {
        render(h) {
          return h('div', {
            staticClass: 'swiper_item'
          }, slots.slice(-1))
        }
      }
      this.lastItem = {
        render(h) {
          return h('div', {
            staticClass: 'swiper_item'
          }, slots.slice(0, 1))
        }
      }
    },
    swiperClick() {
      this.$emit('click', this.activeIndex - 1)
    },
  }
}
</script>
