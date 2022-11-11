<template>
	<view class="simple-audio">
		<view class="simple-audio-title">音频</view>

		<view class="simple-audio-content">
			<view class="simple-audio-content-control simple-audio-content-cancel" @click="cancel()">
				<i class="iconfont icon-guanbi"></i>
				取消
			</view>

			<view class="simple-audio-content-box">
				<view class="simple-audio-content-box-progress">{{status == 'listen'? playTime: recordingTime}}</view>
				<view class="simple-audio-content-box-status">
					<view class="play circle" v-if="status == 'play'" @click="_startRecording()">
						<i class="iconfont icon-24gf-play"></i>
					</view>
					<view class="play circle" v-else-if="status == 'record'" @click="_stopRecording()">
						<i class="iconfont icon-youyinpin"></i>
					</view>
					<view class="break circle" v-else-if="status == 'break'">
						<i class="iconfont icon-zanting"></i>
					</view>
					<view class="listen circle" v-else-if="status == 'listen'">
						<i class="iconfont icon-youyinpin"></i>
					</view>
				</view>
				<view class="simple-audio-content-box-listen" @click="_playRecording()">试听</view>
			</view>

			<view class="simple-audio-content-control simple-audio-content-comfirm" @click="confirm()">
				<i class="iconfont icon-queding"></i>
				确认
			</view>
		</view>
	</view>
</template>

<script>
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = false;

	export default {
		name: 'simple-audio',
		data() {
			return {
				status: "play",
				audioTime: 0,
				recordingTime: "00:00",
				recordingTimer: '',

				watchTime: 0,
				playTime: '00:00',
				playTimer: '',

				audioPath: ''
			}
		},
		mounted() {
			let _this = this;
			recorderManager.onStart((res) => {
				this.audioTime = 0;
				this.status = "record";
				this._timer();
			});
			recorderManager.onStop((res) => {
				this.status = "break";
				_this._clearTimer();
				_this.audioPath = res.tempFilePath;
			});


			innerAudioContext.onPlay(() => {
				this.watchTime = 0;
				this.status = "listen";
				this._playTimer();
			});

			innerAudioContext.onEnded((res) => {
				_this.status = "break";
				_this._clearPlayTimer();
			})
		},
		methods: {
			_timer() {
				let _this = this;
				_this.recordingTimer = setTimeout(() => {
					_this.audioTime++;
					_this.recordingTime = _this._fillZero(_this.audioTime);
					_this._timer();
				}, 1000);
			},
			_clearTimer() {
				clearTimeout(this.recordingTimer);
			},
			_playTimer() {
				let _this = this;
				_this.playTimer = setTimeout(() => {
					_this.watchTime++;
					_this.playTime = _this._fillZero(_this.watchTime);
					_this._playTimer();
				}, 1000);
			},
			_clearPlayTimer() {
				clearTimeout(this.playTimer);
			},
			_fillZero(time) {
				return time < 10 ? "00:0" + time : "00:" + time;
			},

			_startRecording() {
				this.recordingTime = "00:00";
				this.playTime = '00:00';
				recorderManager.start({
					duration: 30000
				});
			},
			_stopRecording() {
				recorderManager.stop();
			},
			_playRecording() {
				this.playTime = '00:00';
				if (this.status == "listen") {
					uni.showToast({
						icon: "none",
						title: "正在试听中"
					})
					return
				}
				if (this.audioTime < 1 || this.status != "break") {
					uni.showToast({
						icon: "none",
						title: "状态异常，无法试听"
					})
					return
				};
				this.status = "listen";

				if (this.audioPath) {
					innerAudioContext.src = this.audioPath;
					innerAudioContext.play();
				}
			},

			cancel() {
				if (this.status == "listen") {
					uni.showToast({
						title: "正在试听中"
					})
					return
				}
				if (this.status == "play") {
					this.$emit('cancel');
				} else if (this.status == "break") {
					this.status = 'play';
					this.audioPath = '';
					this.audioTime = 0;
					this.watchTime = 0;
					this.recordingTime = '00:00';
					this.playTime = '00:00';
					this._clearTimer();
					this._clearPlayTimer();
				} else if (this.status == "record") {
					this._stopRecording();
				} else {
					uni.showToast({
						title: "状态异常，取消失败"
					})
				}
			},
			confirm() {
				if (this.status == "record") {
					uni.showToast({
						icon: "none",
						title: "正在录制中"
					})
					return
				}
				if (this.status == "listen") {
					uni.showToast({
						title: "正在试听中"
					})
					return
				}
				if (this.audioTime < 1 && this.status == "play") {
					uni.showToast({
						icon: "none",
						title: "还未录制"
					})
					return
				}
				if (this.audioTime >= 1 && this.status != "play") {
					this.$emit('confirm', this.audioPath);
					this._resetData()
				} else {
					uni.showToast({
						title: "状态异常，确认失败"
					})
				}
			},
			_resetData() {
				this.status = "play"
				this.audioTime = 0
				this.recordingTime = "00:00"
				this.recordingTimer = ''

				this.watchTime = 0
				this.playTime = '00:00'
				this.playTimer = ''

				this.audioPath = ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	%center {
		display: flex;
		align-items: center;
	}

	.simple-audio {
		background: #fff;
		border-radius: 30rpx 30rpx 0 0;
		color: #666;

		&-title {
			@extend %center;
			flex-direction: row;
			justify-content: center;
			height: 80rpx;
			font-size: 28rpx;
			color: #666;
		}

		&-content {
			padding: 20px;
			@extend %center;
			justify-content: space-between;

			&-control {
				flex: 1;
				font-size: 28rpx;
				@extend %center;
				flex-direction: column;
				justify-content: center;

				i {
					color: #999;
					font-size: 40rpx;
					margin-bottom: 10rpx;
				}
			}

			&-comfirm {
				i {
					color: $_themecolor;
					font-size: 44rpx;
				}
			}

			&-box {
				flex: 2;
				@extend %center;
				flex-direction: column;
				justify-content: space-around;

				&-progress {
					font-size: 30rpx;
				}

				&-status {
					width: 100%;
					@extend %center;
					flex-direction: column;
					justify-content: center;


					.circle {
						width: 150rpx;
						height: 150rpx;
						background: $_themecolor;
						color: #fff;
						border-radius: 50%;
						@extend %center;
						flex-direction: column;
						justify-content: center;
						margin: 30rpx 0 40rpx 0;

						i {
							font-size: 32px;
							color: #fff;
						}
					}

					.play {
						background: $_themecolor;
						box-shadow: 0 0 10rpx 18rpx #bbd3ea;
					}

					.break {
						background: #FE9F00;
						box-shadow: 0 0 10rpx 18rpx #feebcc;
					}

					.listen {
						background: #00D5AF;
						box-shadow: 0 0 10rpx 18rpx #cdfff7;

					}
				}

				&-listen {
					font-size: 28rpx;
					color: $_themecolor;
					letter-spacing: 2rpx;
					text-decoration: underline;
				}

			}
		}
	}
</style>
