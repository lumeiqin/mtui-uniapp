<template>
	<!-- list -->
	<view class="item-list">
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" :disabled="judgeStatus" :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" :value="valueShowInput"
					@input="inputChange($event)" />

				<view v-if="showItem.isEdit" class="item-box-value-image" @click="openBox('simpleFormList')">
					<i class="iconfont icon-xiala1"></i>
				</view>

				<simpleFormList ref="simpleFormList" :options="showItem.options" :valueShow="showItem.valueShow"
					:showValueDefault="showItem.showValue" @submit="handleSubmit($event)" @cancel="changeEvent('')">
				</simpleFormList>
			</template>
		</ItemBox>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleFormList from "./simple-form-list.vue";

	export default {
		name: "item-list",
		mixins: [mixin],
		components: {
			simpleFormList,
			ItemBox
		},
		methods: {
			inputChange($event) {
				this.$set(this.showItem, "valueShow", $event.detail.value);
				this.valueShowInput = this.showItem.valueShow;

				let checkedItems = this.formUtils.validItem(this, this.showItem);
				this.$emit("inputEvent", {
					[checkedItems.secondValue || checkedItems.value + "-name"]: checkedItems.check ? "" :
						checkedItems.valueShow
				});
			},
			handleSubmit($event) {
				this.$set(this.showItem, "valueShow", $event[this.showItem.showValue.value]);
				this.valueShowInput = this.showItem.valueShow;

				let checkedItems = this.formUtils.validItem(this, this.showItem);
				let resObj = this.formUtils._isEmpty(checkedItems.secondValue) ? {} : {
					[checkedItems.secondValue || checkedItems.value + "-name"]: checkedItems.check ? "" : checkedItems
						.valueShow
				}
				this.$emit("inputEvent", {
					...resObj,
					[checkedItems.value]: checkedItems.check ? "" : $event[checkedItems.showValue[
						checkedItems.getKey]]
				});
			},
		}
	};
</script>
