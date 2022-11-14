<template>
	<!-- ID | text | tel | number | password -->
	<ItemBox :data="showItem">
		<template slot="value">
			<input :style="textAlign" :disabled="judgeStatus" :placeholder="inputPlaceholder"
				:placeholder-style="formUtils.placeholderStyle"
				
				:type="showItem.type === 'ID' ? 'text' : showItem.type || 'text'" 
				:maxlength="maxlength"
				:value="showItem.valueShow" 
				@input="inputChange($event)" @blur="inputChange($event)" />
				
			<view class="item-box-value-image" v-if="showItem.type === 'ID' && showItem.isEdit">
				<i class="iconfont icon-saomiao" @click="toCamera"></i>
			</view>
		</template>
	</ItemBox>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";

	export default {
		name: "item-input",
		mixins: [mixin],
		components: {
			ItemBox
		},
		methods: {
			inputChange($event) {
				this.changeEvent($event.detail.value);
				if (this.showItem.type == "tel") {
					this.$emit("toFillCode",this.showItem.value, $event.detail.value)
				}
			},
			toCamera() {
				this.$emit("toCamera", this.showItem);
			}
		}
	};
</script>
