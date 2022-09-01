export default {
	methods: {
		cancelAudio() {
			this.$refs.simpleAudio.close();
		},
		confirmAudio(path) {
			let audioArr = [];
			audioArr.push(this.formUtils.fillObj('audio', path))
			this.showItem.valueShow = this.showItem.valueShow.concat(audioArr);
			this.changeEvent(this.showItem.valueShow);
			this.cancelAudio()
		}
	}
}
