<template>
	<SelectBox ref="SelectBox" @cancel="_onCancel" @submit="_listSubmit">
		<template slot="picker">
			<scroll-view scroll-y="true">
				<view class="scroll-view-item" v-for="(item, index) in chooseList" :key="index"
					:class="{'selected': item.checked}" @click="choseItem(item)">
					<i class="iconfont icon-xuanzeyixuanze" v-if="item.checked"></i>
					<i class="iconfont icon-xuanzeweixuanze" v-else></i>
					<view class="brief ell">{{ item[showValue.value] }}</view>
				</view>
			</scroll-view>
		</template>
	</SelectBox>
</template>

<script>
	import SelectBox from "../common/select-box.vue"
	import pickerMixin from "../common/js/pickerMixin.js";

	export default {
		name: "simple-multi-choose",
		mixins: [pickerMixin],
		components: {
			SelectBox
		},
		data() {
			return {
				selectedId: [],
				selectedText: [],
				allSelected: [],
			};
		},
		created() {
			this.showValue = this.showValueDefault;
			this.chooseList = this.options;
			this.pickerValue = this.defaultPicker;
			this.valueShowPage = this.valueShow;
			this.initPage()
		},
		methods: {
			initPage() {
				this.valueShowPage.split(",").map(vv => {
					this.formUtils._isArray(this.chooseList) && this.chooseList
						.forEach(vi => {
							if (vi[this.showValue.value] == vv) {
								this.$set(vi, "checked", true)
							}
						})
					return vv
				})
			},
			_onCancel() {
				this.chooseList.forEach(v => v.checked = false)
				this.$forceUpdate();
				this._listCancel()
			},
			choseItem(item) {
				item.checked = !item.checked;
				this.$set(item, "checked", item.checked);
				this.$forceUpdate();
				this.resetData();
				this.chooseList.forEach(v => {
					if (v.checked) {
						this.selectedId.push(v[this.showValue.key])
						this.selectedText.push(v[this.showValue.value])
						this.allSelected.push(v)
					}
				})
			}
		}
	};
</script>
