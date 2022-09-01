export default {
	data() {
		return {
			showVideo: false,
			playPath: "",
		};
	},
	methods: {
		chooseVideo() {
			let _this = this;
			uni.chooseVideo({
				compressed: false,
				maxDuration: 30,
				sourceType: ['camera', 'album'],
				success(res) {
					let videoArr = [];
					videoArr.push(_this.formUtils.fillObj('video', res.tempFilePath))

					if (_this.showItem.compress) {
						_this.compressVideo(videoArr)
						return;
					}
					_this.showItem.valueShow = _this.showItem.valueShow.concat(videoArr);
					_this.changeEvent(_this.showItem.valueShow);
				},
				fail(err) {
					console.log("chooseVideo：", err)
				}
			});
		},
		compressVideo(videoArr) {
			uni.showLoading({
				title: "视频压缩中"
			})
			let _this = this,
				newArr = [];
			videoArr.forEach(v => {
				newArr.push(_compressItem(v.path))
			})
			Promise.all(newArr).then(news => {
				uni.hideLoading();
				_this.showItem.valueShow = _this.showItem.valueShow.concat(news);
				_this.changeEvent(_this.showItem.valueShow);
			})

			function _compressItem(item) {
				return new Promise((reslove, reject) => {
					uni.compressVideo({
						src: item,
						quality: _this.showItem.videoQuality || "high",
						success(res) {
							reslove(_this.formUtils.fillObj('video', res.tempFilePath))
						},
						fail(err) {
							console.log("compressVideo：", err)
							reject(err)
						}
					})
				})
			}
		},
		videoErrorCallback(e) {
			this.$refs.video.close()
		},
		videoEnd(e) {
			let _this = this;
			setTimeout(function() {
				_this.$refs.video.close()
			}, 200)
		}
	}
}
