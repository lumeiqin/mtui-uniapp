<template>
  <view>
    <mt-navbar fixed title="Selector 单选" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="selectorFormData" @change="changeSelector"></mt-form>
        </view>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";

export default {
  mixins: [common],
  data() {
    return {
      selectorFormData: {
        "field": {"selector": "", "selector1": "", "selector1-text": ""},
        "property": [
          {
            "type": "selector",
            "validate": true,
            "options": [
              {"id": 0, "value": "第一个哦"},
              {"id": 1, "value": "第二个哦"}
            ],
            "getKey": "value",
            "text": "政治面貌",
            "value": "selector",
            "placeholder": "请选择政治面貌",
            "showValue": {"key": "id", "value": "value"}
          },
          {
            "type": "selector",
            "validate": true,
            "styleType": "col",
            "detailshow": true,
            "options": [
              {"name": 0, "desc": "第一个哦"},
              {"name": 1, "desc": "第二个哦"}
            ],
            "getKey": "key",
            "text": "政治面貌",
            "value": "selector1",
            "placeholder": "请选择政治面貌",
            "defaultPicker": [1],
            "secondValue": "selector1-text",
            "showValue": {"key": "name", "value": "desc"}
          }
        ]
      }

    }
  },
  methods: {
    changeSelector(item) {
      console.log(item)
    }
  }
}
</script>
