<template>
  <view>
    <mt-navbar fixed title="Text 文本" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="textFormData"></mt-form>
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
      textFormData: {
        "field": {
          "text": "",
          "text1": "",
          "text2": "",
          "text3": "此项有初始值，不可修改",
          "text4": "详情内容颜色为灰色，可用于详情模式",
          "text5": "",
          "text6": "",
          "text7": "",
          "text8": ""
        },
        "property": [
          {
            "type": "text",
            "validate": true,
            "text": "姓名",
            "value": "text",
            "placeholder": "请输入姓名"
          },
          {
            "type": "text",
            "text": "姓名",
            "value": "text1",
            "icon": "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          },
          {
            "type": "text",
            "validate": true,
            "only": true,
            "text": "姓名",
            "value": "text2",
            "placeholder": "必填项，不显示星号"
          },
          {
            "type": "text",
            "validate": true,
            "disabled": true,
            "text": "姓名",
            "value": "text3",
            "valueShow": "此项有初始值，不可修改"
          },
          {
            "type": "text",
            "validate": true,
            "detailshow": true,
            "text": "姓名",
            "value": "text4",
            "valueShow": "详情内容颜色为灰色，可用于详情模式"
          },
          {
            "type": "text",
            "validate": true,
            "styleType": "col",
            "text": "姓名",
            "value": "text5",
            "placeholder": "输入框占整行"
          },
          {
            "type": "text",
            "validate": true,
            "countText": true,
            "text": "姓名",
            "value": "text6",
            "placeholder": "限制字数，并显示计数器",
            "maxlength": "6"
          },
          {
            "type": "text",
            "text": "姓名",
            "value": "text7",
            "placeholder": "限制字数:3，但是不显示计数器",
            "maxlength": "3"
          },
          {
            "type": "text",
            "hide": true,
            "text": "姓名",
            "value": "text8",
            "placeholder": "不在表单中显示本项"
          }
        ]
      }
    }
  }
}
</script>
