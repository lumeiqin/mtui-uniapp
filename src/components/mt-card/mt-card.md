# mt-card 参数
| 参数            | 默认值                                                                | 类型            | 说明                                                                                                                                                                                                                                                                | 可选值                                      | 是否必填 |
| --------------- | --------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------- |
| direction       | row                                                                   | String          | 卡片方向                                                                                                                                                                                                                                                            | row，column                                 | false    |
| disabled        | false                                                                 | Boolean，String | 是否禁用                                                                                                                                                                                                                                                            | -                                           | false    |
| clickable       | false                                                                 | Boolean         | 是否可点击                                                                                                                                                                                                                                                          | -                                           | false    |
| link            | -                                                                     | Boolean，String | 页面跳转类型                                                                                                                                                                                                                                                        | navigateTo，redirectTo，reLaunch，switchTab | false|
| url             | -                                                                     | String          | 页面跳转路径                                                                                                                                                                                                                                                        | -                                           | false    |
| showArrow       | false                                                                 | Boolean，String | 是否显示箭头                                                                                                                                                                                                                                                        | -                                           | false    |
| showCheck       | false                                                                 | Boolean，String | 是否显示checkbox                                                                                                                                                                                                                                                    | -                                           | false    |
| checkItem       | { value: 'exval', checked: false }                                    | Object          | checkbox的配置参数： value：当前元素的标识，checked：是否选中                                                                                                                                                                                                       | -                                           | false    |
| thumb           | -                                                                     | String          | 左侧图片                                                                                                                                                                                                                                                            | -                                           | false    |
| thumbSize       | md                                                                    | String          | 左侧图片的尺寸                                                                                                                                                                                                                                                      | sm，md，lg                                  | false    |
| thumbType       | circle                                                                | String          | 左侧图片的形状                                                                                                                                                                                                                                                      | circle，square                              | false    |
| thumbTag        | -                                                                     | String          | 左侧图片的左上角图标                                                                                                                                                                                                                                                | -                                           | false    |
| thumbTagSM      | false                                                                 | Boolean         | 是否缩小左侧图片的左上角图标                                                                                                                                                                                                                                        | -                                           | false    |
| showExtraIcon   | false                                                                 | Boolean，String | 左侧图标，只有当thumb为空，才能使用此参数                                                                                                                                                                                                                           | -                                           | false    |
| extraIcon       | { type: 'contact', color: '#000000', size: 20 }                       | Object          | 左侧图标的配置参数：type：图标图案（参考示例），color：图标颜色，size：图标大小                                                                                                                                                                                     | -                                           | false    |
| title           | 标题                                                                  | String          | 标题                                                                                                                                                                                                                                                                | -                                           | true     |
| ellipsis        | 2                                                                     | Number，String          | 标题显示的行数                                                                                                                                                                                                                                                      | -                                           | false    |
| notes           | [{ icon: '', noteLabel: '创建时间', noteText: '2020-10-17 12:30:47'}] | Array           | 副标题的配置参数：icon：图标，noteLabel：冒号左侧标题，noteText：冒号右侧内容，ellipsis：多行省略    | -                                           | false    |
| tags            | [{ name: "测试tag", color: "#2194F2", size: "24rpx", lineHeight: "24rpx", border: "1px solid #2194F2", padding: "6rpx 16rpx", bg: "#fff", radius: "20rpx", scale: 0.9 }]         | Array           | 标签的配置参数：name：标签名字，color：标签字体颜色，size：标签字体大小，lineHeight：标签字体行高，border：标签边框，padding：标签的padding，bg：标签背景，radius：标签圆角，scale：标签缩放等级   | - | false |
| rightText       | -                                                                     | String          | 右侧文字 | -                                           | false    |
| showSwitch      | false                                                                 | Boolean，String | 右侧是否显示switch                                                                                                                                                                                                                                                  | -                                           | false    |
| switchChecked   | false                                                                 | Boolean，String | switch的选中状态                                                                                                                                                                                                                                                    | -                                           | false    |
| canSwitch       | false                                                                 | Boolean，String | switch是否禁用                                                                                                                                                                                                                                                      | -                                           | false    |
| showBadge       | false                                                                 | Boolean，String | 右侧是否显示标签                                                                                                                                                                                                                                                    | -                                           | false    |
| badgeText       | 1                                                                     | String          | 标签内容                                                                                                                                                                                                                                                            | -                                           | false    |
| showBottomBadge | false                                                                 | Boolean，String | 列表下侧是否显示标签                                                                                                                                                                                                                                                | -                                           | false    |
| bottomBadges    | [{ badgeLabel: '事项大类123', badgeText: '事项大类', valueKey: 'badgeLabel', color: "#f0ad4e", size: "24rpx", lineHeight: "24rpx", border: "1px solid #f0ad4e", padding: "6rpx 16rpx", bg: "transparent", radius: "20rpx" }]    | Array           | 下侧标签的配置参数：badgeLabel: 标签内容, badgeText：标签内容，valueKey：标签内容的参数名（badgeLabel或badgeText），color：标签字体颜色，size：标签字体大小，lineHeight：标签字体行高，border：标签边框，padding：标签的padding，bg：标签背景，radius：标签圆角    | - | false    |
| btnGroup        | [{ type: 'hollow', name: '删除', value: 'delete', color: '#2194F2', radius: '34px', height: '34px', fontsize: '14px', noBorder: false, shadow: '0px 3px 8px 0px rgba(0,0,0,0.1)' }]     | Array           | 下侧按钮的配置参数：name：按钮名字，value：按钮标识，noBorder：是否无边框（type=hollow，默认：false），type：按钮类型（默认：hollow），color：按钮颜色（默认：主题色），radius：按钮圆角角度（默认：34px），height：按钮高度（默认：34px），fontsize：按钮字体大小（默认：14px），shadow：按钮阴影（默认：'0px 3px 8px 0px rgba(0,0,0,0.1)'）| -                                           | false         |

			
			
# Slots
| 插槽名 | 默认值                  | 说明         |
| ------ | ----------------------- | ------------ |
| left   | checkbox，图片，uni图标 | 列表左侧内容 |
| middle | 标题，副标题，标签      | 列表主要内容 |
| right  | switch，文字，标签      | 列表右侧内容 |

		
		
# Events
| 事件         | 说明                 | 回调参数                    | 
| ------------ | -------------------- | --------------------------- | 
| click        | 列表点击时触发       | 普通点击：- ，link跳转：res | err |
| switchChange | switch值改变时触发   | value                       |
| checkChange    | checkbox值改变时触发 | value                       |
| btnEvent     | 按钮点击时触发       | { btn: item }                   |
		


# 示例
```
	<mt-card :notes="notes" :title="title"></mt-card>

	title: "江苏省无锡市滨湖区具区路与缘溪道交汇处融创茂内二楼",
	notes: [{
		noteLabel: '使用现状',
		noteText: '闲置',
		valueKey: 'noteText',
		icon: ""
	}, {
		noteLabel: '建筑名称',
		noteText: '市网格中心办公大楼',
		valueKey: 'noteText',
		icon: ""
	}, {
		noteLabel: '建筑地址',
		noteText: '江苏省无锡市梁溪区北大街道北创科技大厦',
		valueKey: 'noteText',
		icon: ""
	}]
```
		
		