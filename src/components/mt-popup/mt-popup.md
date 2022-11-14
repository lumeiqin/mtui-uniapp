# mt-tabs 参数
| 参数        | 默认值 | 类型            | 说明             | 可选值              | 是否必填 |
| ----------- | ------ | --------------- | ---------------- | ------------------- | -------- |
| show        | false  | Boolean，String | 模态框的显示隐藏 | -                   | false    |
| type        | bottom | String          | 模态框的位置     | top，center，bottom | false    |
| isMaskClick | true   | Boolean，String | 是否点击蒙版关闭模态框 | -                   | false         |


# 示例
```
<mt-popup ref="popup">
	<view style="width: 100%;height: 200px;background: #fff;">
		这是模态框
	</view>
</mt-popup>
<mt-button @click="openModal">显示模态框</mt-button>


openModal() {
	this.$refs.popup.open()
}
```