export default {
	data() {
		return {
			pagenav: {
				bg: "#f8f8f8",
				color: "#000"
			}
		}
	},
	methods: {
		backClick() {
			uni.navigateTo({
				url: "/pages/index/index"
			})
		}
	}
}
