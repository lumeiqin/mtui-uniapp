<template>
	<!-- click | location -->
	<ItemBox :data="showItem">
		<template slot="value">
			<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder" :placeholder-style="formUtils.placeholderStyle"
				
				:value="showItem.valueShow" @click="clickEvent($event)" />
		</template>
	</ItemBox>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";

	export default {
		name: "item-click-location",
		mixins: [mixin],
		components: {
			ItemBox
		},
		methods: {
			clickEvent($event) {
				let _this = this;
				if (_this.judgeStatus) return;

				if (_this.showItem.type === "click") {
					_this.$emit("clickEvent", _this.showItem);
				} else {
					uni.chooseLocation({
						complete(res) {
							_this.$set(_this.showItem, "valueShow", res.address)

							let checkedItems = _this.formUtils.validItem(_this, _this.showItem);
							_this.$emit("inputEvent", {
								[checkedItems.x || 'x']: checkedItems.check ? "" : res.longitude || "",
								[checkedItems.y || 'y']: checkedItems.check ? "" : res.latitude || "",
								[checkedItems.value || 'address']: checkedItems.check ? "" : checkedItems
									.valueShow ||
									""
							});
						}
					});
				}
			}
		}
	};
</script>
