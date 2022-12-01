<template>
  <!-- code -->
  <ItemBox :data="showItem">
    <template slot="value">
      <input :style="textAlign" type="number" maxlength="6" :disabled="judgeStatus" :placeholder="inputPlaceholder"
             :placeholder-style="formUtils.placeholderStyle"

             v-model="showItem.valueShow"
             @input="inputChange($event)"
             @blur="inputChange($event)"/>

      <view class="item-code-value-button" :style="{background: btnBg}" @click="clickCode? getCode(): ''"
            v-if="showItem.isEdit">
        {{ btnText }}
      </view>
    </template>
  </ItemBox>
</template>

<script>
import mixin from "../common/js/mixin.js";
import ItemBox from "../common/item-box.vue";

export default {
  name: "item-code",
  mixins: [mixin],
  components: {
    ItemBox
  },
  data() {
    return {
      btnText: "请获取验证码",
    }
  },
  computed: {
    clickCode() {
      return this.btnText == '请获取验证码';
    },
    btnBg() {
      let codebg =
          "data:image/png;base64,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"
      let codebg1 =
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANQAAABQCAYAAABh/1vWAAAAAXNSR0IArs4c6QAAC+VJREFUeF7tnUtvG9cVgO9zhqORItI0EZmIgFgKIMOsgQYVGqjdOLsuutW+y/6A7rowvemmf6Cr/gEBXbXbwl20QhsVKODSsIDKNqCAVkDTpCIN53FfxZloFD0oWXHGCg2eAQYzoMjDez/eD+fMGQqkBDckgARKI0BLi4SBkAASICgULgIkUCKB7yPUqdc650ocFoZCAtdLgNJzKrzVgv4uQtGT0rTb7fy1T548oevr66dm3+l0vkvc6yWH74YEjgi0Wq1T0mxsbJC7d+/mj7Xb7eO/Hcl2JcGusvBzkQqBWq0WLYRpNpu02+3Ser1+Lk6/379KbPxwkcAPQqBer58TpN/vu2az6brdbv43EK7T6RwLdhWxLl30zjk6RiT26aeffiKE+D0h5DNKaf0HIYJvigTeAQHnXJ8Q8k9CyG+++OKLHUKIHSPWhdnqQqEKmYqMBNkoTVO2vLx8jxDyN0LIzDuYD4ZEAhNBgFJ66Jz7fGdn57Hv+xayViEWlIOU0rFSXSQUffDgAQWZGo0G7fV6LIoitrKyQl+/fv0nSukvJmLWOAgk8A4JOOf+cuPGjfXt7W0XhqFtNBq21+vlZeDDhw9BqHNSjRXqRKnHWq0WazQabG5ujj19+lTUarUXhJDaO5wHhkYCk0KgNxgMPrlz544+ODgAmWyn07FQBl6UpS4UamNjgw0GA7a4uMiMMZxzLg4PD0UYhlBj4oYEpoJAFEX12dlZbYzRnHOzu7tra7WaXV9ft+PKvvPN928bEaxer/PV1VX27Nkz6Xme8H1fCiH2poIkThIJEEK01gtpmqosy/TS0pLa2tqy/X7fXJSlxgoF2anT6fD79++zXq8nlFIyCALpnPMqlcoukkYC00IgSZJFSmkWx7GSUqpGo6EfPXoEnT8zLktdlKE4ZKfbt2/zOI6l1lqGYegppSpBEEArETckMBUE4jhellImURRlQggVBIF6/vy5gSzVbrfN2bLv7NeH8vtOL1++5Gtra7zZbPJXr155lFLP9/0KpdT3fX97KkjiJJEAISRN0xXnXJqmaeKcy27evJl1u12zublpbt26BVKdaqGPFQpEiqJILC8vi+Fw6FWrVT+O40AIARnqv0gaCUwLgTiOf6S1ToIgiIfDYVqtVrOdnR0dhqEGsa4kFCFENJtN6OgJz/N8zrlPKYUbuYHv+/+ZFpg4TySQpumPCSGxc25kjEmzLEujKAKZNPQs3ihU0ZBYXV0VUO7Nz897zrkAdpCqUqn8GzEjgWkhkCTJT0AmSmkM+/7+fl72bW1t6XGNiXMlHwi1t7cnqtWq4Jx7UkofMpPneYExJqxUKv+aFpg4TySQJMlPOedRlmUxZCqlVGqMyYbDoV5YWNBnO30XCrWysgLtcm8wGMB1U8AYm4EM5XkefHEQNyQwFQSyLPsMMpS1dhTHcVyr1RIpZba9vX01odrtdt4yX1hYkIQQzxhTkVJWhBDhUYbanAqSOEkkQAhJkmQNMpTWOlJKJZzzhBCS7e3tqXGt83FdPg5NiVarJQqhKpVKXu4xxkLf9/+BpJHAtBBI0/Rn1toIpEqSJC6E6nQ6RVPi1L2oS4WK4xiunyoffPBBBWTKsmx2Zmbm79MCE+eJBEaj0c89zzsEqb7++mvITtBCT1EoXBtI4C0IoFBvAQ1fggQuIoBC4dpAAiUSQKFKhImhkAAKhWsACZRIAIUqESaGQgIoFK4BJFAiARSqRJgYCgmgULgGkECJBFCoEmFiKCSAQuEaQAIlEkChSoSJoZAACoVrAAmUSACFKhEmhkICKBSuASRQIgEUqkSYGAoJoFC4BpBAiQRQqBJhYigkgELhGkACJRJAoUqEiaGQAAqFawAJlEgAhSoRJoZCAigUrgEkUCIBFKpEmBgKCaBQuAaQQIkEUKgSYWIoJIBC4RpAAiUSQKFKhImhkAAKhWsACZRIAIUqESaGQgIoFK4BJFAiARSqRJgYCgmgULgGkECJBFCoEmFiKCSAQuEaQAIlEihVqAt+tPrPhJAbJY4ZQyGBSSXwOk3TX37vH62u1+t8YWFBFkJJKStCiBB+Cd73/d9RSj+fVAI4LiRQFgFr7V+zLPst/AK81jpSSiXFr8Dv7e2pfr9v2u325b8Cv7Gxwfb29sTKyopQSnmDwaASBEHAGJuhlM4455Y8z/sjpTQoa+AYBwlMIIE4y7JfEUJeOOdG1tpRHMdxrVZLpJTZ9va2XlhY0Ovr65ZS6orx05MTcc7RQqhqtSo4556U0ieEBJ7nBZChQCpK6SdSyl8TQlYopXMTCAOHhATeioBz7oAQsq2U+oNz7n8gE2SoLMtiQkislEqNMdlwOLy6UJ1Oh6+uropXr1558/PznnMugP1IphljTJ6tQDRKqe+c8wghUCJy5xzjnFNrQVx6Sti3miG+CAmUTMDBImXMGWMcpdQSQgwhRFFKM+dcCuIciTSCI+yU0hj2/f397ObNm9nW1pZutVrmjRmq3W6DBKLZbIowDIXneT7n3C8EKsSCI2OsorWuwLUWpVQUQh2JhDKVvBAwXKkEwKtjoZxzmhCSCSESa20C8hQiFYIZY9Isy9IoinS324Xn63a7DTEuLvlAqGazyaMoEsvLy2I4HHrVatWP4zgQQoA8hUj5EWRCoUr9oDHY9RAYKxRIBUIJIWI4gkxa6yQIgng4HKbVajXb2dnRYRiCVNCUeLNQL1++5GtraxzEgrKPUur5vl+B8s5aW+GcV+BYlHvOOTkmQxEo+66HDb4LErg6ASj34NlnMxSl9LjsY4wlxpgEjlAGpmkKx7zcA5E2NzfNrVu3Lhfq6E1ou93m0Dq/ffs2j+NYaq1lGIaeUirPSIwxX2sNZSBcP0kppTDGCAYjdY5ByYcyXf0DxmdeP4Fvluo3JR9snHOtlNIgFQgkhEittXA9lUkpkyiKoBxUQRCo58+fm3Etc5jFuQxSdPqgMXH//n3W6/WgfS6DIJDQfDhqQORlXlHqncxO1tpcKMYYZqfrXyf4jlckYK3NhWKMQfcsb0zAdVRxLQUiwQ6NCtjjOFZSStVoNPSjR4/suIbEhUIdNSYYZKnV1VX27Nkz6Xme8H0/z1YgFWNMWGslHJ1zHBoSIBEIZYyhQggCxyvOD5+GBK6NAOfcaa0JHEEokAuEopQaa61mjCk4gkiQldI0VVmW6aWlJbW1tWUhOxFC7Nnrp7FCFWUf3I8aDAZscXERBOGcc3F4eChgg3MQSykFXUAOEgkhYGRMa30qO0kJ3XTckMBkEFBKHQ8ERBJC5FJprS0csywzUkoNIhljNGyzs7MazjnnZnd319ZqNXu2XV4EHZtBoOwrslSr1WKNRoPNzc2xp0+fCkophx0yUhiGXGvN4NwYA5dQeTyQyvfhfjBuSGAyCaRpSkAmGB2IxTnPyz4hhI2iCDIQlID5fufOHX1wcGB7vZ7tdDrwvLHZ6cIMBddWDx48oK1WizYaDdrr9VgURWxlZYV++eWXuUxKKchGDL6VJISgcJ6mKc2yjM7MwD1fQuB8MnHiqKaZgOd5uUij0YjAue/7kKkgS7k4ji2cSylzwT766COzvb3twjC0jUYDpHKdTsc9fPgQYhzff7o0QxVlH2QpkKrT6cC9KZqmKbt37x49PDxknufRJElAIpCNVqtVIqWko9HoWKI4jlGoaV65Ezr3IAiORZiZmXFKKTccDkkYhiCXrVQqUPq52dlZ+/jx4/yxbrfrWq1WLtO4a6c3CnVSKjgvxCKEQLOCzs3N0Y8//pj0er1cLHjOhx9+mMfd399HkSZ0MeGwviUwPz+fi/XVV1/lD4JIjUbDvXjxghwcHLh+vw9/h45eLhI85zKZLiv5TnKnzjkIlEtyQiwCWavb7VIQ7OwH1e/3USpcvRNLoF6vnyvXQKBms+kgGx2t9bMi5Xnmskl9l0Wfi1VshWBPnjyh6+vrp94DSsSJJYkDQwJHBCDznISxsbFB7t69e5yJjsu4b77jfalIVyr53kD+7L9+4AeFBN5bAmP+MeJKAp2dMGaS93YJ4MAnkQAKNYmfCo7pvSWAQr23Hx0OfBIJ/B9/biv2o/OiaAAAAABJRU5ErkJggg=="
      return this.clickCode ?
          "url(" + codebg + ") center center / 100% 100% no-repeat" :
          "url(" + codebg1 + ") center center / 100% 100% no-repeat"
    }
  },
  methods: {
    getCode() {
      let _this = this,
          second = _this.showItem.second || 60;
      let reg = /^1[0-9]{10,10}$/;
      if (!reg.test(_this.showItem.phoneNum)) {
        uni.showToast({
          title: "联系方式有误",
          icon: "none"
        })
        return
      }

      _this.btnText = second + "s后重新获取";
      let timer = setInterval(() => {
        if (second > 0) {
          second--;
          _this.btnText = _addZero(second) + "s后重新获取";
        } else {
          clearInterval(timer);
          second = 0;
          _this.btnText = "请获取验证码";
        }
      }, 1000)

      _this.$emit("codeEvent", _this.showItem);

      function _addZero(sec) {
        return sec >= 10 ? sec : '0' + sec
      }
    },
    inputChange($event) {
      this.changeEvent($event.detail.value);
    }
  }
};
</script>
