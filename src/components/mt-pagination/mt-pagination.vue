<template>
  <view class="pagination">
    <view :style="{
      background: selfConfig.color,
        borderRadius: selfConfig.radius
    }" class="pagination_btn" :class="{disabled: current === 1}" @click="current > 1 && preClick(current - 1)">上一页</view>

    <block v-if="type === 'normal'">
      <block v-if="showEll">
        <view :style="{
        color: selfConfig.color
      }" class="ell" v-if="showPreEll" @click="preEllClick">…
        </view>
      </block>

      <view class="itemBox" :class="{plSize: !showPreEll || !showEll, prSize: !showNextEll || !showEll}">
        <view :style="{
        background: current === item? selfConfig.color: '#fff',
        border: current === item? 'none': '1px solid ' + selfConfig.color,
        color: current === item? '#fff': selfConfig.color,
        borderRadius: selfConfig.numRadius
      }" class="item" v-for="(item, index) in btnNumber" :key="index" @click="toPage(item)">{{ item }}
        </view>
      </view>

      <block v-if="showEll">
        <view :style="{
        color: selfConfig.color
      }" class="ell" v-if="showNextEll" @click="nextEllClick">…
        </view>
      </block>
    </block>

    <block v-else-if="type === 'simple'">
      <view class="simpleMode">
        {{ current }} / {{ total }}
      </view>
    </block>

    <view :style="{
      background: selfConfig.color,
        borderRadius: selfConfig.radius
    }" class="pagination_btn" :class="{disabled: current === total}" @click="current < total && nextClick(current + 1)">下一页</view>
  </view>
</template>

<script>
export default {
  name: "mt-pagination",
  props: {
    totalPage: {
      type: Number,
      default: 10
    },
    index: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'normal'
    },
    showEll: {
      type: Boolean,
      default: true
    },
    config: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      current: 1,
      total: 0,
      btnNumber: [],
      showPreEll: false,
      showNextEll: false,

      selfConfig: {
        color: "#2194F2",
        radius: "30rpx",
        numRadius: "50%"
      }
    }
  },
  created() {
    this.selfConfig = {
      ...this.selfConfig,
      ...this.config
    }
    this.total = this.totalPage;
    this.current = this.index;

    if (this.total <= 0) return
    for (let i = 1; i <= this.total; i++) {
      if (i <= 5) {
        this.btnNumber.push(i)
      }
    }
  },
  watch: {
    totalPage(newValue) {
      this.total = newValue;
      if (this.total <= 0) return
      for (let i = 1; i <= this.total; i++) {
        if (i <= 5) {
          this.btnNumber.push(i)
        }
      }
    },
    index(newValue) {
      this.current = newValue;
    },
    config(newvalue) {
      this.selfConfig = {
        ...this.selfConfig,
        ...newvalue
      }
    },
    btnNumber(newValue) {
      let firstItem = newValue[0];
      let lastItem = newValue[newValue.length - 1];

      if (firstItem === 1) {
        this.showPreEll = false
      }
      if (firstItem > 1) {
        this.showPreEll = true
      }
      if (lastItem < this.total) {
        this.showNextEll = true
      }
      if (lastItem === this.total) {
        this.showNextEll = false
      }
    },
    current(newvalue) {
      if (newvalue < 1) {
        this.current = 1
      }
      if (newvalue > this.total) {
        this.current = this.total
      }

      this.$emit("change", this.current)
    }
  },
  methods: {
    preClick(page) {
      this.current = page;
      let firstItem = this.btnNumber[0];
      if (this.showEll) {
        if (this.current === firstItem - 1) {
          if (firstItem >= 2) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 1
            })
          }
        }
      } else {
        if (this.current === firstItem - 1) {
          if (firstItem >= 4) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 3
            })
          } else if (firstItem >= 3) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 2
            })
          } else if (firstItem >= 2) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 1
            })
          }
        }
      }
    },
    nextClick(page) {
      this.current = page;
      let lastItem = this.btnNumber[this.btnNumber.length - 1];
      if (this.showEll) {
        if (this.current === lastItem + 1) {
          if (this.total >= lastItem + 1) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 1
            })
          }
        }
      } else {
        if (this.current === lastItem + 1) {
          if (this.total >= lastItem + 3) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 3
            })
          } else if (this.total >= lastItem + 2) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 2
            })
          } else if (this.total >= lastItem + 1) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 1
            })
          }
        }
      }
    },
    toPage(page) {
      if (page === this.total + 1 || page === 0) return;
      this.current = page
      if (!this.showEll) {
        let firstItem = this.btnNumber[0];
        let lastItem = this.btnNumber[this.btnNumber.length - 1];

        if (this.current === firstItem) {
          if (firstItem >= 3) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 2
            })
          } else if (firstItem >= 2) {
            this.btnNumber = this.btnNumber.map(v => {
              return v - 1
            })
          }
        }
        if (this.current === lastItem) {
          if (this.total >= lastItem + 2) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 2
            })
          } else if (this.total >= lastItem + 1) {
            this.btnNumber = this.btnNumber.map(v => {
              return v + 1
            })
          }
        }
      }
    },
    preEllClick() {
      let firstItem = this.btnNumber[0];
      if (firstItem >= 3) {
        this.btnNumber = this.btnNumber.map(v => {
          return v - 2
        })
      } else if (firstItem >= 2) {
        this.btnNumber = this.btnNumber.map(v => {
          return v - 1
        })
      }
      this.current = this.current - 2;
    },
    nextEllClick() {
      let lastItem = this.btnNumber[this.btnNumber.length - 1];
      if (this.total >= lastItem + 2) {
        this.btnNumber = this.btnNumber.map(v => {
          return v + 2
        })
      } else if (this.total >= lastItem + 1) {
        this.btnNumber = this.btnNumber.map(v => {
          return v + 1
        })
      }
      this.current = this.current + 2;
    }
  }
}
</script>
