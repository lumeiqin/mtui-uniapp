<template>
  <div>
    <mt-swiper ref="mySwiper">
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

    <br>
    <br>
    <br>
    <br>

    <mt-swiper :urlList="imgList" :clientH="200" :showCounter="true" :autoPlayDelay="1500" :criticalValue="1/4" />
  </div>

  <!--<template>-->
  <!--<view>-->
  <!--  <mt-swiper :data="swiperData">-->
  <!--    <view class="swiperItem" v-for="(v,i) in swiperData" :key="i">-->
  <!--      <view>{{v.opt}}</view>-->
  <!--    </view>-->
  <!--  </mt-swiper>-->
  <!--</view>-->
  <!--</template>-->

</template>

<script>
import MtSwiper from "../../components/mt-swiper/mt-swiper-other";
export default {
  components: {MtSwiper},
  data() {
    return {
      imgList: [
        'https://dummyimage.com/375x100/FB8A80?text=0',
        'https://dummyimage.com/375x100/29A90F?text=1',
        'https://dummyimage.com/375x100/6F9DFF?text=2'
      ]
    }
  },
  methods: {
  }
}
</script>

<style>
.item-content {
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
</style>
