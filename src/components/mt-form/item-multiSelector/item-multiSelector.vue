<template>
	<!-- multiSelector -->
	<view>
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" :value="valueShowInput"
					@click="openBox('simpleMultiSelector')" />
			</template>
		</ItemBox>

		<simpleMultiSelector ref="simpleMultiSelector" :options="showItem.options" :defaultPicker="defaultSelect"
			:column="showItem.column" :showValueDefault="showItem.showValue" @submit="handleSubmit($event)"
			@cancel="changeEvent('')">
		</simpleMultiSelector>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleMultiSelector from "./simple-multi-selector.vue";
	export default {
		name: "item-multiSelector",
		mixins: [mixin],
		components: {
			simpleMultiSelector,
			ItemBox
		},
		methods: {
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