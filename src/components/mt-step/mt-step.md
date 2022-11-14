# mt-box 参数
| 参数   | 默认值 | 类型            | 说明             | 可选值 | 是否必要 |
| ------ | ------ | --------------- | ---------------- | ------ |------ |
| time   | 2022-10-10  | String | 流程时间         | -      | true |



# 示例
```
<mt-step v-for="v in dutyRecordList" :time="v.createTime">
</mt-step>


dutyRecordList: [{
	organName: "电化厂",
	createTime: "值班时间：2022-10-01",
	name: "张三丰",
	tel: "15112345678",
	shortTel: "661911"
}, {
	organName: "电化厂",
	createTime: "值班时间：2022-10-01",
	name: "张三丰",
	tel: "15112345678",
	shortTel: "661911"
}]
```