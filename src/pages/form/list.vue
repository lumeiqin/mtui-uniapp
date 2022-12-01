<template>
  <view>
    <mt-navbar fixed title="Password 密码" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="formPage">
      <ry-title title="自定义配置">
        <view class="formContent">
          <mt-form :formData="passFormData"></mt-form>
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
      passFormData: {}
    }
  }
}
</script>
