# mt-button 参数
| 参数     | 默认值  | 类型            | 说明              | 可选值          |是否必要 |
| -------- | ------- | --------------- | ----------------- | --------------- |--------------- |
| name     | default | String          | 按钮类型          | default，hollow | false|
| disabled | false   | Boolean，String | 是否禁用          | -               | false|
| loading  | false   | Boolean，String | 是否显示loading图标 | -               | false|
| config   | {}      | Object          | 自定义参数        | -                | false|


### config说明
| 参数     | 默认值                          | 类型    | 说明                                              | 可选值 |
| -------- | ------------------------------- | ------- | ------------------------------------------------- | ------ |
| radius   | 8rpx                            | String  | 按钮圆角                                          | -      |
| height   | 84rpx                           | String  | 按钮高度                                          | -      |
| color    | #2194F2                         | String  | default：按钮背景颜色，hollow：按钮字体和边框颜色 | -      |
| fontsize | 30rpx                           | String  | 字体大小                                          | -      |
| shadow   | 0px 3px 8px 0px rgba(0,0,0,0.1) | String  | 按钮阴影                                          | -      |
| noBorder | false                           | Boolean | hollow：是否不显示边框                                                  | -      |



# Slots
| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | 按钮内容     |


# Events
| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | 点击按钮时触发 | -         |



# 示例
```
	<mt-button>测试</mt-button>
	<mt-button name="hollow">测试1</mt-button>
```