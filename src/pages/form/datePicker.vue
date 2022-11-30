<template>
  <view>
    <mt-navbar title="DatePicker" emit="true" :config="pagenav" @backClick="formClick"></mt-navbar>
    <view class="comp">
      <ry-title title="选择年">
        <mt-button @click="openDate('year')">年</mt-button>
        <simple-date ref="year" field="year" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="选择年月">
        <mt-button @click="openDate('month')">年月</mt-button>
        <simple-date ref="month" field="month" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="选择年月日">
        <mt-button @click="openDate('day')">年月日</mt-button>
        <simple-date ref="day" field="day" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="选择年月日 时">
        <mt-button @click="openDate('hour')">年月日 时</mt-button>
        <simple-date ref="hour" field="hour" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="选择年月日 时分">
        <mt-button @click="openDate('minute')">年月日 时分</mt-button>
        <simple-date ref="minute" field="minute" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="选择年月日 时分秒">
        <mt-button @click="openDate('second')">年月日 时分秒</mt-button>
        <simple-date ref="second" field="second" @submit="dateChange">
        </simple-date>
      </ry-title>

      <ry-title title="限定期限内 选择日期">
        <mt-button @click="openDate('limit')">限定期限内 选择日期</mt-button>
        <simple-date ref="limit" :startDate="start" :endDate="end" field="day" @submit="dateChange">
        </simple-date>
      </ry-title>
    </view>
  </view>
</template>

<script>
import common from "../../common/common.js";
import simpleDate from "../../components/mt-form/item-date/simple-date";

export default {
  name: "datePicker",
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
    }
  },
  components: {
    simpleDate
  }
}
</script>

<style scoped>

</style>
