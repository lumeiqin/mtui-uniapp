<template>
  <view>
    <mt-navbar title="Form" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title>
        <view class="formContent">
          <mt-form :formData="formData" ref="mtForm" @change="changeForm"></mt-form>
          <br>
          <mt-button @click="formValid">校验表单</mt-button>
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
      formData: {
        field: {
          text: "",
          pass: "",
          number: "",
          phone: "",
          card: "",
          opnion: "",
          opnion1: "",
          click: "",
          location: "",
          code: "",
          radio: "",
          selector: "",
          multiSelector: "",
          multiCustom: "",
          multiChoose: "",
          list: "",
          date: "",
          file: ["https://img.alicdn.com/bao/uploaded/i1/132953973/O1CN019EJExH1fDgALQaLt7_!!0-item_pic.jpg_200x200q90.jpg",
            "https://img.alicdn.com/bao/uploaded/i4/877198864/O1CN01W1apDl2FLlRM3PpzV_!!0-item_pic.jpg_200x200q90.jpg",
            "https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4"
          ],
        },
        property: [{
          type: "text",
          text: "文本",
          value: "text",
          countText: true,
          maxlength: 6,
          validate: true
        }, {
          type: "password",
          text: "密码",
          value: "pass",
          validate: true
        }, {
          type: "number",
          text: "数值",
          value: "number",
          validate: true
        }, {
          type: "tel",
          text: "电话号码",
          value: "phone",
          validate: true
        }, {
          type: "ID",
          text: "身份证",
          value: "card",
          validate: true
        }, {
          type: "textarea",
          text: "文本框",
          value: "opnion",
          validate: true
        }, {
          type: "click",
          text: "点击",
          value: "click",
        }, {
          type: "location",
          text: "地址",
          value: "location",
          validate: true
        }, {
          type: "code",
          text: "验证码",
          value: "code",
          phone: "phone",
          phoneNum: "",
          second: 20,
          validate: true
        }, {
          type: "radio",
          getKey: "value",
          showValue: {
            value: "title"
          },
          color: "#2194F2",
          text: "是否必填",
          value: "radio",
          options: [{
            id: '0',
            title: '是',
          }, {
            id: '1',
            title: '否',
          }],
          validate: true
        }, {
          type: "selector",
          showValue: {
            value: "title",
            key: "id"
          },
          dictionary: "sys_common_nation",
          text: "单选框",
          value: "selector",
          defaultPicker: [0]
        }, {
          getKey: "key",
          showValue: {
            value: "value",
            key: "key"
          },
          defaultPicker: [0, 0, 0, 0, 0],
          column: 3,
          dictionary: "multiArr",
          text: "多级联动",
          type: "multiSelector",
          value: "multiSelector",
          validate: true
        }, {
          getKey: "key",
          showValue: {
            value: "name",
            key: "id"
          },
          dictionary: "customArr",
          text: "多级联动面板",
          type: "multiCustom",
          value: "multiCustom",
          validate: true
        }, {
          getKey: "value",
          type: "multiChoose",
          text: "多选",
          value: "multiChoose",
          dictionary: "chooseArr"
        }, {
          type: "list",
          dictionary: "listArr",
          text: "列表选择",
          value: "list"
        }, {
          type: "date",
          field: "minute",
          start: "2010/10/17 05:30",
          end: "2030/07/15 09:10",
          text: "时间",
          value: "date"
        }, {
          type: "file",
          text: "附件上传",
          videoQuality: "medium",
          picQuality: 50,
          compress: true,
          value: "file",
          maxlength: 6,
          validate: true,
          tips: "支持上传图片、视频，附件总数不可超过6个，单个附件大小不得超过 100M",
          fileType: ['pic', 'video', 'audio'],
          valueShow: []
        }]
      }
    }
  },
  methods: {
    formValid() {
      if (this.$refs.mtForm.validate()) {
        console.log("表单校验成功")
      } else {
        console.log("表单校验失败")
      }
    },
    changeForm(obj) {
      console.log(obj)
    },
  }
}
</script>
