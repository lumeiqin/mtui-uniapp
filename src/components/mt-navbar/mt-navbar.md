# mt-navbar 参数
| 参数  | 默认值  | 类型    | 说明             | 可选值 |是否必要|
| ----- | ------- | ------- | ---------------- | ------ | ------ |
| fixed | false   | Boolean，String | 是否固定在顶部   | -      | false        |
| emit  | false   | Boolean，String | 是否触发自定义方法   | -      | false        |
| title | -    | String  | 标题       | -      | false        |
| config   | {}      | Object          | 自定义参数        | -                | false|


### config说明
| 参数  | 默认值  | 类型    | 说明                | 可选值 |  
| ----- | ------- | ------- | ------------------- | ------ | 
| nobg  | false   | Boolean | 是否无背景          | -      |   
| bg    | #2194F2 | String  | 背景                | -      |  
| back  | true    | Boolean | 是否显示返回箭头    | -      |    
| color | #333    | String  | nobg=true：标题颜色 | -      |   



# Slots
| 插槽名 | 默认值                     | 说明         |
| ------ | -------------------------- | ------------ |
| left   | config.back=true：返回箭头 | navbar左侧   |
| middle | 标题                       | navbar标题区 |
| right  | -                          | navbar右侧             |


# Events
| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| backClick | emit=true：点击返回键时触发 | -         |


# 示例
```
	<mt-navbar title="通讯录"></mt-navbar>
```