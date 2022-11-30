<template>
<view>
  <mt-swiper :data="swiperData">
    <view class="swiperItem" v-for="v in swiperData">
      <view>{{v.opt}}</view>
    </view>
  </mt-swiper>
</view>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      swiperData: [{
        opt: {color: "red"}
      },{
        opt: {color: "green"}
      }]
    }
  },
}
</script>

<style scoped>

</style>
