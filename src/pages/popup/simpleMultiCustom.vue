<template>
  <view>
    <mt-navbar fixed title="联动面板选择" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openSelector('normal')">基础用法</mt-button>
        <simpleMultiCustom ref="normal"
                           :search="false"
                           :title="title"
                           :options="options"
                           :showValueDefault="showValueDefault"

                           @submit="submitEvent"
                           @cancel="cancelEvent"></simpleMultiCustom>
      </ry-title>

      <ry-title title="显示搜索框">
        <mt-button @click="openSelector('search')">显示搜索框</mt-button>
        <simpleMultiCustom ref="search"
                           :search="true"
                           :title="title"
                           :options="options"
                           :showValueDefault="showValueDefault"

                           @submit="submitEvent"
                           @cancel="cancelEvent"
                           @customSearch="searchEvent"></simpleMultiCustom>
      </ry-title>

      <ry-title title="当输入关键字后 内容自定义">
        <mt-button @click="openSelector('diy')">当输入关键字后 内容自定义</mt-button>
        <simpleMultiCustom ref="diy"
                           :search="true"
                           :title="title"
                           :options="options"
                           :showValueDefault="showValueDefault"

                           @submit="submitEvent"
                           @cancel="cancelEvent"
                           @customSearch="searchEvent">

          我是自定义内容
        </simpleMultiCustom>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleMultiCustom from "../../components/mt-form/item-multiCustom/simple-multi-custom";

export default {
  mixins: [common],
  data() {
    return {
      title: "选择对应选项",
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
      showValueDefault: {"key": "key", "value": "value"}
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
    searchEvent(e) {
      uni.showToast({
        title: JSON.stringify(e),
        icon: "none"
      })
    },
  },
  components: {
    simpleMultiCustom
  }
}
</script>
