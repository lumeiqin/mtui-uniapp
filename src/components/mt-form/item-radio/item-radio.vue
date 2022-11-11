<template>
	<!-- radio -->
	<ItemBox :data="showItem">
		<template slot="value">
			<radio-group class="item-picker-value-group" @change="handleSubmit($event)">

				<label class="item-picker-value-group-item" v-for="(items, indexs) in showItem.options" :key="indexs">

					<radio :disabled="judgeStatus" :color="showItem.color? showItem.color: '#3490fc'"
						:value="items[showItem.showValue[showItem.getKey]]"
						:checked="items[showItem.showValue[showItem.getKey]] == showItem.valueShow" />

					<text class="radiotext">{{ items[showItem.showValue.value] }}</text>
				</label>
			</radio-group>
		</template>
	</ItemBox>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";

	export default {
		name: "item-radio",
		mixins: [mixin],
		components: {
			ItemBox
		},
		methods: {
			handleSubmit($event) {
				this.changeEvent($event.detail.value);
			}
		}
	};
</script>

<style lang="scss" scoped>
	.uni-radio-input {
		border: 1px solid #d1d1d1 !important;
	}
</style>
