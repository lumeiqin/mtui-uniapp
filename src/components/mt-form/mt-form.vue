<template>
	<view class="mtForm">
		<block v-for="(item, index) in showForm.property" :key="index">
			<view :class="{'mtForm-main': config}">
				<text class="delete iconfont icon-guanbi" v-if="config" @click="deleteItem(item, index)"></text>
				<!--
        【 '' | text | ID | tel |number | password 】 -->
				<block
					v-if="!item.type || item.type == 'text' || item.type == 'ID' || item.type == 'tel' || item.type == 'number' || item.type == 'password'">
					<itemInput ref="itemInput" :data="bindIsEdit(item)" @inputEvent="changeEvent" @toCamera="toCamera"
						@toFillCode="toFillCode">
					</itemInput>
				</block>
				<!-- 【 textarea 】 -->
				<block v-else-if="item.type == 'textarea'">
					<itemTextarea ref="itemTextarea" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemTextarea>
				</block>
				<!-- 【 selector 】 -->
				<block v-else-if="item.type == 'selector'">
					<itemSelector ref="itemSelector" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemSelector>
				</block>
				<!-- 【 date 】 -->
				<block v-else-if="item.type == 'date'">
					<itemDate ref="itemDate" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemDate>
				</block>
				<!-- 【 multiSelector 】 -->
				<block v-else-if="item.type == 'multiSelector'">
					<itemMultiSelector ref="itemMultiSelector" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemMultiSelector>
				</block>
				<!-- 【 multiCustom 】 -->
				<block v-else-if="item.type == 'multiCustom'">
					<itemMultiCustom ref="itemMultiCustom" :data="bindIsEdit(item)" @inputEvent="changeEvent"
						@customSearch="customSearch">
						<slot name="searchBox"></slot>
					</itemMultiCustom>
				</block>
				<!-- 【 click | location 】 -->
				<block v-else-if="item.type == 'click' || item.type == 'location'">
					<itemClickLocation ref="itemClickLocation" :data="bindIsEdit(item)" @inputEvent="changeEvent"
						@clickEvent="clickEvent">
					</itemClickLocation>
				</block>
				<!-- 【 radio 】 -->
				<block v-else-if="item.type == 'radio'">
					<itemRadio ref="itemRadio" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemRadio>
				</block>
				<!-- 【 附件上传 】 -->
				<block v-else-if="item.type == 'file'">
					<itemFile ref="itemFile" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemFile>
				</block>
				<!-- 【 code 】 -->
				<block v-else-if="item.type == 'code'">
					<itemCode ref="itemCode" :data="bindIsEdit(item)" @inputEvent="changeEvent" @codeEvent="codeEvent">
					</itemCode>
				</block>
				<!-- 【 list 】 -->
				<block v-else-if="item.type == 'list'">
					<itemList ref="itemList" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemList>
				</block>
				<!-- 【 multiChoose 】 -->
				<block v-else-if="item.type == 'multiChoose'">
					<itemMultiChoose ref="itemMultiChoose" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemMultiChoose>
				</block>
				<!-- divide -->
				<block v-else-if="item.type == 'divide'">
					<view class="mtForm-formDivide"></view>
				</block>
				<!-- title -->
				<block v-else-if="item.type == 'title'">
					<view class="mtForm-formTitle" :style="{
						fontSize: (item.fontSize || 30) + 'rpx',
						color: item.color || '#333',
						background: item.background || '#F5F7FA',
						textAlign: item.align || 'center'
					}">{{ item.text }}
					</view>
				</block>
				<view v-else>暂无此类</view>
			</view>
		</block>
	</view>
</template>

<script>
	import itemInput from "./item-input/item-input.vue";
	import itemSelector from "./item-selector/item-selector.vue";
	import itemTextarea from "./item-textarea/item-textarea.vue";
	import itemDate from "./item-date/item-date.vue";
	import itemMultiSelector from "./item-multiSelector/item-multiSelector.vue";
	import itemClickLocation from "./item-click-location/item-click-location.vue";
	import itemRadio from "./item-radio/item-radio.vue";
	import itemFile from "./item-file/item-file.vue";
	import itemMultiCustom from "./item-multiCustom/item-multiCustom.vue";
	import itemCode from "./item-code/item-code.vue"
	import itemList from "./item-list/item-list.vue"
	import itemMultiChoose from "./item-multiChoose/item-multiChoose.vue"

	import Form from "./common/js/testform.js";
	const formData = new Form();
	import FormUtils from "./common/js/form.js";
	const utils = new FormUtils();

	export default {
		name: "mt-form",
		props: {
			isEdit: {
				type: Boolean,
				default: true
			},
			formData: {
				type: Object,
				default () {
					return formData.defaultForm;
				}
			},
			config: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				showForm: {},
				inputForm: {},
				formUtils: utils
			};
		},
		watch: {
			formData(newvalue, oldvalue) {
				this.showForm = this.pickerDefault(newvalue);
			}
		},
		created() {
			// picker 设置showValue默认值，字典选项对象转数组
			this.showForm = this.pickerDefault(this.formData);
			this.defaultShow()
		},
		methods: {
			deleteItem(item, index) {
				delete this.showForm.field[item.value];
				this.showForm.property.splice(index, 1);
				this.$emit("config", this.showForm);
			},
			changeEvent(item) {
				this.inputForm = Object.assign(this.inputForm, item);
				this.$emit("change", this.inputForm);
			},
			// 单独项的方法
			// ID
			toCamera(item) {
				this.$emit("toCamera", item);
			},
			clickEvent(item) {
				this.$emit("clickEvent", item);
			},
			codeEvent(item) {
				this.$emit("codeEvent", item);
			},
			// 多级联动面板模式，搜索事件
			customSearch(value) {
				this.$emit("customSearch", value);
			},



			pickerDefault(formData) {
				if (!this.formUtils._isArray(formData.property) || formData.property.length <= 0) return;
				this.formUtils.addDictionary(formData);
				formData.property.forEach(vi => {
					switch (vi.type) {
						case "radio":
						case "selector":
						case "multiSelector":
						case "multiCustom":
						case "multiChoose":
							vi.showValue = this.formUtils._isEmpty(vi.showValue) ? {
								key: "id",
								value: "value"
							} : {
								key: "id",
								value: "value",
								...vi.showValue
							}
							vi.getKey = this.formUtils._isEmpty(vi.getKey) ? "key" : vi.getKey;

							break;
						case "list":
							vi.showValue = this.formUtils._isEmpty(vi.showValue) ? {
								key: "id",
								value: "value",
								brief: "brief"
							} : {
								key: "id",
								value: "value",
								brief: "brief",
								...vi.showValue
							}
							vi.getKey = this.formUtils._isEmpty(vi.getKey) ? "key" : vi.getKey;

							break;
						case "date":
							vi.start = this.formUtils._isEmpty(vi.start) ? "1970-01-01 00:00:00" : vi.start;
							vi.end = this.formUtils._isEmpty(vi.end) ? "2099-12-31 23:59:59" : vi.end;
							vi.field = this.formUtils._isEmpty(vi.field) ? "second" : vi.field;

							break;
						case "file":
							vi.maxlength = this.formUtils._isEmpty(vi.maxlength) ? 6 : vi.maxlength;
							vi.fileType = this.formUtils._isEmpty(vi.fileType) ? ['pic', 'video', 'audio'] : vi
								.fileType;
							vi.tips = this.formUtils._isEmpty(vi.tips) ? "支持上传图片、视频，附件, 单个附件大小不得超过100M" : vi.tips;
							vi.valueShow = !this.formUtils._isEmpty(vi.valueShow) && this.formUtils._isArray(vi
								.valueShow) ? vi.valueShow : [];
							break;
					}

					if (Object.prototype.toString.call(vi.options) == "[object Object]") {
						let arr = [];
						for (let k in vi.options) {
							arr.push({
								[vi.showValue.key]: k,
								[vi.showValue.value]: vi.options[k]
							})
						}
						vi.options = arr;
					}
				})
				return formData
			},
			defaultShow() {
				this.showForm.property = this.showForm.property.map(v => {
					let itemValue = this.showForm.field[v.value];
					if (!this.formUtils._isEmpty(itemValue)) {
						v.valueShow = itemValue;
						if (v.type == "file") {
							v.valueShow = this.formUtils._isArray(itemValue) && this.formUtils.initFiles(
								itemValue);
						}
						if ((v.type == "radio" || v.type == "selector" || v.type == "list") && !this.formUtils
							._isEmpty(v.options)) {
							this.formUtils._isArray(v.options) && v.options
								.forEach(vi => {
									if (itemValue == vi[v.showValue[v.getKey]]) {
										v.valueShow = v.type == "radio" ? vi[v.showValue[v.getKey]] : vi[v
											.showValue.value]
									}
								})
						}
						if (v.type == "multiChoose" && !this.formUtils._isEmpty(v.options)) {
							let arr = [];
							itemValue.split(",").map(vv => {
								this.formUtils._isArray(v.options) && v.options
									.forEach(vi => {
										if (vi[v.showValue[v.getKey]] == vv) {
											arr.push(vi[v.showValue.value])
										}
									})
								return vv
							})
							v.valueShow = arr.join(",")
						}
						if (v.type == "code") {
							v.phoneNum = this.showForm.field[v.phone];
						}
					}
					return v
				})
				this.$set(this.showForm, 'field', this.showForm.field);
				this.$set(this.showForm, 'property', this.showForm.property);
			},
			validate() {
				var resultObj = [];

				// '' | text | ID | tel |number | password
				this.$refs.itemInput &&
					this.$refs.itemInput.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// code
				this.$refs.itemCode &&
					this.$refs.itemCode.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// textarea
				this.$refs.itemTextarea &&
					this.$refs.itemTextarea.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// selector
				this.$refs.itemSelector &&
					this.$refs.itemSelector.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// date
				this.$refs.itemDate &&
					this.$refs.itemDate.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// multiSelector
				this.$refs.itemMultiSelector &&
					this.$refs.itemMultiSelector.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// multiCustom
				this.$refs.itemMultiCustom &&
					this.$refs.itemMultiCustom.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// click | location
				this.$refs.itemClickLocation &&
					this.$refs.itemClickLocation.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// radio
				this.$refs.itemRadio &&
					this.$refs.itemRadio.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// list
				this.$refs.itemList &&
					this.$refs.itemList.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// multiChoose
				this.$refs.itemMultiChoose &&
					this.$refs.itemMultiChoose.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});
				// file
				this.$refs.itemFile &&
					this.$refs.itemFile.forEach(item => {
						let itemRes = item.validItem();
						itemRes && resultObj.push(itemRes);
					});

				if (resultObj.length > 0) {
					this.formData.property.forEach(v => {
						if (v.value == resultObj[0]) {
							uni.showToast({
								icon: "none",
								title: v.text + "有误"
							})
						}
					})
				}
				return resultObj.length < 1;
			},

			// 将所有参数传送到组件上
			bindIsEdit(item) {
				item.isEdit = this.isEdit;
				return item;
			},
			// 初始化表单
			initFormData() {
				this.inputForm = {}
				this.showForm.property.length && this.showForm.property.forEach(v => {
					this.showForm.field[v.value] = ''
					if (!this.formUtils._isEmpty(v.valueShow)) {
						v.valueShow = ''
					}
				})
			},
			// 获取表单项
			// type: 为空：删除所有参数为空的项，all返回所有参数
			getFormObj(type) {
				let newObj = Object.assign(this.showForm.field, this.inputForm);

				for (let k in newObj) {
					if (this.formUtils._isEmpty(k)) delete newObj[k];
					if (this.formUtils._isEmpty(newObj[k]) && type != "all") {
						delete newObj[k]
					}
				}
				return newObj;
			},
			// 更新表单
			updateFormData(formdata) {
				this.showForm = JSON.parse(JSON.stringify(formdata));
				this.$set(this.showForm, 'field', formdata.field);
				this.$set(this.showForm, 'property', formdata.property);

				this.showForm = this.pickerDefault(this.showForm);
				this.defaultShow();
			},

			// tel
			toFillCode(value, valueShow) {
				if (!this.formUtils._isEmpty(valueShow)) {
					this.showForm.property.forEach(item => {
						if (item.type == "code" && item.phone == value) {
							item.phoneNum = valueShow;
						}
					})
				}
			},
		},

		components: {
			itemInput,
			itemSelector,
			itemTextarea,
			itemDate,
			itemMultiSelector,
			itemClickLocation,
			itemRadio,
			itemFile,
			itemMultiCustom,
			itemCode,
			itemList,
			itemMultiChoose
		},
	};
</script>
