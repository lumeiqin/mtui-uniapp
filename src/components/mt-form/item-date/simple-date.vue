<template>
  <SelectBox ref="SelectBox" @cancel="_onCancel" @submit="_onSubmit">
    <template slot="picker">
      <picker-view :value="value" @change="_onChange">
        <picker-view-column>
          <view class="select-box-body-columnItem" v-for="item in years" :key="item">
            {{ item + "年" }}
          </view>
        </picker-view-column>
        <picker-view-column
            v-if="field === 'month' || field === 'day' || field === 'hour' || field === 'minute' || field === 'second'">
          <view class="select-box-body-columnItem" v-for="item in months" :key="item">
            {{ formatNum(item) + "月" }}
          </view>
        </picker-view-column>
        <picker-view-column
            v-if="field === 'day' || field === 'hour' || field === 'minute' || field === 'second'">
          <view class="select-box-body-columnItem" v-for="item in days" :key="item">
            {{ formatNum(item) + "日" }}
          </view>
        </picker-view-column>
        <picker-view-column v-if="field === 'hour' || field === 'minute' || field === 'second'">
          <view class="select-box-body-columnItem" v-for="item in hours" :key="item">
            {{ formatNum(item) + "时" }}
          </view>
        </picker-view-column>
        <picker-view-column v-if="field === 'minute' || field === 'second'">
          <view class="select-box-body-columnItem" v-for="item in minutes" :key="item">
            {{ formatNum(item) + "分" }}
          </view>
        </picker-view-column>
        <picker-view-column v-if="field === 'second'">
          <view class="select-box-body-columnItem" v-for="item in seconds" :key="item">
            {{ formatNum(item) + "秒" }}
          </view>
        </picker-view-column>
      </picker-view>
    </template>
  </SelectBox>
</template>

<script>
import SelectBox from "../common/select-box.vue";
import pickerMixin from "../common/js/pickerMixin.js";

export default {
  name: "simple-date",
  mixins: [pickerMixin],
  components: {
    SelectBox
  },
  props: {
    startDate: {
      type: String,
      default: "1970-01-01 00:00:00"
    },
    endDate: {
      type: String,
      default: "2099-12-31 23:59:59"
    },
    field: {
      type: String,
      default: "second"
    }
  },

  data() {
    return {
      startTime: "",
      endTime: "",

      years: [],
      months: [],
      days: [],
      hours: [],
      minutes: [],
      seconds: "",

      year: "",
      month: "",
      day: "",
      hour: "",
      minute: "",
      second: "",
      value: [0, 0, 0, 0, 0, 0],
      current: {},
      start: {},
      end: {}
    };
  },

  created() {
    let currentDatetime = this.formatDate();
    let currentDate = currentDatetime && currentDatetime.split(" ")[0].split("-");
    let currentTime = currentDatetime && currentDatetime.split(" ")[1].split(":");
    this.current = currentDate &&
        currentTime && {
          time: currentDatetime,
          year: Number(currentDate[0]),
          month: Number(currentDate[1]),
          day: Number(currentDate[2]),
          hour: Number(currentTime[0]),
          minute: Number(currentTime[1]),
          second: Number(currentTime[2])
        };


    this.startTime = this.startDate;
    this.endTime = this.endDate;

    let startDatetime = this.startTime && this.formatDate(this.startTime);
    let startDate = startDatetime && startDatetime.split(" ")[0].split("-");
    let startTime = startDatetime && startDatetime.split(" ")[1].split(":");
    this.start = startDate &&
        startTime && {
          time: startDatetime,
          year: Number(startDate[0]),
          month: Number(startDate[1]),
          day: Number(startDate[2]),
          hour: Number(startTime[0]),
          minute: Number(startTime[1]),
          second: Number(startTime[2])
        };

    let endDatetime = this.endTime && this.formatDate(this.endTime);
    let endDate = endDatetime && endDatetime.split(" ")[0].split("-");
    let endTime = endDatetime && endDatetime.split(" ")[1].split(":");
    this.end = startDate &&
        startTime && {
          time: endDatetime,
          year: Number(endDate[0]),
          month: Number(endDate[1]),
          day: Number(endDate[2]),
          hour: Number(endTime[0]),
          minute: Number(endTime[1]),
          second: Number(endTime[2])
        };

    this.init();
  },

  watch: {
    startDate(newvalue) {
      this.startTime = newvalue;
      this.endTime = this.endDate;

      let startDatetime = this.startTime && this.formatDate(this.startTime);
      let startDate = startDatetime && startDatetime.split(" ")[0].split("-");
      let startTime = startDatetime && startDatetime.split(" ")[1].split(":");
      this.start = startDate &&
          startTime && {
            time: startDatetime,
            year: Number(startDate[0]),
            month: Number(startDate[1]),
            day: Number(startDate[2]),
            hour: Number(startTime[0]),
            minute: Number(startTime[1]),
            second: Number(startTime[2])
          };

      let endDatetime = this.endTime && this.formatDate(this.endTime);
      let endDate = endDatetime && endDatetime.split(" ")[0].split("-");
      let endTime = endDatetime && endDatetime.split(" ")[1].split(":");
      this.end = startDate &&
          startTime && {
            time: endDatetime,
            year: Number(endDate[0]),
            month: Number(endDate[1]),
            day: Number(endDate[2]),
            hour: Number(endTime[0]),
            minute: Number(endTime[1]),
            second: Number(endTime[2])
          };
      this.init();
    },
    endDate(newvalue) {
      this.startTime = this.startDate;
      this.endTime = newvalue;

      let startDatetime = this.startTime && this.formatDate(this.startTime);
      let startDate = startDatetime && startDatetime.split(" ")[0].split("-");
      let startTime = startDatetime && startDatetime.split(" ")[1].split(":");
      this.start = startDate &&
          startTime && {
            time: startDatetime,
            year: Number(startDate[0]),
            month: Number(startDate[1]),
            day: Number(startDate[2]),
            hour: Number(startTime[0]),
            minute: Number(startTime[1]),
            second: Number(startTime[2])
          };

      let endDatetime = this.endTime && this.formatDate(this.endTime);
      let endDate = endDatetime && endDatetime.split(" ")[0].split("-");
      let endTime = endDatetime && endDatetime.split(" ")[1].split(":");
      this.end = startDate &&
          startTime && {
            time: endDatetime,
            year: Number(endDate[0]),
            month: Number(endDate[1]),
            day: Number(endDate[2]),
            hour: Number(endTime[0]),
            minute: Number(endTime[1]),
            second: Number(endTime[2])
          };
      this.init();
    },
    value(newvalue, oldvalue) {
      if (newvalue[0] != oldvalue[0]) {
        this.initMonths();
        this.initDays();
        this.initHours();
        this.initMinutes();
        this.initSeconds();
      }
      if (newvalue[1] != oldvalue[1]) {
        this.initDays();
        this.initHours();
        this.initMinutes();
        this.initSeconds();
      }
      if (newvalue[2] != oldvalue[2]) {
        this.initHours();
        this.initMinutes();
        this.initSeconds();
      }
      if (newvalue[3] != oldvalue[3]) {
        this.initMinutes();
        this.initSeconds();
      }
      if (newvalue[4] != oldvalue[4]) {
        this.initSeconds();
      }
      this.getSelectValue();
    }
  },

  methods: {
    init() {
      this.initYears();
      this.initMonths("first");
      this.initDays("first");
      this.initHours("first");
      this.initMinutes("first");
      this.initSeconds("first");
      this.getSelectValue();
    },

    initYears() {
      const years = [];
      for (let year = this.start.year; year <= this.end.year; year++) {
        years.push(year);
        if (this.current.year === year) {
          this.$set(this.value, 0, year - this.start.year);
        }
      }
      this.years = years;
    },

    initMonths(times) {
      const months = [];
      let startmonth = 1,
          endmonth = 12;
      if (this.value[0] == 0) {
        startmonth = this.start.month;
      } else if (this.value[0] == this.end.year - this.start.year) {
        endmonth = this.end.month;
      } else {
        startmonth = 1;
        endmonth = 12;
      }
      for (let month = startmonth; month <= endmonth; month++) {
        months.push(month);

        if (times == "first") {
          if (this.current.month === month) {
            this.$set(this.value, 1, month - 1);
          }
        } else {
          this.$set(this.value, 1, 0);
        }
      }
      this.months = months;
    },

    initDays(times) {
      const days = [];
      let startday = 1,
          totalDays = new Date(this.years[this.value[0]], this.months[this.value[1]], 0).getDate();

      if (this.value[0] == 0 && this.value[1] == 0) {
        startday = this.start.day;
      } else if (this.value[0] == this.end.year - this.start.year && this.value[1] == this.end.month - 1) {
        totalDays = this.end.day;
      } else {
        startday = 1;
        totalDays = new Date(this.years[this.value[0]], this.months[this.value[1]], 0).getDate();
      }
      for (let day = startday; day <= totalDays; day++) {
        days.push(day);

        if (times == "first") {
          if (this.current.day === day) {
            this.$set(this.value, 2, day - 1);
          }
        } else {
          this.$set(this.value, 2, 0);
        }
      }
      this.days = days;
    },

    initHours(times) {
      const hours = [];
      let starthour = 0,
          endhour = 23;
      if (this.value[0] == 0 && this.value[1] == 0 && this.value[2] == 0) {
        starthour = this.start.hour;
      } else if (this.value[0] == this.end.year - this.start.year && this.value[1] == this.end.month - 1 && this
          .value[2] == this.end.day - 1) {
        endhour = this.end.hour;
      } else {
        starthour = 0;
        endhour = 23;
      }

      for (let hour = starthour; hour <= endhour; hour++) {
        hours.push(hour);

        if (times == "first") {
          if (this.current.hour === hour) {
            this.$set(this.value, 3, hour);
          }
        } else {
          this.$set(this.value, 3, 0);
        }
      }
      this.hours = hours;
    },

    initMinutes(times) {
      const minutes = [];

      let startminute = 0,
          endminute = 59;
      if (this.value[0] == 0 && this.value[1] == 0 && this.value[2] == 0 && this.value[3] == 0) {
        startminute = this.start.minute;
      } else if (
          this.value[0] == this.end.year - this.start.year &&
          this.value[1] == this.end.month - 1 &&
          this.value[2] == this.end.day - 1 &&
          this.value[3] == this.end.hour
      ) {
        endminute = this.end.minute;
      } else {
        startminute = 0;
        endminute = 59;
      }

      for (let minute = startminute; minute <= endminute; minute++) {
        minutes.push(minute);
        if (times == "first") {
          if (this.current.minute === minute) {
            this.$set(this.value, 4, minute);
          }
        } else {
          this.$set(this.value, 4, 0);
        }
      }
      this.minutes = minutes;
    },

    initSeconds(times) {
      const seconds = [];

      let startsecond = 0,
          endsecond = 59;
      if (this.value[0] == 0 && this.value[1] == 0 && this.value[2] == 0 && this.value[3] == 0 && this.value[
          4] == 0) {
        startsecond = this.start.second;
      } else if (
          this.value[0] == this.end.year - this.start.year &&
          this.value[1] == this.end.month - 1 &&
          this.value[2] == this.end.day - 1 &&
          this.value[3] == this.end.hour &&
          this.value[4] == this.end.minute
      ) {
        endsecond = this.end.second;
      } else {
        startsecond = 0;
        endsecond = 59;
      }

      for (let second = startsecond; second <= endsecond; second++) {
        seconds.push(second);
        if (times == "first") {
          if (this.current.second === second) {
            this.$set(this.value, 5, second);
          }
        } else {
          this.$set(this.value, 5, 0);
        }
      }
      this.seconds = seconds;
    },

    getSelectValue() {
      this.year = this.years[this.value[0]];
      this.month = this.months[this.value[1]];
      this.day = this.days[this.value[2]];
      this.hour = this.hours[this.value[3]];
      this.minute = this.minutes[this.value[4]];
      this.second = this.seconds[this.value[5]];
    },

    _onChange(e) {
      this.value = e.detail.value;
      this.getSelectValue();
    },

    _onSubmit() {
      const {
        year,
        month,
        day,
        hour,
        minute,
        second,
        formatNum
      } = this;
      let result = {};
      if (this.field == "month") {
        result = {
          year: formatNum(year),
          month: formatNum(month),
          total: `${formatNum(year)}-${formatNum(month)}`
        };
      } else if (this.field == "day") {
        result = {
          year: formatNum(year),
          month: formatNum(month),
          day: formatNum(day),
          total: `${formatNum(year)}-${formatNum(month)}-${formatNum(day)}`
        };
      } else if (this.field == "hour") {
        result = {
          year: formatNum(year),
          month: formatNum(month),
          day: formatNum(day),
          hour: formatNum(hour),
          total: `${formatNum(year)}-${formatNum(month)}-${formatNum(day)} ${formatNum(hour)}时`
        };
      } else if (this.field == "minute") {
        result = {
          year: formatNum(year),
          month: formatNum(month),
          day: formatNum(day),
          hour: formatNum(hour),
          minute: formatNum(minute),
          total: `${formatNum(year)}-${formatNum(month)}-${formatNum(day)} ${formatNum(hour)}:${formatNum(minute)}`
        };
      } else if (this.field == "second") {
        result = {
          year: formatNum(year),
          month: formatNum(month),
          day: formatNum(day),
          hour: formatNum(hour),
          minute: formatNum(minute),
          second: formatNum(second),
          total: `${formatNum(year)}-${formatNum(month)}-${formatNum(day)} ${formatNum(hour)}:${formatNum(minute)}:${formatNum(second)}`
        };
      } else {
        result = {
          year: formatNum(year),
          total: `${formatNum(year)}`
        };
      }
      this.$emit("submit", result);
      this.close();
    },

    formatNum(num) {
      return num < 10 ? "0" + num : num + "";
    },

    /**
     * @description 格式化时间
     * @param {String} date: 默认当前时间
     * @param {String} format 默认'YYYY-MM-DD hh:mm:ss'
     */
    formatDate(date, format = "YYYY-MM-DD hh:mm:ss") {
      date = date ? new Date(date) : new Date();
      let rules = {
        year: {
          value: date.getFullYear(),
          type: "(Y+)",
          attr: "i"
        },
        month: {
          value: date.getMonth() + 1,
          type: "(M+)"
        },
        day: {
          value: date.getDate(),
          type: "(D+)",
          attr: "i"
        },
        hour: {
          value: date.getHours(),
          type: "(h+)",
          attr: "i"
        },
        minute: {
          value: date.getMinutes(),
          type: "(m+)"
        },
        second: {
          value: date.getSeconds(),
          type: "(s+)",
          attr: "i"
        }
      };

      function _formatType(key, value, type, attr, fmt) {
        function _initFmt(val) {
          return ("00" + val).substr(String(val).length);
        }

        if (new RegExp(type, attr).test(fmt)) {
          const fmtDate = key === "year" ? String(value).substr(4 - RegExp.$1.length) : RegExp.$1.length ===
          1 ? value : _initFmt(value);
          fmt = fmt.replace(RegExp.$1, fmtDate);
        }
        return fmt;
      }

      for (const key in rules) {
        format = _formatType(key, rules[key].value, rules[key].type, rules[key].attr, format);
      }

      return format;
    }
  }
};
</script>
