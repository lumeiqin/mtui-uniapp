<template>
  <view>
    <mt-navbar fixed title="选择器" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openSelector('normal')">基础用法</mt-button>
        <simpleSelector ref="normal" :options="options" :defaultPicker="defaultPicker"
                        :showValueDefault="showValueDefault"
                        @submit="submitEvent" @cancel="cancelEvent"></simpleSelector>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleSelector from "../../components/mt-form/item-selector/simple-selector";

export default {
  mixins: [common],
  data() {
    return {
      options: [
        {"name": 0, "desc": "第一个哦"},
        {"name": 1, "desc": "第二个哦"}
      ],
      defaultPicker: [1],
      showValueDefault: {"key": "name", "value": "desc"}
    }
  },
  methods: {
    openSelector(type) {
      this.$refs[type].open()
    },
    submitEvent(e) {
      console.log(e)
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
    simpleSelector
  }
}
</script>
