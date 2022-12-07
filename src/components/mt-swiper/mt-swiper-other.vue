<template>
  <view class="swiper" id="swiper">
    <view class="swiper_box">
      <view class="box_item" :style="changePic">
        <image
            :style="{width: boxWidth + 'px'}"
            v-for="(item, key) in data"
            :key="key"
            :src="item.url"></image>
      </view>

      <view class="swiper_btn">
        <view class="left" @click="go(1)"><i class="iconfont icon-31fanhui1"></i></view>
        <view class="right" @click="go(-1)"><i class="iconfont icon-danse_gengduojiantou"></i></view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: "mt-swiper",
  data() {
    return {
      index: 0, //现在是第几张
      width: 0,
      boxWidth: 0,
      data: [
        {url: "https://ms.bdimg.com/pacific/0/pic/-1475734717_1882409649.jpg?x=0&y=0&vh=150.00&vw=242.00&oh=150.00&ow=242.00&w=146&h=91&rs=0"},
        {url: "https://ms.bdimg.com/pacific/0/pic/1814082679_-2015381553.jpg?x=0&y=0&vh=150.00&vw=242.00&oh=150.00&ow=242.00&w=146&h=91&rs=0"},
        {url: "https://ms.bdimg.com/pacific/0/pic/-1475734717_1882409649.jpg?x=0&y=0&vh=150.00&vw=242.00&oh=150.00&ow=242.00&w=146&h=91&rs=0"},
      ]
    }
  },
  created() {
    let _this = this;
    this.$nextTick(() => {
      uni.createSelectorQuery().select('#swiper').boundingClientRect((data) => {
        _this.boxWidth = data.width;
      }).exec()
    })
  },
  computed: {
    changePic() {
      return {
        width: `${this.boxWidth * this.data.length}px`,
        transform: `translate3d(${this.width}px, 0, 0)`, //主要实现核心
      };
    },
  },
  methods: {
    go(direc) {
      if (direc == -1) {
        this.index = this.index >= this.data.length - 1 ? 0 : this.index + 1;
      } else if (direc == 1) {
        this.index = this.index <= 0 ? this.data.length - 1 : this.index - 1;
      }
      this.width = -this.boxWidth * this.index;
    },
  },
}
</script>

<style lang="scss" scoped>
.swiper {
  width: 100%;

  &_box {
    width: 100%;
    height: 200px;
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    z-index: 10;
    overflow: hidden;

    .box_item {
      width: 100%;
      height: 100%;
      display: flex;
      transition: 0.5s ease;

      image {
        height: 100%;
        display: block;
      }
    }
  }

  &_btn {
    view {
      width: 35px;
      height: 40px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      //background: rgba(0, 0, 0, .5);
      display: flex;
      align-items: center;
      padding: 0 6px;

      i {
        font-size: 20px;
        color: #fff;
        font-weight: 600;
      }
    }

    .left {
      left: 0;
      justify-content: flex-end;
    }

    .right {
      right: 0;
      justify-content: flex-start;
    }
  }
}
</style>
