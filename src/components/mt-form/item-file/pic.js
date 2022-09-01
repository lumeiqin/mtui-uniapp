export default {
	methods: {
		chooseImage(type, picCount) {
			let _this = this;
			uni.chooseImage({
				count: picCount,
				sizeType: ["compressed"],
				sourceType: type,
				success(res) {
					let imgArr = []
					res.tempFilePaths.forEach(v => {
						imgArr.push(_this.formUtils.fillObj('pic', v))
					})

					if (_this.showItem.compress) {
						_this.compressPic(imgArr);
						return;
					}
					_this.showItem.valueShow = _this.showItem.valueShow.concat(imgArr);
					_this.changeEvent(_this.showItem.valueShow);
				},
				fail(err) {
					console.log("chooseImage：", err)
				},
			});
		},

		compressPic(picArr) {
			let _this = this,
				newArr = [];
			picArr.forEach(v => {
				newArr.push(_compressItem(v.path))
			})
			Promise.all(newArr).then(news => {
				_this.showItem.valueShow = _this.showItem.valueShow.concat(news);
				_this.changeEvent(_this.showItem.valueShow);
			})

			function _compressItem(item) {
				return new Promise((reslove, reject) => {
					uni.compressImage({
						src: item,
						quality: _this.showItem.picQuality || 40,
						success(res) {
							reslove(_this.formUtils.fillObj('pic', res.tempFilePath))
						},
						fail(err) {
							console.log("compressImage：", err)
							reject(err)
						}
					})
				})
			}
		}
	}
}
