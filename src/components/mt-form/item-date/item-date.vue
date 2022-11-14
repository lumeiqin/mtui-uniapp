<template>
	<!-- date -->
	<view>
		<ItemBox :data="showItem">
			<template slot="value">
				<input :style="textAlign" type="text" disabled :placeholder="pickPlaceholder"
					:placeholder-style="formUtils.placeholderStyle" :value="valueShowInput"
					@click="openBox('simpleDate')" />
			</template>
		</ItemBox>

		<simpleDate ref="simpleDate" :startDate="showItem.start" :endDate="showItem.end" :field="showItem.field"
			@submit="handleSubmit($event)" @cancel="changeEvent('')"></simpleDate>
	</view>
</template>

<script>
	import mixin from "../common/js/mixin.js";
	import ItemBox from "../common/item-box.vue";
	import simpleDate from "./simple-date.vue";

	export default {
		name: "item-date",
		mixins: [mixin],
		components: {
			simpleDate,
			ItemBox
		},
		methods: {
			handleSubmit($event) {
				this.changeEvent($event.total);
			}
		}
	};
</script>