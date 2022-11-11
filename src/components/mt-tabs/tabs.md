## tabs参数
| 参数        | 默认值                      | 类型   | 说明                                                          | 可选值 |
| ----------- | --------------------------- | ------ | ------------------------------------------------------------- | ------ |
| tabData     | -                           | Array  | tab数据                                                       | -      |
| activeIndex | 0                           | Number | 当前选中的tab                                                 | -      |
| showValue   | {value: "title", key: "id"} | Object | 当tabData数组的每项为string，即通过此参数将字符串转换成object | -      |
| config      | -                           | Object | 自定义参数                                                    | -      |



#### config说明
| 参数           | 默认值            | 类型    | 说明              | 可选值 |
| -------------- | ----------------- | ------- | ----------------- | ------ |
| border         | 1px solid #e4e4e4 | String  | tab的下边框       | -      |
| color          | #333              | String  | tab未选中字体颜色 | -      |
| selectedColor  | #0762ed           | String  | tab已选中字体颜色 |        |
| fontSize       | 15px              | String  | 未选中字体大小    | -      |
| selectedSize   | 15px              | String  | 已选中字体大小    | -      |
| underline      | true              | Boolean | 是否显示下划线    | -      |
| selectedWeight | 600               | Number  | 已选中字体粗细    | -      |
| background     | #fff              | String  | tab背景色         | -      |
| height         | 45px              | String  | tab的高度         | -       |

