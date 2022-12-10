<template>
	<SelectBox ref="SelectBox" @cancel="_onCancel" @submit="_onSubmit">
		<template slot="picker">
			<picker-view :value="pickerValue" @change="_onChange">
				<picker-view-column>
					<view class="select-box-body-columnItem" v-for="(item, index) in chooseList" :key="index">
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
		name: "simple-selector",
		mixins: [pickerMixin],
		components: {
			SelectBox
		},
		methods: {
			_onChange(e) {
				this.pickerValue = e.detail.value;
				this.$emit("change", this.pickerValue);
			},
			_onSubmit(e) {
				let pickObj;
				let showTitle = this.chooseList[this.pickerValue[0]][this.showValue.value];
				pickObj = {
					label: showTitle,
					value: this.pickerValue,
					[this.showValue.value]: showTitle,
					[this.showValue.key]: this.chooseList[this.pickerValue[0]][this.showValue.key]
				}
				this.$emit("submit", pickObj);
				this.close();
			}
		}
	};
</script>
