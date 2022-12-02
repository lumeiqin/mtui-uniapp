<template>
  <view>
    <mt-navbar fixed title="日期选择器" emit="true" :config="pagenav" @backClick="popupClick"></mt-navbar>
    <view class="comp">
      <ry-title>
        <mt-button @click="openDate('normal')">基础用法</mt-button>
        <simple-date ref="normal" @submit="dateChange" @cancel="cancelEvent">
        </simple-date>
      </ry-title>

      <ry-title title="限定期限内 选择日期">
        <mt-button @click="openDate('limit')">限定期限内 选择日期</mt-button>
        <simple-date ref="limit" :startDate="start" :endDate="end" field="day" @submit="dateChange"
                     @cancel="cancelEvent">
        </simple-date>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleDate from "../../components/mt-form/item-date/simple-date";

export default {
  mixins: [common],
  data() {
    return {
      start: "2018/10/17",
      end: "2024/07/15",
    }
  },
  methods: {
    openDate(type) {
      this.$refs[type].open()
    },
    dateChange(e) {
      uni.showToast({
        title: e.total,
        icon: "none"
      })
    },
    cancelEvent() {
      uni.showToast({
        title: "点击了取消按钮",
        icon: "none"
      })
    }
  },
  components: {
    simpleDate
  }
}
</script>
