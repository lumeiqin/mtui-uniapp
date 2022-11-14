# mt-box 参数
| 参数   | 默认值 | 类型            | 说明             | 可选值 | 是否必要 |
| ------ | ------ | --------------- | ---------------- | ------ |------ |
| flip   | false  | Boolean, String | 是否翻转         | -      | false |
| center | false  | Boolean, String | 内容是否居中     | -      |false |
| border | false  | Boolean, String | 是否显示上下边框 | -      |false |
| config | {}     | Object          | 自定义参数       | -       |false |


### config说明
| 参数     | 默认值 | 类型   | 说明          | 可选值 |
| -------- | ------ | ------ | ------------- | ------ |
| radius   | 10rpx  | String | 盒子的圆角    | -      |
| padding  | 30rpx  | String | 盒子的padding | -      |
| bg       | #fff   | String | 盒子的背景色  | -      |
| fontsize | 30rpx  | String | 字体大小      | -      |
| color    | #333   | String | 字体颜色      |        |


# Slots
| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 盒子内容     |



# 示例
```
	<mt-box border="true" center="true">
		金城留旬浃，兀兀醉歌舞。
	</mt-box>
```