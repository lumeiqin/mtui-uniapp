<template>
  <view>
    <scroll-view class="indexPage" scroll-y="true" scroll-with-animation="true" :scroll-top="scrollTop"
                 @scroll="scrollEvent">
      <view class="indexPage_item" v-for="(item, index) in dataArr" :key="index">
        <view class="item_title" :ref="'items_' + index">{{ item.title }}</view>
        <view class="item_module">
          <view class="item_modules" v-for="(items,indexs) in item.children" :key="indexs"
                @click="jumpPage(item.group, items.path)">
            <text>{{ items.title }}</text>
            <i class="iconfont icon-danse_gengduojiantou"></i>
          </view>
        </view>
      </view>
    </scroll-view>

    <view class="fixBox">
      <view class="items" :class="{'active': current === index}" v-for="(item, index) in dataArr" :key="index"
            @click="scrollIndex(item, index)">{{ item.title }}
      </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      scrollTop: 0,
      dataArr: [{
        title: '基础',
        group: 'base',
        children: [
          {
            title: 'Box 容器',
            path: 'box'
          }, {
            title: 'Button 按钮',
            path: 'button'
          }, {
            title: 'Card 卡片',
            path: 'card'
          }, {
            title: 'Collapse 折叠面板',
            path: 'collapse'
          }, {
            title: 'Grid 宫格',
            path: 'grid'
          }, {
            title: 'Keyboard 键盘',
            path: 'keyboard'
          }, {
            title: 'Loading 加载',
            path: 'loading'
          }, {
            title: 'Navbar 导航栏',
            path: 'navbar'
          }, {
            title: 'Pagination 分页',
            path: 'pagination'
          }, {
            title: 'Rate 评分',
            path: 'rate'
          }, {
            title: 'Search 搜索框',
            path: 'search'
          }, {
            title: 'Step 流程图',
            path: 'step'
          }, {
            title: 'Swiper 轮播图',
            path: 'swiper'
          }, {
            title: 'Tabbar 标签栏',
            path: 'tabbar'
          }, {
            title: 'Tabs 标签页',
            path: 'tabs'
          }, {
            title: 'Tag 标签',
            path: 'tag'
          }
        ]
      }, {
        title: '表单',
        group: 'form',
        children: [
          {
            title: 'Form 表单',
            path: 'form'
          }, {
            title: 'Text 文本',
            path: 'text'
          }, {
            title: 'ID 身份证',
            path: 'id'
          }, {
            title: 'Tel 手机号',
            path: 'tel'
          }, {
            title: 'Number 数字',
            path: 'number'
          }, {
            title: 'Password 密码',
            path: 'password'
          }, {
            title: 'Click 点击',
            path: 'click'
          }, {
            title: 'Location 地图',
            path: 'location'
          }, {
            title: 'Code 验证码',
            path: 'code'
          }, {
            title: 'Textarea 文本框',
            path: 'textarea'
          }, {
            title: 'Radio 单选',
            path: 'radio'
          }, {
            title: 'Selector 单选',
            path: 'selector'
          }, {
            title: 'MultiSelector 多级联动',
            path: 'multiSelector'
          }, {
            title: 'MultiCustom 联动面板',
            path: 'multiCustom'
          }, {
            title: 'MultiChoose 多选',
            path: 'multiChoose'
          }, {
            title: 'List 列表',
            path: 'list'
          }, {
            title: 'Date 日期',
            path: 'date'
          }, {
            title: 'File 附件',
            path: 'file'
          }
        ]
      }, {
        title: '弹出层',
        group: 'popup',
        children: [
          {
            title: 'Popup 弹窗',
            path: 'popup'
          }, {
            title: 'Modal 模态框',
            path: 'modal'
          }, {
            title: '选择器',
            path: 'simpleSelector'
          }, {
            title: '多级联动选择器',
            path: 'simpleMultiSelector'
          }, {
            title: '联动面板选择',
            path: 'simpleMultiCustom'
          }, {
            title: '多选选择器',
            path: 'simpleMultiChoose'
          }, {
            title: '日期选择器',
            path: 'simpleDate'
          }, {
            title: '列表选择器',
            path: 'simpleList'
          }
        ]
      }]
    }
  },

  onShow() {
    this.scrollTop = uni.getStorageSync("scrollTop");
  },
  created() {
    this.$nextTick(() => {
      this.dataArr.forEach((v, i) => {
        v.top = this.$refs['items_' + i][0].$el.offsetTop;
      })
    })
  },
  methods: {
    scrollIndex(item, index) {
      this.scrollTop = item.top;
      this.current = index;
    },
    scrollEvent(e) {
      this.scrollTop = e.detail.scrollTop;
      uni.setStorageSync("scrollTop", e.detail.scrollTop);

      this.dataArr.forEach((v, i) => {
        if (this.scrollTop >= v.top) {
          this.current = i
        }
      })
    },
    jumpPage(group, path) {
      uni.navigateTo({
        url: "/pages/" + group + "/" + path
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.fixBox {
  line-height: 60px;
  position: fixed;
  right: 1px;
  top: 50%;
  transform: translateY(-50%);
  background: #fff;
  text-align: center;
  padding: 0 10px;
  border-radius: 8px;
  z-index: 1000;
  box-shadow: 2px 3px 5px rgba(0, 0, 0, .3);

  .items {
    font-size: 30rpx;
    color: #666;
    letter-spacing: 2rpx;
    padding: 5px 0;
  }

  .active {
    color: #2194F2;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, .3);
  }
}

.indexPage {
  width: 100%;
  height: 100vh;

  &_item {
    padding: 0 0 60rpx 0;
    box-sizing: border-box;

    .item_title {
      width: 100%;
      height: 100rpx;
      line-height: 100rpx;
      text-align: center;
      font-size: 34rpx;
      color: #444;
      letter-spacing: 8rpx;
      margin: 10rpx 0;
    }

    .item_module {
      width: 100%;
      padding: 0 32rpx;

      .item_modules {
        width: 100%;
        height: 92rpx;
        background: #fff;
        border-radius: 100rpx;
        margin-bottom: 46rpx;
        padding: 0 38rpx 0 40rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: 300;
        box-shadow: 2px 3px 5px rgba(0, 0, 0, .3);

        text {
          font-size: 30rpx;
          color: #666;
        }

        i {
          font-size: 32rpx;
          color: #999;
        }
      }

      .item_modules:nth-last-child(1) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
