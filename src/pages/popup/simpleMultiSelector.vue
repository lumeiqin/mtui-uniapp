<template>
  <view>
    <mt-navbar fixed title="多级联动选择器" emit="true" :config="pagenav" @backClick="popupClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openSelector('normal')">基础用法</mt-button>
        <simpleMultiSelector ref="normal" :column="column" :options="options" :defaultPicker="defaultPicker"
                             :showValueDefault="showValueDefault"
                             @submit="submitEvent" @cancel="cancelEvent"></simpleMultiSelector>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleMultiSelector from "../../components/mt-form/item-multiSelector/simple-multi-selector";

export default {
  mixins: [common],
  data() {
    return {
      column: 3,
      options: [
        {
          "key": "key",
          "value": "value",
          "id": 0,
          "children": [
            {
              "key": "key1",
              "value": "value1",
              "id": 1,
              "children": [
                {
                  "key": "key2",
                  "value": "value2",
                  "id": 2,
                  "children": [{"key": "key5", "value": "value5", "id": 5}]
                }
              ]
            },
            {
              "key": "key3",
              "value": "value3",
              "id": 3,
              "children": [{"key": "key4", "value": "value4", "id": 2}]
            }
          ]
        }
      ],
      defaultPicker: [0, 0, 0],
      showValueDefault: {"key": "key", "value": "value"}
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
    simpleMultiSelector
  }
}
</script>
