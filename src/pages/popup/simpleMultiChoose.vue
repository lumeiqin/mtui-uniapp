<template>
  <view>
    <mt-navbar fixed title="多选选择器" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openSelector('normal')">基础用法</mt-button>
        <simpleMultiChoose ref="normal"
                           :options="options"
                           :valueShow="valueShow"
                           :showValueDefault="showValueDefault"

                           @submit="submitEvent"
                           @cancel="cancelEvent"></simpleMultiChoose>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleMultiChoose from "../../components/mt-form/item-multiChoose/simple-multi-choose";

export default {
  mixins: [common],
  data() {
    return {
      valueShow: "第一个哦",
      options: [
        {"id": 0, "value": "第一个哦"},
        {"id": 1, "value": "第二个哦"},
        {"id": 2, "value": "第三个哦"},
        {"id": 3, "value": "第四个哦"},
        {"id": 4, "value": "第五个哦"}
      ],
      showValueDefault: {"key": "id", "value": "value"}
    }
  },
  methods: {
    openSelector(type) {
      this.$refs[type].open()
    },
    submitEvent(e) {
      uni.showToast({
        title: JSON.stringify(e),
        icon: "none"
      })
    },
    cancelEvent(e) {
      uni.showToast({
        title: "点击了取消按钮",
        icon: "none"
      })
    },
  },
  components: {
    simpleMultiChoose
  }
}
</script>
