<template>
  <view>
    <mt-navbar title="Location 地图" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="locationFormData"></mt-form>
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
      locationFormData: {
        "field": {
          "location": "",
          "location1": "",
          "location2": "",
          "location3": "",
          "location4": "",
          "location5": "",
          "x": "",
          "y": ""
        },
        "property": [
          {
            "type": "location",
            "validate": true,
            "text": "选择地图",
            "value": "location",
            "placeholder": "请选择地点"
          },
          {
            "type": "location",
            "validate": true,
            "disabled": true,
            "text": "选择地图",
            "value": "location1",
            "valueShow": "此项有初始值，不可修改"
          },
          {
            "type": "location",
            "validate": true,
            "only": true,
            "text": "选择地图",
            "value": "location2",
            "placeholder": "必填项，不显示星号"
          },
          {
            "type": "location",
            "detailshow": true,
            "text": "选择地图",
            "value": "location3"
          },
          {
            "type": "location",
            "styleType": "col",
            "text": "选择地图",
            "value": "location4",
            "placeholder": "输入框占整行"
          },
          {
            "type": "location",
            "text": "选择地图",
            "value": "location5",
            "icon": "https://ts1.cn.mm.bing.net/th?id=OIP-C.4t6CKFcRe9zK8Kgw2uIAWwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
          }
        ]
      }
    }
  }
}
</script>
