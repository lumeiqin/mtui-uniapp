<template>
  <view class="pagination">
    <view class="pagination_btn" :class="{disabled: current === 1}" @click="current > 1 && preClick(current - 1)">上一页</view>
    <view class="ell" v-if="showPreEll" @click="preEllClick">…</view>
    <view class="itemBox" :class="{plSize: !showPreEll, prSize: !showNextEll}">
      <view class="item" :class="{active: current === item}" v-for="(item, index) in btnNumber" :key="index" @click="toPage(item)">{{ item }}</view>
    </view>
    <view class="ell" v-if="showNextEll" @click="nextEllClick">…</view>
    <view class="pagination_btn" :class="{disabled: current === total}" @click="current < total && nextClick(current + 1)">下一页</view>
  </view>
</template>

<script>
export default {
  name: "mt-pagination",
  props: {
    totalPage: {
      type: Number,
      default: 20
    },
    config: {
      type:Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      current: 1,
      total: 0,
      btnNumber:[],
      showPreEll: false,
      showNextEll: false,

      selfConfig: {

      }
    }
  },
  created() {
    this.selfConfig = {
      ...this.selfConfig,
      ...this.config
    }
    this.total = this.totalPage;

    if(this.total <= 0) return
    for(let i = 1; i <= this.total; i++) {
      if(i <= 5) {
        this.btnNumber.push(i)
      }
    }
  },
  watch: {
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
      if(newvalue < 1) {
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
      if(this.current === firstItem - 1) {
        if(firstItem >= 2) {
          this.btnNumber = this.btnNumber.map(v => {
            return v - 1
          })
        }
      }
    },
    nextClick(page) {
      this.current = page;
      let lastItem = this.btnNumber[this.btnNumber.length - 1];
      if(this.current === lastItem + 1) {
        if (this.total >= lastItem + 1) {
          this.btnNumber = this.btnNumber.map(v => {
            return v + 1
          })
        }
      }
    },
    toPage(page) {
      if(page === this.total + 1 || page === 0) return;
      this.current = page
    },
    preEllClick() {
      let firstItem = this.btnNumber[0];
      if(firstItem >= 3) {
        this.btnNumber = this.btnNumber.map(v => {
          return v - 2
        })
      } else if(firstItem >= 2) {
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

<style lang="scss" scoped>
.pagination {
  height: 56rpx;
  display: flex;
  align-items: center;
  &_btn {
    width: 126rpx;
    height: 56rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
    border-radius: 30rpx;
    background: #2194F2;
    color: #fff;
  }
  .disabled {
    opacity: 0.5
  }
  .itemBox {
    height: 56rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .item {
      width: 46rpx;
      height: 46rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #2194F2;
      color: #2194F2;
      border-radius: 50%;
      font-size: 26rpx;
      margin-right: 20rpx;
    }
    .item:nth-last-child(1) {
      margin-right: 0;
    }
    .active {
      background: #2194F2;
      color: #fff;
    }
  }
  .plSize {
    padding-left: 26rpx;
  }
  .prSize {
    padding-right: 26rpx;
  }
  .ell {
    width: 70rpx;
    color: #2194F2;
    text-align: center;
    margin-top: -9px;
  }
}
</style>
