# mt-modal 参数
| 参数        | 默认值         | 类型            | 说明                                | 可选值 | 是否必填
| ----------- | -------------- | --------------- | ----------------------------------- | ------ | ---------- |
| title       | 标题           | String          | 提示的标题                          | -      | true       |
| content     | 这里是正文内容 | String          | 提示的内容                          | -      | true       |
| cancelText  | 取消           | String          | 取消按钮的文字                      | -      | false      |
| confirmText | 确定           | String          | 确定按钮的文字                      | -      | false      |
| showCancel  | false          | Boolean，String | 是否显示取消按钮                    | -      | false      |
| diyEvent    | false          | Boolean         | 点击确定按钮只调用自定义confirm方法 | -      | false           |
| config   | {}      | Object          | 自定义参数        | -                | false|


### config说明
| 参数         | 默认值  | 类型   | 说明                              | 可选值 |
| ------------ | ------- | ------ | --------------------------------- | ------ |
| confirmColor | #2194F2 | String | 确定按钮的文字颜色                | -      |
| cancelColor  | #333333 | String | 取消按钮的文字颜色                | -      |
| align        | left    | String | 提示的内容文字位置，参考textAlign | -      |
			
			
			
# Slots
| 插槽名  | 默认值 | 说明           |
| ------- | ------ | -------------- |
| title   | 标题   | 模态框头部     |
| content | 内容   | 模态框主要内容 |
|  footer       |   按钮     |   模态框底部             |
		
		
		
# Events
| 事件    | 说明               | 回调参数 |
| ------- | ------------------ | -------- |
| confirm | 点击确认按钮时触发 | -        |
| cancel  | 点击取消按钮时触发 | -         |


# 示例
```
	<mt-modal ref="popup"></mt-modal>
	<mt-button @click="openModal">显示modal</mt-button>
	
	openModal() {
		this.$refs.popup.open()
	}
```