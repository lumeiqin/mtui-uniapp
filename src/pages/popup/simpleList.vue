<template>
  <view>
    <mt-navbar fixed title="列表选择器" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openSelector('normal')">基础用法</mt-button>

        <simpleList ref="normal" :options="options" :valueShow="valueShow"
                    :showValueDefault="showValueDefault"

                    @submit="submitEvent" @cancel="cancelEvent">
        </simpleList>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleList from "../../components/mt-form/item-list/simple-form-list";

export default {
  mixins: [common],
  data() {
    return {
      options: [
        {
          "id": 0,
          "value": "第一个哦",
          "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
        },
        {
          "id": 1,
          "value": "第二个哦",
          "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
        },
        {
          "id": 2,
          "value": "第三个哦",
          "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
        },
        {
          "id": 3,
          "value": "第四个哦",
          "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
        },
        {
          "id": 4,
          "value": "第五个哦",
          "brief": "详情地址详情地址详情地址详情地址详情地址详情地址"
        }
      ],
      valueShow: '第一个哦',
      showValueDefault: {"key": "id", "value": "value", "brief": "brief"}
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
    simpleList
  }
}
</script>
