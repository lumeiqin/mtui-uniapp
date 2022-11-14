# mt-tabs 参数
| 参数        | 默认值                      | 类型   | 说明                                                          | 可选值          | 是否必填 |
| ----------- | --------------------------- | ------ | ------------------------------------------------------------- | --------------- | -------- |
| type        | scroll                      | String | tab类型                                                       | scroll，default | false    |
| activeIndex | 0                           | Number | 当前选中的tab                                                 | -               | false    |
| showValue   | {value: "title", key: "id"} | Object | 当tabData数组的每项为string，即通过此参数将字符串转换成object | -               | false    |
| config      | {}                          | Object | 自定义参数                                                    | -               | false    |
| tabData     | [{id: 0,title: "未审核",},{id: 1,title: "审核通过"}]    |   Array    |  tab数据      | -         |   true       |



### config说明
| 参数           | 默认值            | 类型    | 说明              | 可选值 |
| -------------- | ----------------- | ------- | ----------------- | ------ |
| border         | 1px solid #e4e4e4 | String  | tab的下边框       | -      |
| color          | #333              | String  | tab未选中字体颜色 | -      |
| selectedColor  | #2194F2           | String  | tab已选中字体颜色 |        |
| fontsize       | 15px              | String  | 未选中字体大小    | -      |
| selectedSize   | 15px              | String  | 已选中字体大小    | -      |
| underline      | true              | Boolean | 是否显示下划线    | -      |
| selectedWeight | 600               | Number  | 已选中字体粗细    | -      |
| bg     | #fff              | String  | tab背景色         | -      |
| height         | 45px              | String  | tab的高度         | -       |



# Events
| 事件     | 说明        | 回调参数 |
| -------- | ----------- | -------- |
| tabClick | 点击tab触发 | item：当前tab相关，index：当前tab的索引        |


# 示例
```
	<mt-tabs :tabData="tabData"></mt-tabs>
	
	tabData: [{
		id: 0,
		title: "生产监控"
	}, {
		id: 1,
		title: "装置负荷"
	}, {
		id: 2,
		title: "库存分析"
	}, {
		id: 3,
		title: "发货分析"
	}, {
		id: 4,
		title: "原材料"
	}, {
		id: 5,
		title: "生产计划"
	}]
```