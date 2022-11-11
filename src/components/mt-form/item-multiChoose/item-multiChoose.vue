<template>
	<!-- multiChoose -->
	<view>
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" 
					
					:value="valueShowInput" @click="openBox('simpleMultiChoose')" />
			</template>
		</ItemBox>

		<simpleMultiChoose ref="simpleMultiChoose" 
			:options="showItem.options" 
			:valueShow="showItem.valueShow"
			:showValueDefault="showItem.showValue"
			@submit="handleSubmit($event)" @cancel="changeEvent('')"></simpleMultiChoose>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleMultiChoose from "./simple-multi-choose.vue";
	
	export default {
		name: "item-multiChoose",
		mixins: [mixin],
		components: {
			simpleMultiChoose,
			ItemBox
		},
		methods: {
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