# mt-grid 参数
| 参数   | 默认值  | 类型   | 说明         | 可选值         |是否必要 |
| ------ | ------- | ------ | ------------ | -------------- | -------------- |
| name   | default | String | 九宫格的类型 | title，default | false |
| col    | 4       | String，Number | 一行的数量   | 2，3，4，5     |false |
| data   | -       | Array  | 九宫格数据   | -              |true |
| config | {}      | Object | 自定义参数             |     -           |false |



### config说明
| 参数     | 默认值      | 类型   | 说明          | 可选值 |
| -------- | ----------- | ------ | ------------- | ------ |
| iconSize  | -           | String | icon的大小    | -       |
| iconPadding  | 0 0 14rpx 0 | String | icon的padding | -      |
| color    | #424242     | String | 字体颜色      | -      |
| fontsize | 24rpx       | String | 字体大小      | -      |



### data说明
| 参数     | 默认值                                                                              | 类型   | 说明                               | 可选值 |
| -------- | ----------------------------------------------------------------------------------- | ------ | ---------------------------------- | ------ |
| icon     | ![icon_tabbar_3x.png](https://m.firstui.cn/static/images/common/icon_tabbar_3x.png) | String | 图标                               | -      |
| menuName | 测试模块                                                                            | String | 标题                               | -      |
| type | -      | String | 模块类型，当type=diy，触发click事件；当type='', 直接跳转url，不触发事件         | diy，''    |
| url      | -                                                                                   | String | 模块地址                           | -      |
| children | []                                                                                  | Array  | name=title：模块数组，参数参考data | -       |



# Slots
| 插槽名 | 默认值 | 说明 |
| ------ | ------ | ---- |
| -      | -      | name=title && children为空：内容     |


# Events
| 事件  | 说明           | 回调参数 |
| ----- | -------------- | -------- |
| click | type=diy：点击模块时触发 | -         |


# 示例
```
		<mt-grid></mt-grid>
		<mt-grid :col="2"></mt-grid>
		<mt-grid :col="3"></mt-grid>
		
		
		<mt-grid name="title" :col="2" :data="[{
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: "https://www.baidu.com"
      }, {
        icon: "https://m.firstui.cn/static/images/common/icon_tabbar_3x.png",
        menuName: "测试模块",
        url: ""
      }]"></mt-grid>
```