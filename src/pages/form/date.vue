<template>
  <view>
    <mt-navbar fixed title="Date 日期" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="dateFormData" @change="changeDate"></mt-form>
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
      dateFormData: {
        "field": {
          "date": "",
          "date1": ""
        },
        "property": [
          {
            "type": "date",
            "validate": true,
            "text": "巡查时间",
            "value": "date",
            "placeholder": "请选择巡查时间",
            "field": "minute",
            "valueShow": ""
          },
          {
            "type": "date",
            "styleType": "col",
            "text": "巡查时间",
            "value": "date1",
            "field": "day",
            "start": "2018-01-01 00:00:00",
            "end": "2030-01-01 23:59:59",
            "valueShow": ""
          }
        ]
      }
    }
  },
  methods: {
    changeDate(item) {
      uni.showToast({
        title: "表单提交的结果：" + JSON.stringify(item),
        icon: "none"
      })
    }
  }
}
</script>
