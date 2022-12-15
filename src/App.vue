<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  }
}
</script>

<style lang="scss">
@import "components/mt-theme/iconfont/iconfont.css";
.comp {
  padding: 15px 0;
}

.formPage {
  width: 100vw;
  min-height: 100vh;
  background: #fff !important;
  padding: 15px 0;
}

.formContent {
  padding: 0 15px 0 10px;
}
</style>
