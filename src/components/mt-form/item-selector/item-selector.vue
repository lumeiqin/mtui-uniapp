<template>
	<!-- selector -->
	<view>
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" :value="valueShowInput"
					@click="openBox('simpleSelector')" />
			</template>
		</ItemBox>
		<simpleSelector ref="simpleSelector" :options="showItem.options" :defaultPicker="defaultSelect"
			:showValueDefault="showItem.showValue" @submit="handleSubmit($event)" @cancel="changeEvent('')">
		</simpleSelector>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleSelector from "./simple-selector.vue";

	export default {
		name: "item-selector",
		mixins: [mixin],
		components: {
			simpleSelector,
			ItemBox
		},
		methods: {
			handleSubmit($event) {
				this.$set(this.showItem, "valueShow", $event.label);
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
			}
		}
	};
</script>