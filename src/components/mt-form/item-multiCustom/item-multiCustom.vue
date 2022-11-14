<template>
	<!-- multiCustom -->
	<view>
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" :value="valueShowInput"
					@click="openBox('simpleMultiCustom')" />
			</template>
		</ItemBox>

		<simpleMultiCustom ref="simpleMultiCustom" :title="showItem.text" :options="showItem.options"
			:showValueDefault="showItem.showValue" :search="showItem.search" @submit="handleSubmit($event)" @cancel="changeEvent('')"
			@customSearch="customSearch">
			<slot></slot>
		</simpleMultiCustom>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleMultiCustom from "./simple-multi-custom.vue";

	export default {
		name: "item-multiCustom",
		mixins: [mixin],
		components: {
			simpleMultiCustom,
			ItemBox
		},
		methods: {
			customSearch(value) {
				this.$emit("customSearch", value);
			},
			handleSubmit($event) {
				this.$set(this.showItem, "valueShow", $event.label)
				this.valueShowInput = this.showItem.valueShow;

				let checkedItems = this.formUtils.validItem(this, this.showItem);
				let resObj = this.formUtils._isEmpty(checkedItems.secondValue) ? {} : {
					[checkedItems.secondValue || checkedItems.value + "-name"]: checkedItems.check ? "" : checkedItems
						.valueShow
				}
				this.$emit("inputEvent", {
					...resObj,
					[checkedItems.value]: checkedItems.check ? "" : $event.lastItem[checkedItems.showValue[
						checkedItems.getKey]]
				});
			}
		}
	};
</script>