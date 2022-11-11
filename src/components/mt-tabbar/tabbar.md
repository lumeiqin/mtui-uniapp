## tabbar参数
| 参数          | 默认值  | 类型   | 说明            | 可选值 |
| ------------- | ------- | ------ | --------------- | ------ |
| bg            | #fff    | String | tabbar 背景色   | -      |
| height        | 64px    | String | tabbar 高度     | -      |
| color         | #333    | String | 未选中颜色      | -      |
| selectedColor | #0762ed | String | 已选中颜色      | -      |
| fontSize      | 12px    | String | 字体大小        | -      |
| data          | []      | Array  | tabbar data数据 | -      |


#### data说明
| 参数         | 默认值    | 类型   | 说明                                                   | 是否必填 | 可选值     |
| ------------ | --------- | ------ | ------------------------------------------------------ | -------- | ---------- |
| text         | 测试      | String | tab 按钮文字                                           | 是       | -          |
| path         | -         | String | 页面路径，必须在 pages 中先定义                        | 是       | -          |
| icontype     | -         | String | 字体图标，优先级高于 icon                              | 否       | -          |
| iconWidth    | 24 / 24px | String | 当选用icon时，为图标宽度；当选用icontype时，为图标尺寸 | 否       | -          |
| iconHeight   | 24px      | String | 选用icon时，为图标高度                                 | 否       | -          |
| spaceing     | 0         | String | 图标的margin                                           | 否       | -          |
| isactive     | 0         | Number | tab 是否选中                                           | 否       | -          |
| icon         | -         | String | 未选中图标地址                                         | 否       | -          |
| selectedIcon | -         | String | 已选中图标地址                                         | 否       | -          |

