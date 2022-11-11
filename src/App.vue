<script>
	export default {
		onLaunch: function() {
			this.$mt.waterMark({
				textArr: ['文本加水印']
			})
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss" scoped>
	@import "./static/font/iconfont.css";
	@import "./components/mt-theme/index.scss";
</style>
