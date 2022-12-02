<template>
	<view>
		<mt-navbar fixed title="Modal" emit="true" :config="pagenav" @backClick="popupClick"></mt-navbar>
		<view class="comp">
			<ry-title>
				<mt-modal ref="one"></mt-modal>
				<mt-button @click="openModal('one')">基础用法</mt-button>
			</ry-title>

			<ry-title title="显示取消按钮">
				<mt-modal ref="two" :showCancel="true"></mt-modal>
				<mt-button @click="openModal('two')">显示取消按钮</mt-button>
			</ry-title>

			<ry-title title="自定义内容">
				<mt-modal ref="three" title="">
					<template slot="content">
						<view style="padding: 30rpx;">自定义内容</view>
					</template>
				</mt-modal>
				<mt-button @click="openModal('three')">自定义内容</mt-button>
			</ry-title>


			<ry-title title="自定义参数">
				<mt-modal ref="four" :config="modalConfig"></mt-modal>
				<mt-button @click="openModal('four')">自定义参数</mt-button>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {
				modalConfig: {
					align: "center"
				},
			}
		},
		methods: {
			openModal(type) {
				this.$refs[type].open()
			},
		}
	}
</script>
