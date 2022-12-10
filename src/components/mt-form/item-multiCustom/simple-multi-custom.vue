<template>
	<SelectBox ref="SelectBox" :title="title" :noConfirm="false" @cancel="_onCancel">
		<template slot="picker">
			<view class="searchBox" v-if="search">
				<input type="text" v-model="keyword" placeholder="请输入搜索关键字" @input="searchInput" />
			</view>
			<view v-if="!keyword">
				<view class="select-box-body-tabBox">
					<mt-tabs style="width: 100%;" ref="simpleTab" :showValue="showValue" :tabData="chooseItems"
						:activeIndex="activeTab" @tabClick="tabChange">
					</mt-tabs>
				</view>

				<view class="select-box-body-valueList">
					<scroll-view scroll-y="true">
						<view class="item" v-for="(item,index) in activeLayer" :key="index"
							:class="(chooseIndex[activeLayerNum] === index)? 'multiItem-active':'multiItem'"
							@click="pickerChange(item, index)">
							{{item[showValue.value]}}
							<i class="iconfont icon-danse_gengduojiantou"
								v-show="item.children && item.children.length"></i>
						</view>
					</scroll-view>
				</view>
			</view>
			<view v-else>
				<slot></slot>
			</view>
		</template>
	</SelectBox>
</template>

<script>
	import pickerMixin from "../common/js/pickerMixin.js";
	import SelectBox from "../common/select-box.vue"

	export default {
		name: "simple-multi-custom",
		mixins: [pickerMixin],
		components: {
			SelectBox
		},
		data() {
			return {
				activeTab: 0,

				activeLayer: [],
				activeLayerNum: 0,

				showItems: ['请选择'],
				chooseItems: ['请选择'],
				chooseNames: [],
				chooseValues: [],
				chooseIndex: [],

				keyword: ""
			};
		},
		methods: {
			searchInput(e) {
				this.keyword = e.detail.value;
				this.$emit("customSearch", this.keyword);
			},
			init() {
				this.activeLayer = this.chooseList && this.chooseList[0] && this.chooseList[0].children;
			},
			pickerChange(item, index) {
				let _this = this;

				_this.chooseItems[_this.activeLayerNum] = item;
				_this.$refs.simpleTab.initTab();

				_this.chooseNames[_this.activeLayerNum] = item[this.showValue.value];
				_this.chooseValues[_this.activeLayerNum] = item[this.showValue.key];
				_this.chooseIndex[_this.activeLayerNum] = index;

				_this.$nextTick(() => {
					setTimeout(() => {
						_this.activeTab = _this.chooseItems.length - 1;
						_this.activeLayerNum = _this.chooseItems.length;
					}, 100);
				});

				if (item.children && item.children.length) {
					_this.activeLayer = [].concat(item.children);
				} else {
					_this.pickerConfirm();
				}
			},
			tabChange(actives, activeIndex) {
				let _this = this;

				this.activeTab = activeIndex;
				this.chooseItems.splice(activeIndex + 1, this.chooseItems.length - activeIndex);
				this.chooseNames.splice(activeIndex + 1, this.chooseItems.length - activeIndex);
				this.activeLayer = activeIndex - 1 >= 0 ? this.chooseItems[activeIndex - 1].children : this.chooseList[0]
					.children;

				this.$refs.simpleTab.initTab();
				this.$nextTick(() => {
					setTimeout(() => {
						_this.activeLayerNum = _this.chooseItems.length >= 1 ? _this.chooseItems.length -
							1 : 0;
					}, 100);
				});
			},
			pickerConfirm() {
				this._$emit('submit');
				this.close();
			},
			open() {
				this.$refs.SelectBox.open()
				this.chooseItems = ["请选择"];
				this.chooseNames = [];
				this.chooseIndex = [];
				this.activeTab = 0;
				this.activeLayerNum = 0;

				this.init();
				this.$nextTick(() => {
					setTimeout(() => {
						this.activeTab = this.chooseItems.length - 1;
					}, 100);
				});
			},
			_$emit(emitName) {
				let pickObj = {
					label: this.chooseNames.join("-"),
					value: this.chooseIndex,
					...this._getCodeItem(),
					lastItem: this._getLastItem(),
					[this.showValue.value]: this.chooseNames,
					[this.showValue.key]: this.chooseValues,
				};
				this.$emit(emitName, pickObj);
			},
			_getCodeItem() {
				let attributeList = ["firstCode", "secondCode", "thirdCode", "fourthCode", "fifthCode"];
				let disassembleObj = {};
				this.chooseValues.forEach((val, index) => {
					disassembleObj[attributeList[index]] = val;
				})
				return disassembleObj;
			},
			_getLastItem() {
				let chooseItemsCatch = [].concat(this.chooseItems).reverse();
				return chooseItemsCatch[0];
			}
		}
	}
</script>

<style lang="scss" scoped>
	.searchBox {
		width: 100%;
		background: #F7F7F7;
		padding: 20rpx 30rpx;

		input {
			width: 100%;
			height: 70rpx;
			background: #fff;
			border-radius: 40rpx;
			padding: 0 30rpx;
			box-sizing: border-box;
			font-size: 28rpx;
		}
	}
</style>
