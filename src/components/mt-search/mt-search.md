# mt-search 参数
| 参数     | 默认值 | 类型            | 说明       | 可选值 | 是否必要
| -------- | ------ | --------------- | ---------- | ------ | ----------- |
| value    | -      | String          | 搜索框内容 | -      | false       |
| disabled | false  | Boolean，String | 禁用搜索框 | -      | false       |
| config   | {}     | Object          | 自定义参数 | -      | false       |



### config说明
| 参数             | 默认值            | 类型    | 说明                     | 可选值 |
| ---------------- | ----------------- | ------- | ------------------------ | ------ |
| padding          | 16rpx 30rpx       | String  | 搜索框外框的padding      | -      |
| height           | 64rpx             | String  | 搜索框的高度             | -      |
| radius           | 32rpx             | String  | 搜索框的圆角             | -      |
| placeholder      | 请输入关键字      | String  | 搜索框的占位符           | -      |
| color            | #4C4D4D           | String  | 搜索框的value颜色        | -      |
| placeholderColor | #B1B1B1           | String  | 搜索框的占位符颜色       | -      |
| fontsize         | 28rpx             | String  | 搜索框的value字体大小    | -      |
| background       | #F6F6F6           | String  | 搜索框的背景             | -      |
| iconColor        | #B1B1B1           | String  | icon颜色                 | -      |
| iconSize         | 36rpx             | String  | icon大小                 | -      |
| showClear        | true              | Boolean | 是否显示清除icon         | -      |
| border           | 1px solid #F4F5F8 | String  | 搜索框外框的borderBottom | -       |



# Slots
| 插槽名 | 默认值 | 说明       |
| ------ | ------ | ---------- |
| left   | -      | 搜索框左侧 |
| right  | -      | 搜索框右侧 |


# Events
| 事件       | 说明                           | 回调参数 |
| ---------- | ------------------------------ | -------- |
| focusEvent | 获取焦点时触发                 | value    |
| blurEvent  | 失去焦点时触发                 | value    |
| inputEvent | 输入时触发，点击清除按钮时触发 | value         |


# 示例
```
	<mt-search></mt-search>
```