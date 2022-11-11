<template>
	<view class="mtForm">
		<block v-for="(item, index) in showForm.property" :key="index">
			<view :class="{'mtForm-main': config}">
				<text class="delete iconfont icon-guanbi" v-if="config" @click="deleteItem(item, index)"></text>
				<!-- 
				【 '' | text | ID | tel |number | password 】 -->
				<block
					v-if="!item.type || item.type == 'text' || item.type == 'ID' || item.type == 'tel' || item.type == 'number' || item.type == 'password'">
					<itemInput ref="itemInput" :data="bindIsEdit(item)" @inputEvent="changeEvent" @toCamera="toCamera"
						@toFillCode="toFillCode">
					</itemInput>
				</block>
				<!-- 【 textarea 】 -->
				<block v-else-if="item.type == 'textarea'">
					<itemTextarea ref="itemTextarea" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemTextarea>
				</block>
				<!-- 【 selector 】 -->
				<block v-else-if="item.type == 'selector'">
					<itemSelector ref="itemSelector" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemSelector>
				</block>
				<!-- 【 date 】 -->
				<block v-else-if="item.type == 'date'">
					<itemDate ref="itemDate" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemDate>
				</block>
				<!-- 【 multiSelector 】 -->
				<block v-else-if="item.type == 'multiSelector'">
					<itemMultiSelector ref="itemMultiSelector" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemMultiSelector>
				</block>
				<!-- 【 multiCustom 】 -->
				<block v-else-if="item.type == 'multiCustom'">
					<itemMultiCustom ref="itemMultiCustom" :data="bindIsEdit(item)" @inputEvent="changeEvent"
						@customSearch="customSearch">
						<slot name="searchBox"></slot>
					</itemMultiCustom>
				</block>
				<!-- 【 click | location 】 -->
				<block v-else-if="item.type == 'click' || item.type == 'location'">
					<itemClickLocation ref="itemClickLocation" :data="bindIsEdit(item)" @inputEvent="changeEvent"
						@clickEvent="clickEvent">
					</itemClickLocation>
				</block>
				<!-- 【 radio 】 -->
				<block v-else-if="item.type == 'radio'">
					<itemRadio ref="itemRadio" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemRadio>
				</block>
				<!-- 【 附件上传 】 -->
				<block v-else-if="item.type == 'file'">
					<itemFile ref="itemFile" :data="bindIsEdit(item)" @inputEvent="changeEvent"></itemFile>
				</block>
				<!-- 【 code 】 -->
				<block v-else-if="item.type == 'code'">
					<itemCode ref="itemCode" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemCode>
				</block>
				<!-- 【 list 】 -->
				<block v-else-if="item.type == 'list'">
					<itemList ref="itemList" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemList>
				</block>
				<!-- 【 multiChoose 】 -->
				<block v-else-if="item.type == 'multiChoose'">
					<itemMultiChoose ref="itemMultiChoose" :data="bindIsEdit(item)" @inputEvent="changeEvent">
					</itemMultiChoose>
				</block>
				<!-- divide -->
				<block v-else-if="item.type == 'divide'">
					<view class="mtForm-formDivide"></view>
				</block>
				<!-- title -->
				<block v-else-if="item.type == 'title'">
					<view class="mtForm-formTitle" :style="{
						fontSize: (item.fontSize || 34) + 'rpx',
						color: item.color || '#333',
						background: item.background || '#F5F7FA',
						textAlign: item.align || 'center'
					}">{{item.text}}</view>
				</block>
				<view v-else>暂无此类</view>
			</view>
		</block>
	</view>
</template>

<script>
	import main from "./main.js"

	export default {
		name: "mt-form",
		mixins: [main],
		methods: {
			deleteItem(item, index) {
				delete this.showForm.field[item.value];
				this.showForm.property.splice(index, 1);
				this.$emit("config", this.showForm);
			},
			changeEvent(item) {
				this.inputForm = Object.assign(this.inputForm, item);
				this.$emit("change", this.inputForm);
			},
			// 单独项的方法
			// ID
			toCamera(item) {
				this.$emit("toCamera", item);
			},
			clickEvent(item) {
				this.$emit("clickEvent", item);
			},
			// 多级联动面板模式，搜索事件
			customSearch(value) {
				this.$emit("customSearch", value);
			},
		}
	};
</script>
