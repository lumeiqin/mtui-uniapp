<template>
  <view>
    <mt-navbar fixed title="Radio 单选" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="radioFormData"></mt-form>
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
      radioFormData: {
        "field": {
          "radio": "",
          "radio1": "0",
          "radio2": "是",
          "radio3": "测试2",
        },
        "property": [
          {
            "type": "radio",
            "validate": true,
            "options": [
              {"id": "0", "value": "是"},
              {"id": "1", "value": "否"}
            ],
            "getKey": "key",
            "text": "是否必填",
            "value": "radio",
            "showValue": {"key": "id", "value": "value"},
          },
          {
            "type": "radio",
            "validate": true,
            "only": true,
            "styleType": "col",
            "options": [
              {"title": "0", "content": "测试1"},
              {"title": "1", "content": "测试2"}
            ],
            "getKey": "key",
            "text": "是否必填",
            "value": "radio1",
            "showValue": {"key": "title", "value": "content"},
            "valueShow": "0"
          },
          {
            "type": "radio",
            "validate": true,
            "only": true,
            "options": [
              {"id": "0", "value": "是"},
              {"id": "1", "value": "否"}
            ],
            "getKey": "value",
            "text": "是否必填",
            "value": "radio2",
            "color": "red",
            "showValue": {"key": "id", "value": "value"},
            "valueShow": "是"
          },
          {
            "type": "radio",
            "disabled": true,
            "options": [
              {"id": "0", "value": "测试1"},
              {"id": "1", "value": "测试2"}
            ],
            "getKey": "value",
            "text": "是否必填",
            "value": "radio3",
            "valueShow": "测试2",
            "showValue": {"key": "id", "value": "value"}
          }
        ]
      }
    }
  }
}
</script>
