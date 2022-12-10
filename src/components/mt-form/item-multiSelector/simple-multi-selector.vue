<template>
	<SelectBox ref="SelectBox" @cancel="_onCancel" @submit="_onSubmit">
		<template slot="picker">
			<picker-view :value="pickerValue" @change="_onChange">
				<picker-view-column>
					<view class="select-box-body-columnItem" v-for="(item, index) in firstStepList" :key="index">
						{{ item[showValue.value] }}
					</view>
				</picker-view-column>

				<picker-view-column>
					<view class="select-box-body-columnItem" v-for="(item, index) in secondStepList" :key="index">
						{{ item[showValue.value] }}
					</view>
				</picker-view-column>

				<picker-view-column v-if="column >= 3">
					<view class="select-box-body-columnItem" v-for="(item, index) in thirdStepList" :key="index">
						{{ item[showValue.value] }}
					</view>
				</picker-view-column>

				<picker-view-column v-if="column >= 4">
					<view class="select-box-body-columnItem" v-for="(item, index) in fourthStepList" :key="index">
						{{ item[showValue.value] }}
					</view>
				</picker-view-column>

				<picker-view-column v-if="column == 5">
					<view class="select-box-body-columnItem" v-for="(item, index) in fifthStepList" :key="index">
						{{ item[showValue.value] }}
					</view>
				</picker-view-column>
			</picker-view>
		</template>
	</SelectBox>
</template>

<script>
	import pickerMixin from "../common/js/pickerMixin.js";
	import SelectBox from "../common/select-box.vue"
	export default {
		name: "simple-multi",
		mixins: [pickerMixin],
		components: {
			SelectBox
		},
		data() {
			return {
				firstStepList: [],
				secondStepList: [],
				thirdStepList: [],
				fourthStepList: [],
				fifthStepList: []
			};
		},
		created() {
			this.init();
		},
		watch: {
			options(newValue, oldValue) {
				this.chooseList = newValue;
				this.init();
			},
			defaultPicker(newValue, oldValue) {
				this.pickerValue = newValue;
				this.init();
			}
		},
		methods: {
			init() {
				this.getInfos(this.defaultPicker);
			},
			getInfos(arr) {
				let _this = this;
				if (this.column == 3) {
					_this.firstStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children;
					_this.secondStepList =
						_this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]].children ? _this
						.chooseList[0].children[arr[0]].children : [];
					_this.thirdStepList =
						_this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]].children[arr[1]]
						.children ?
						_this.chooseList[0].children[arr[0]].children[arr[1]].children : [];
					_this.thirdStepList = _this.thirdStepList && _this.thirdStepList.length == 0 ? _this.empty : _this
						.thirdStepList;
				} else if (this.column == 4) {
					_this.firstStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children;
					_this.secondStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children;
					_this.thirdStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children[arr[1]].children;
					_this.fourthStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children[arr[1]].children[arr[2]].children;
					_this.fourthStepList = _this.fourthStepList && _this.fourthStepList.length == 0 ? _this.empty : _this
						.fourthStepList;
				} else if (this.column == 5) {
					_this.firstStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children;
					_this.secondStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children;
					_this.thirdStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children[arr[1]].children;
					_this.fourthStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children[arr[1]].children[arr[2]].children;
					_this.fifthStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children[arr[1]].children[arr[2]].children[arr[3]].children;
					_this.fifthStepList = _this.fifthStepList && _this.fifthStepList.length == 0 ? _this.empty : _this
						.fifthStepList;
				} else {
					_this.firstStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children;
					_this.secondStepList = _this.chooseList && _this.chooseList[0] && _this.chooseList[0].children[arr[0]]
						.children;
					_this.secondStepList = _this.secondStepList && _this.secondStepList.length == 0 ? _this.empty : _this
						.secondStepList;
				}
			},

			_getLabel() {
				let first =
					this.firstStepList[this.pickerValue[0]] && this.firstStepList[this.pickerValue[0]][this.showValue
						.value
					] ?
					this.firstStepList[this.pickerValue[0]][this.showValue.value] :
					"";
				let second =
					this.secondStepList[this.pickerValue[1]] && this.secondStepList[this.pickerValue[1]][this.showValue
						.value
					] ?
					this.secondStepList[this.pickerValue[1]][this.showValue.value] :
					"";
				if (this.column >= 3) {
					let third =
						this.secondStepList[this.pickerValue[1]] && this.thirdStepList[this.pickerValue[2]][this.showValue
							.value
						] ?
						this.thirdStepList[this.pickerValue[2]][this.showValue.value] :
						"";
					if (this.column >= 4) {
						let fourth =
							this.secondStepList[this.pickerValue[1]] && this.thirdStepList[this.pickerValue[2]] && this
							.fourthStepList[this.pickerValue[3]][this.showValue.value] ?
							this.fourthStepList[this.pickerValue[3]][this.showValue.value] :
							"";
						if (this.column == 5) {
							let fifth =
								this.secondStepList[this.pickerValue[1]] &&
								this.thirdStepList[this.pickerValue[2]] &&
								this.fourthStepList[this.pickerValue[3]] &&
								this.fifthStepList[this.pickerValue[4]][this.showValue.value] ?
								this.fifthStepList[this.pickerValue[4]][this.showValue.value] :
								"";
							return first + (second ? "-" + second : "") + (third ? "-" + third : "") + (fourth ? "-" +
								fourth : "") + (fifth ? "-" + fifth : "");
						}
						return first + (second ? "-" + second : "") + (third ? "-" + third : "") + (fourth ? "-" + fourth :
							"");
					}
					return first + (second ? "-" + second : "") + (third ? "-" + third : "");
				}
				return first + (second ? "-" + second : "");
			},
			getFirstData(index) {
				return this.firstStepList;
			},
			getSecondData(index) {
				return this.firstStepList[index].children;
			},
			getThirdData(index, index2) {
				if (this.firstStepList[index].children[index2].children) {
					return this.firstStepList[index].children[index2].children;
				} else {
					return [];
				}
			},
			getFourthData(index, index2, index3) {
				return this.firstStepList[index].children[index2].children[index3].children;
			},
			getFifthData(index, index2, index3, index4) {
				return this.firstStepList[index].children[index2].children[index3].children[index4].children;
			},
			_getFirstCode() {
				return this.firstStepList && this.firstStepList[this.pickerValue[0]] && this.firstStepList[this
					.pickerValue[0]][this.showValue.key];
			},
			_getSecondCode() {
				return this.secondStepList && this.secondStepList[this.pickerValue[1]] && this.secondStepList[this
					.pickerValue[1]][this.showValue.key];
			},
			_getThirdCode() {
				return this.thirdStepList && this.thirdStepList[this.pickerValue[2]] && this.thirdStepList[this
					.pickerValue[2]][this.showValue.key];
			},
			_getFourthCode() {
				return this.fourthStepList && this.fourthStepList[this.pickerValue[3]] && this.fourthStepList[this
					.pickerValue[3]][this.showValue.key];
			},
			_getFifthCode() {
				return this.fifthStepList && this.fifthStepList[this.pickerValue[4]] && this.fifthStepList[this
					.pickerValue[4]][this.showValue.key];
			},
			_getLastItem() {
				if (this.column >= 2) {
					let lastItem2 =
						this.firstStepList[this.pickerValue[0]] && this.secondStepList[this.pickerValue[1]][this.showValue
							.value
						] ?
						this.secondStepList[this.pickerValue[1]] :
						this.firstStepList[this.pickerValue[0]];
					if (this.column >= 3) {
						let lastItem3 =
							this.secondStepList[this.pickerValue[1]] && this.thirdStepList[this.pickerValue[2]][this
								.showValue.value
							] ?
							this.thirdStepList[this.pickerValue[2]] :
							this.secondStepList[this.pickerValue[1]];
						if (this.column >= 4) {
							let lastItem4 =
								this.secondStepList[this.pickerValue[1]] && this.thirdStepList[this.pickerValue[2]] && this
								.fourthStepList[this.pickerValue[3]][this.showValue.value] ?
								this.fourthStepList[this.pickerValue[3]] :
								this.thirdStepList[this.pickerValue[2]];
							if (this.column == 5) {
								let lastItem5 =
									this.secondStepList[this.pickerValue[1]] &&
									this.thirdStepList[this.pickerValue[2]] &&
									this.fourthStepList[this.pickerValue[3]] &&
									this.fifthStepList[this.pickerValue[4]][this.showValue.value] ?
									this.fifthStepList[this.pickerValue[4]] :
									this.fourthStepList[this.pickerValue[3]];
								return lastItem5;
							}
							return lastItem4;
						}
						return lastItem3;
					}
					return lastItem2;
				}
			},
			_onChange(e) {
				let changePickerValue = e.detail.value;
				// 第一级发生滚动
				if (this.pickerValue[0] !== changePickerValue[0]) {
					changePickerValue[1] = 0;
					changePickerValue[2] = 0;
					changePickerValue[3] = 0;
					changePickerValue[4] = 0;

					if (this.column >= 3) {
						this.thirdStepList = this.getThirdData(changePickerValue[0], changePickerValue[1]);
						if (this.column >= 4) {
							this.fourthStepList = this.getFourthData(changePickerValue[0], changePickerValue[1],
								changePickerValue[2]);
							if (this.column == 5) {
								this.fifthStepList = this.getFifthData(changePickerValue[0], changePickerValue[1],
									changePickerValue[2], changePickerValue[3]);
								this.fifthStepList = this.fifthStepList && this.fifthStepList.length == 0 ? this.empty :
									this.fifthStepList;
							}
							this.fourthStepList = this.fourthStepList && this.fourthStepList.length == 0 ? this.empty :
								this.fourthStepList;
						}
						this.thirdStepList = this.thirdStepList && this.thirdStepList.length == 0 ? this.empty : this
							.thirdStepList;
					}
					this.secondStepList = this.getSecondData(changePickerValue[0]) || this.empty;
					// 第二级滚动
				} else if (this.pickerValue[1] !== changePickerValue[1] && this.column >= 3) {
					changePickerValue[2] = 0;
					changePickerValue[3] = 0;
					changePickerValue[4] = 0;

					if (this.column >= 4) {
						this.fourthStepList = this.getFourthData(changePickerValue[0], changePickerValue[1],
							changePickerValue[2]);
						if (this.column == 5) {
							this.fifthStepList = this.getFifthData(changePickerValue[0], changePickerValue[1],
								changePickerValue[2], changePickerValue[3]);
							this.fifthStepList = this.fifthStepList && this.fifthStepList.length == 0 ? this.empty : this
								.fifthStepList;
						}
						this.fourthStepList = this.fourthStepList && this.fourthStepList.length == 0 ? this.empty : this
							.fourthStepList;
					}

					this.thirdStepList = this.getThirdData(changePickerValue[0], changePickerValue[1]);
					this.thirdStepList = this.thirdStepList && this.thirdStepList.length == 0 ? this.empty : this
						.thirdStepList;
					// 第三级滚动
				} else if (this.pickerValue[2] !== changePickerValue[2] && this.column >= 4) {
					changePickerValue[3] = 0;
					changePickerValue[4] = 0;

					if (this.column == 5) {
						this.fifthStepList = this.getFifthData(changePickerValue[0], changePickerValue[1],
							changePickerValue[2], changePickerValue[3]);
						this.fifthStepList = this.fifthStepList && this.fifthStepList.length == 0 ? this.empty : this
							.fifthStepList;
					}

					this.fourthStepList = this.getFourthData(changePickerValue[0], changePickerValue[1], changePickerValue[
						2]);
					this.fourthStepList = this.fourthStepList && this.fourthStepList.length == 0 ? this.empty : this
						.fourthStepList;
					// 第四级滚动
				} else if (this.pickerValue[3] !== changePickerValue[3] && this.column == 5) {
					changePickerValue[4] = 0;

					this.fifthStepList = this.getFifthData(changePickerValue[0], changePickerValue[1], changePickerValue[
						2], changePickerValue[3]);
					this.fifthStepList = this.fifthStepList && this.fifthStepList.length == 0 ? this.empty : this
						.fifthStepList;
				}
				this.pickerValue = changePickerValue;
			},
			_onSubmit() {
				let pickObj;
				if (this.column == 3) {
					pickObj = {
						label: this._getLabel(),
						value: this.pickerValue,
						firstCode: this._getFirstCode(),
						secondCode: this._getSecondCode(),
						thirdCode: this._getThirdCode(),
						lastItem: this._getLastItem(),
						[this.showValue.value]: this._getLabel().split("-"),
						[this.showValue.key]: [this._getFirstCode(), this._getSecondCode(), this._getThirdCode()]
					};
				} else if (this.column == 4) {
					pickObj = {
						label: this._getLabel(),
						value: this.pickerValue,
						firstCode: this._getFirstCode(),
						secondCode: this._getSecondCode(),
						thirdCode: this._getThirdCode(),
						fourthCode: this._getFourthCode(),
						lastItem: this._getLastItem(),
						[this.showValue.value]: this._getLabel().split("-"),
						[this.showValue.key]: [this._getFirstCode(), this._getSecondCode(), this._getThirdCode(), this
							._getFourthCode()
						]
					};
				} else if (this.column == 5) {
					pickObj = {
						label: this._getLabel(),
						value: this.pickerValue,
						firstCode: this._getFirstCode(),
						secondCode: this._getSecondCode(),
						thirdCode: this._getThirdCode(),
						fourthCode: this._getFourthCode(),
						fifthCode: this._getFifthCode(),
						lastItem: this._getLastItem(),
						[this.showValue.value]: this._getLabel().split("-"),
						[this.showValue.key]: [this._getFirstCode(), this._getSecondCode(), this._getThirdCode(), this
							._getFourthCode(), this._getFifthCode()
						]
					};
				} else {
					pickObj = {
						label: this._getLabel(),
						value: this.pickerValue,
						firstCode: this._getFirstCode(),
						secondCode: this._getSecondCode(),
						lastItem: this._getLastItem(),
						[this.showValue.value]: this._getLabel().split("-"),
						[this.showValue.key]: [this._getFirstCode(), this._getSecondCode()]
					};
				}
				this.$emit("submit", pickObj);
				this.close();
			}
		}
	};
</script>
