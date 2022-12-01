<template>
  <view>
    <mt-navbar title="Code 验证码" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="根据phone字段获取手机号">
        <view class="formContent">
          <mt-form :formData="codeFormData" @codeEvent="getCodeFun"></mt-form>
        </view>
      </ry-title>

      <ry-title title="根据phoneNum字段获取手机号">
        <view class="formContent">
          <mt-form :formData="codeFormData1" @codeEvent="getCodeFun"></mt-form>
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
      codeFormData: {
        "field": {
          "tel": "",
          "code": ""
        },
        "property": [
          {
            "type": "tel",
            "validate": true,
            "text": "联系方式",
            "value": "tel",
            "placeholder": "请输入手机号码",
            "valueShow": ""
          },
          {
            "type": "code",
            "validate": true,
            "text": "验证码",
            "value": "code",
            "placeholder": "phone",
            "second": "20",
            "phone": "tel",
            "valueShow": ""
          }
        ]
      },
      codeFormData1: {
        "field": {
          "code1": ""
        },
        "property": [
          {
            "type": "code",
            "validate": true,
            "text": "验证码",
            "value": "code1",
            "placeholder": "phoneNum",
            "second": "30",
            "phoneNum": "15112345678"
          }
        ]
      }
    }
  },
  methods: {
    getCodeFun(item) {
      uni.showToast({
        title: "发送的手机号为：" + item.phoneNum,
        icon: "none"
      })
    }
  }
}
</script>
