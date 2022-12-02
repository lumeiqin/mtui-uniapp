<template>
	<!-- file -->
	<view class="item-file" :class="{ error: showItem.check }">
		<view class="item-file-key" :class="{'isvalidate': showItem.validate}">{{ showItem.text }}</view>

		<view class="item-file-edit" v-if="showItem.isEdit">
			<view class="item-file-edit-tips" v-if="showItem.tips">{{showItem.tips}}</view>

			<view class="item-file-edit-box" v-if="showItem.fileType.length > 1">
				<view class="item-file-edit-box-item" v-for="(item, index) in showItem.fileType" :key="index">
					<view class="item-file-edit-box-item-icon" :class="['item-file-edit-box-item-' + item.type]"
						@click="choooseType(item)">
						<i class="iconfont" :class="item.icon"></i>
						<view class="item-file-edit-box-item-icon-title">{{item.typeName}}</view>
					</view>
				</view>
			</view>

			<view class="item-file-edit-choosed">
				<view class="item-file-edit-choosed-item" v-for="(item,index) in showItem.valueShow" :key="index">
					<i class="iconfont icon-guanbi" v-if="showItem.isEdit" @click="deleFile(index)"></i>
					<image @click="previewFile($event, item, index)" :src="item.cover" />
				</view>

				<view class="item-file-edit-choosed-uploader"
					v-if="showItem.isEdit && (showItem.maxlength - showItem.valueShow.length)">
          <i class="iconfont icon-chuangjiantianjiapiliangtianjia"
             v-if="showItem.fileType.length == 1" @click="choooseType(showItem.fileType[0])"></i>
					<text>{{showItem.maxlength - showItem.valueShow.length}}/{{ showItem.maxlength }}</text>
				</view>
			</view>
		</view>

		<view class="item-file-detail" v-else>
			<view class="item-file-detail-show" v-if="showItem.valueShow.length > 0">
				<view class="item-file-detail-show-item" v-for="(item,index) in showItem.valueShow" :key="index">
					<image @click="previewFile($event, item, index)" :src="item.cover" />
				</view>
			</view>
			<view class="item-file-detail-none" v-else>暂无附件</view>
		</view>

		<!-- #ifndef H5 -->
		<mt-popup ref="simpleAudio" type="bottom">
			<simple-audio @cancel="cancelAudio" @confirm="confirmAudio"></simple-audio>
		</mt-popup>
		<!-- #endif -->

		<mt-popup ref="video" type="center">
			<video id="myVideo" style="width: 96%;
			height: 240px;
			position: fixed;
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 2000;
			border-radius: 12px;" :src="playPath" @error="videoErrorCallback" @ended="videoEnd" :show-fullscreen-btn="false"
				:autoplay="true"></video>
		</mt-popup>
	</view>
</template>

<script>
	// #ifndef H5
	import simpleAudio from "./simple-audio.vue";
	// #endif
	import mixin from "../common/js/mixin.js";
	import video from "./video.js";
	import audio from "./audio.js";
	import pic from "./pic.js";
	export default {
		// #ifndef H5
		components: {
			simpleAudio
		},
		// #endif
    name: "item-file",
		mixins: [mixin, video, audio, pic],
		data() {
			return {
				allFileType: [{
						type: 'album',
						typeName: "照片",
						icon: "icon-tukuxiangce"
					}, {
						type: 'camera',
						typeName: "拍照",
						icon: "icon-xiangji"
					}, {
						type: 'pic',
						typeName: "图片",
						icon: "icon-tukuxiangce"
					},
					{
						type: 'video',
						typeName: "视频",
						icon: "icon-shipin"
					},
					{
						type: 'audio',
						typeName: "音频",
						icon: "icon-yinpin"
					},
				]
			}
		},
		created() {
			if (this.showItem.fileType.length > 0) {
				if (typeof this.showItem.fileType[0] == "string") {
					let typeArr = [];
					this.showItem.fileType.forEach(v => {
						this.allFileType.map(item => {
							if (v == item.type) {
								typeArr.push(item)
							}
						})
					})
					this.showItem.fileType = typeArr;
				}
			}
		},
		methods: {
			choooseType(item) {
				let {
					maxlength,
					valueShow
				} = this.showItem || {};

				if (valueShow.length >= maxlength) {
					uni.showToast({
						title: '附件数量已达最大值!',
						icon: 'none',
						duration: 2000
					})
					return
				}

				let picCount = maxlength - valueShow.length;
				switch (item.type) {
					case "camera":
						this.chooseImage(["camera"], picCount);
						break;
					case "album":
						this.chooseImage(["album"], picCount);
						break;
					case "pic":
						this.chooseImage(["camera", "album"], picCount);
						break;
					case "video":
						this.chooseVideo();
						break;
					case "audio":
						// #ifndef H5
						this.$refs.simpleAudio.open();
						// #endif

						// #ifdef H5
						uni.showToast({
							title: "此功能不兼容当前设备",
							icon: "none"
						})
						// #endif
						break;
					default:
						uni.showToast({
							title: "暂无此类型"
						})
						break;
				}
			},

			previewFile(e, item, index) {
				if (item.type == 'pic') {
					let picArr = [];
					this.showItem.valueShow.forEach(files => {
						if (files.type == 'pic') {
							picArr.push(files.path)
						}
					})
					uni.previewImage({
						urls: picArr,
						current: index
					});
				} else if (item.type == 'video') {
					this.$refs.video.open()

					let videoContext = uni.createVideoContext('myVideo');
					this.playPath = item.path;
					videoContext.play();
				} else {
					uni.showToast({
						title: '该文件暂不支持预览！',
						icon: 'none',
						duration: 3000
					})
				}
			},

			deleFile(index) {
				this.showItem.valueShow.splice(index, 1);
				this.changeEvent(this.showItem.valueShow);
			},
		}
	}
</script>
