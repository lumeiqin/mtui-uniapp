# mt-form 参数

| 参数          | 默认值                                             | 类型                       | 说明                                                                                                                                                                | 可选值                                                                                                                                       | 是否必填 |
| ------------- | -------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| type          | text                                               | String                     | 表单类型                                                                                                                                                            | text，ID，tel，number，password，click，location，code，textarea，radio，selector，multiSelector，multiCustom，multiChoose，list，date，file | true     |
| text          | -                                                  | String                     | 输入框左侧文本                                                                                                                                                      | -                                                                                                                                            | true     |
| value         | -                                                  | String                     | 在表单内提交时的标识符name                                                                                                                                          | -                                                                                                                                            | true     |
| secondValue   | -                                                  | String                     | 在表单内提交时的标识符name，用于多答案的选择器（id或name）                                                                                                          | -                                                                                                                                            | false    |
| icon          | -                                                  | String                     | 自定义输入框头部图标                                                                                                                                                | -                                                                                                                                            | false    |
| valueShow     | -                                                  | String                     | 输入框内容显示                                                                                                                                                      | -                                                                                                                                            | false    |
| placeholder   | 请输入 / 请选择                                    | String                     | 输入框为空时占位符                                                                                                                                                  | -                                                                                                                                            | false    |
| validate      | false                                              | Boolean                    | 是否必填                                                                                                                                                            | -                                                                                                                                            | false    |
| only          | false                                              | Boolean                    | 是否显示表单必填星号                                                                                                                                                | -                                                                                                                                            | false    |
| hide          | false                                              | Boolean                    | 是否在表单中隐藏                                                                                                                                                    | -                                                                                                                                            | false    |
| disabled      | false                                              | Boolean                    | 是否禁用输入框                                                                                                                                                      | -                                                                                                                                            | false    |
| styleType     | row                                                | String                     | 输入框样式                                                                                                                                                          | row，col                                                                                                                                     | false    |
| detailshow    | false                                              | Boolean                    | value值 详情显示是否置灰                                                                                                                                            | -                                                                                                                                            | false    |
| maxlength     | textarea: 500，tel: 11，其他: -1                   | Number                     | 最大输入长度，只用于 输入框 和 附件（上传附件个数）                                                                                                                 | -                                                                                                                                            | false    |
| countText     | false                                              | Boolean                    | 监听输入长度，只用于 输入框 ，需要和maxlength搭配使用                                                                                                               | -                                                                                                                                            | false    |
| dictionary    | -                                                  | String                     | 对应字典名                                                                                                                                                          | -                                                                                                                                            | false    |
| options       | -                                                  | Array <br> Array＜Object＞ | 选择器选项，只用于 非date的选择器                                                                                                                                   | -                                                                                                                                            | false    |
| getKey        | key                                                | String                     | 通过 getKey 来指定 Object 中 key 的值作为提交至后台的参数名字，只用于 非 date 的选择器                                                                              | -                                                                                                                                            | false    |
| showValue     | { key: "id", value: "value", brief: "brief" }      | Object                     | 通过 showValue.value，showValue.key 来指定 Object 中 value 的值作为选择器显示内容，key的值作为提交至后台的参数名字，只用于 非date 的选择器; brief 只用于 type='list' | -                                                                                                                                            | false    |
| color         | #3490fc                                            | String                     | radio 选择框颜色                                                                                                                                                    | -                                                                                                                                            | false    |
| defaultPicker | selector: [0]，multiSelector: [0,0,0,0,0]          | Array                      | 初始显示值，只用于 type="selector" / type="multiSelector"                                                                                                           | -                                                                                                                                            | false    |
| search        | false                                              | Boolean                    | 是否显示搜索框，只用于 type="multiCustom"                                                                                                                           | -                                                                                                                                            | false    |
| second        | 60                                                 | Number                     | 验证码冷却时间，只用于 type="code"                                                                                                                                  | -                                                                                                                                            | false    |
| phone         | -                                                  | String                     | 表单中发送验证码的手机 name，只用于 type="code"                                                                                                                     | -                                                                                                                                            | false    |
| phoneNum      | -                                                  | tel                        | 表单中发送验证码的手机号，只用于 type="code"                                                                                                                        | -                                                                                                                                            | false    |
| column        | 2                                                  | Number                     | 表示选择器的粒度，只用于 type="multiSelector"                                                                                                                       | 2，3，4，5                                                                                                                                   | false    |
| start         | 1970-01-01 00:00:00                                | String                     | 表示有效日期范围的开始，字符串格式为"YYYY-MM-DD hh:mm:ss"，只用于 type="date"                                                                                       | -                                                                                                                                            | false    |
| end           | 2099-12-31 23:59:59                                | String                     | 表示有效日期范围的结束，字符串格式为"YYYY-MM-DD hh:mm:ss"，只用于 type="date"                                                                                       | -                                                                                                                                            | false    |
| field         | second                                             | String                     | 表示选择器的粒度，只用于 type="date"                                                                                                                                | year，month，day，hour，minute，second                                                                                                       | false    |
| tips          | 支持上传图片、视频，附件, 单个附件大小不得超过100M | String                     | 附件上传提示语                                                                                                                                                      | -                                                                                                                                            | false    |
| fileType      | ['pic', 'video', 'audio']                          | Array                      | 附件上传的类型                                                                                                                                                      | -                                                                                                                                            | false    |
| compress      | false                                              | Boolean                    | 是否压缩上传附件                                                                                                                                                    | -                                                                                                                                            | false    |
| picQuality    | 40                                                 | Number                     | 图片压缩质量                                                                                                                                                        | -                                                                                                                                            | false    |
| videoQuality  | high                                               | String                     | 视频压缩质量                                                                                                                                                        | -                                                                                                                                            | false         |




# Slots
| 插槽名    | 默认值 | 说明                                                             |
| --------- | ------ | ---------------------------------------------------------------- |
| searchBox | -      | 当search为true时，用于自定义搜索结果内容，只用于type=multiCustom |



# Events
| 事件       | 说明                                          | 回调参数         |
| ---------- | --------------------------------------------- | ---------------- |
| toCamera   | type="ID"：点击扫描icon时触发                 | item: 当前对象   |
| clickEvent | type="click"：点击输入框时触发                | item: 当前对象   |
| toFillCode | type="tel"：在 Input 值改变时触发(非开发使用) | value, valueShow |
| change     | 在表单中有参数变动时触发                      | field            |
| inputEvent | 在 Input 值改变时触发                         |    {[item.value]: item.valueShow}              |
		
		
			
### showValue 说明
| key   | 默认值 | 说明                 |
| ----- | ------ | -------------------- |
| key   | id     | 提交至后台的参数名字 |
| value | value  | 表单项上的回显标题   |
| brief | brief  | 表单项上的回显详情   |
		

### type 说明
| name          | 说明                                       |
| ------------- | ------------------------------------------ |
| text          | 普通文本输入框                             |
| ID            | 带身份证号规则校验的数值型输入框           |
| tel           | 带电话号码规则校验的数值型输入框           |
| number        | 数值型输入框                               |
| password      | 密码输入框                                 |
| click         | 提供点击事件的表单项                       |
| location      | 地图定位选择器                             |
| code          | 验证码输入框                               |
| textarea      | 文本区域输入框(字符长度大于普通文本输入框) |
| radio         | 单项选择器                                 |
| selector      | 单列选择器                                 |
| multiSelector | 多列选择器                                 |
| multiCustom   | 多列选择器-面板模式                        |
| multiChoose   | 多选选择器                                 |
| list          | 单选列表                                   |
| date          | 年月日时分秒选择器                         |
| file          | 附件上传                                   |


# 示例
```
<mt-form></mt-form>
```