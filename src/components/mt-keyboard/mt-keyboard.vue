<template>
  <mt-popup ref="keyboard" :showMask="false" :show="show">
    <view class="keyboard" :style="{
    background: color
  }">
      <i class="iconfont icon-guanbi1" @click="close"></i>

      <view class="numberBox">
        <view class="number">
          <button :style="{
          color: color
        }" v-for="v in 9" :key="v" @click="addItem(v)">{{ v }}
          </button>
        </view>
        <view class="delete">
          <button :style="{
          color: color
        }" @click="addItem(0)">0
          </button>
          <button :style="{
          color: color
        }" @click="removeItem"><i class="iconfont icon-huitui"></i></button>
        </view>
      </view>

      <view class="btnGroup">
        <button class="cancel" :style="{
    background: color
  }" @click="cancelEvent">取消</button>
        <button class="confirm" @click="confirmEvent">确定</button>
      </view>
    </view>
  </mt-popup>
</template>

<script>
export default {
  name: "mt-keyboard",
  props: {
    color: {
      type: String,
      default: "#2194F2"
    },
    show: {
      type: [Boolean,String],
      default: false
    }
  },
  data() {
    return {
      resultValue: ""
    }
  },
  methods: {
    addItem(item) {
      this.resultValue = this.resultValue.concat(item)
      this.$emit("change", this.resultValue);
    },
    removeItem() {
      this.resultValue = this.resultValue.substring(0, this.resultValue.length - 1)
      this.$emit("change", this.resultValue);
    },
    cancelEvent() {
      this.resultValue = ""
      this.$emit("change", this.resultValue);
    },
    confirmEvent() {
      this.$emit("change", this.resultValue);
      setTimeout(() => {
        this.close()
      }, 200)
    },
    open() {
      this.$refs.keyboard.open()
    },
    close() {
      this.$refs.keyboard.close()
    }
  }
}
</script>
