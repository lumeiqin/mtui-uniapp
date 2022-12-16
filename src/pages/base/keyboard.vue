<template>
  <view>
    <mt-navbar fixed title="Keyboard" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-search disabled :value="searchValue" :config="searchConfig"
                   @click="openBoard"></mt-search>
        <mt-keyboard ref="keyboard" show="true" @change="changeEvent"></mt-keyboard>
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
      searchConfig: {
        showClear: false,
        background: '#fff'
      },
      searchValue: "",
      show: true
    }
  },
  methods: {
    changeEvent(value) {
      this.searchValue = value
    },
    openBoard() {
      this.$refs.keyboard.open()
    },
  }
}
</script>
