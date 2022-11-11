<template>
	<!-- textarea -->
	<ItemBox :data="showItem">
		<template slot="value">
			<textarea :style="textAlign" :disabled="judgeStatus" :placeholder="inputPlaceholder"
				:placeholder-style="formUtils.placeholderStyle" 
				
				v-model="showItem.valueShow"
				:maxlength="maxlength"
				@input="inputChange($event)" @blur="inputChange($event)" />
		</template>
	</ItemBox>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";

	export default {
		name: "item-textarea",
		mixins: [mixin],
		components: {
			ItemBox
		},
		methods: {
			inputChange($event) {
				this.changeEvent($event.detail.value);
			}
		}
	};
</script>
