<template>
  <view>
    <mt-navbar fixed title="Swiper" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>

    <ry-title>
      <mt-swiper ref="swiper1">
        <mt-swiper-item>
          <div class="item-content item1">SwiperItem - 0</div>
        </mt-swiper-item>
        <mt-swiper-item>
          <div class="item-content item2">SwiperItem - 1</div>
        </mt-swiper-item>
        <mt-swiper-item>
          <div class="item-content item3">SwiperItem - 2</div>
        </mt-swiper-item>
      </mt-swiper>
    </ry-title>

    <ry-title title="图片轮播">
      <mt-swiper ref="swiper2" :urlList="imgList" :slip="false"/>
      <view class="btnArr">
        <mt-button @click="preClick" style="margin-right: 60px">上一页</mt-button>
        <mt-button @click="nextClick">下一页</mt-button>
      </view>
    </ry-title>

    <ry-title title="数据请求">
      <mt-swiper ref="swiper3" :loading="loading" @change="changeSwiper">
        <mt-swiper-item v-for="(item, index) in dataList" :key="index">
          <img :src="item" alt="">
        </mt-swiper-item>
      </mt-swiper>
    </ry-title>

  </view>
</template>

<script>
import common from "../../common/common.js";

export default {
  mixins: [common],
  data() {
    return {
      imgList: [
        'https://ts2.cn.mm.bing.net/th?id=OIP-C.xc5KsKdO2u9T5hBCpE0yCgHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2',
        'https://tse4-mm.cn.bing.net/th/id/OIP-C.yTaV7x7n9LXjYN440YsIhQHaFj?w=196&h=147&c=7&r=0&o=5&dpr=2&pid=1.7',
        'https://ts1.cn.mm.bing.net/th?id=OIP-C.pAIGQZalV1QJV7n7fupiCwHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=2&pid=3.1&rm=2'
      ],
      dataList: [],
      loading: false,
    }
  },
  created() {
    this.getData()
  },
  methods: {
    changeSwiper(index) {
      uni.showToast({
        title: "当前的项：" + index,
        icon: "none"
      })
    },
    getData() {
      setTimeout(() => {
        this.dataList = this.imgList
        this.loading = true
      }, 2000)
    },
    preClick() {
      let _this = this
      _this.$nextTick(() => {
        _this.$refs.swiper1.previous()
        _this.$refs.swiper2.previous()
        _this.$refs.swiper3.previous()
      })
    },
    nextClick() {
      this.$refs.swiper1.next()
      this.$refs.swiper2.next()
      this.$refs.swiper3.next()
    }
  }
}
</script>

<style>
.item-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #00FFCC;
}

.item2 {
  background-color: #669966;
}

.item3 {
  background: #9999CC;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}

.btnArr {
  display: flex;
  justify-content: space-around;
  padding: 20px 10px;
}
</style>
