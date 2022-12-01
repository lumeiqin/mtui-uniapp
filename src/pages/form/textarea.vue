<template>
  <view>
    <mt-navbar fixed title="Textarea 文本框" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="textareaFormData"></mt-form>
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
      textareaFormData: {
        "field": {
          "textarea": "",
          "textarea1": "",
          "textarea2": "详情内容颜色为灰色，可用于详情模式"
        },
        "property": [
          {
            "type": "textarea",
            "validate": true,
            "text": "意见",
            "value": "textarea",
            "placeholder": "请输入意见"
          },
          {
            "type": "textarea",
            "styleType": "col",
            "countText": true,
            "text": "意见",
            "value": "textarea1",
            "placeholder": "限制字数，并显示计数器",
            "maxlength": "200",
            "valueShow": ""
          },
          {
            "type": "textarea",
            "validate": true,
            "detailshow": true,
            "text": "意见",
            "value": "textarea2",
            "maxlength": "100",
            "valueShow": "详情内容颜色为灰色，可用于详情模式"
          }
        ]
      }
    }
  }
}
</script>
