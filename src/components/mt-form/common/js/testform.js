const textForm = {
	field: {
		files2: "",
		files1: [
			"https://img.alicdn.com/bao/uploaded/i1/132953973/O1CN019EJExH1fDgALQaLt7_!!0-item_pic.jpg_200x200q90.jpg",
			"https://img.alicdn.com/bao/uploaded/i4/877198864/O1CN01W1apDl2FLlRM3PpzV_!!0-item_pic.jpg_200x200q90.jpg",
			"https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4"
		],
		write1: "0",
		valid: "否",
		maritalStatus: "22",
		political: "05",
		occupationType: "农、林、牧、渔、水利业生产人员",
		nation: "13",
		domicile: "value1-value2",
		domicile2: "value3-value4",
		domicile3: "value1-value2-value5",
		custom: "防邪禁毒-防邪-防邪禁毒11-00011",
		more1: "0,1",
		more: "第一个哦,第四个哦,第五个哦",
		chose1: "0",
		chose2: "第四个哦",
		birth: "1996-10-17",
		birth1: "",
		code: "1213",
		opnion1: "意见",
		opnion: "",
		name: "",
		address: '地址',
		name1: "姓名",
		nativePlace: "籍贯",
		card: "320",
		pass: "0000",
		occupation: "",
		phone: "15161535183"
	},
	property: [{
			text: "radio",
			type: "title"
		},
		{
			type: "radio",
			text: "是否填写",
			value: "write1",
			options: [{
				id: '0',
				value: '是',
			}, {
				id: '1',
				value: '否',
			}],
			validate: true
		}, {
			type: "radio",
			getKey: "value",
			showValue: {
				value: "title"
			},
			text: "是否必填",
			value: "valid",
			options: [{
				id: '0',
				title: '是',
			}, {
				id: '1',
				title: '否',
			}],
			validate: true
		}, {
			text: "selector",
			type: "title"
		}, {
			type: "selector",
			showValue: {
				value: "title",
				key: "id"
			},
			dictionary: "sys_common_marriage",
			text: "婚姻状况",
			value: "maritalStatus",
			defaultPicker: [0]
		},
		{
			type: "selector",
			dictionary: "sys_common_political",
			text: "政治面貌",
			value: "political"
		}, {
			getKey: "value",
			type: "selector",
			dictionary: "sys_common_occupation",
			text: "职业类别",
			value: "occupationType",
		}, {
			type: "selector",
			text: "民族",
			showValue: {
				key: "id"
			},
			value: "nation",
			dictionary: "sys_common_nation",
			validate: true
		}, {
			text: "multiSelector",
			type: "title"
		}, {
			type: "multiSelector",
			dictionary: "multiArr",
			text: "测试联动1",
			value: "domicile"
		}, {
			type: "multiSelector",
			text: "测试联动2",
			getKey: "value",
			showValue: {
				value: "value"
			},
			value: "domicile2",
			defaultPicker: [0, 0, 0, 0, 0],
			column: 2,
			dictionary: "multiArr",
			validate: true
		}, {
			getKey: "key",
			showValue: {
				value: "value",
				key: "key"
			},
			defaultPicker: [0, 0, 0, 0, 0],
			column: 3,
			options: [{
				key: 'key',
				value: 'value',
				id: 0,
				children: [{
					key: 'key1',
					value: 'value1',
					id: 1,
					children: [{
						key: 'key2',
						value: 'value2',
						id: 2,
						children: [{
							key: 'key5',
							value: 'value5',
							id: 5
						}]
					}]
				}, {
					key: 'key3',
					value: 'value3',
					id: 3,
					children: [{
						key: 'key4',
						value: 'value4',
						id: 2
					}]
				}]
			}],
			text: "测试联动3",
			type: "multiSelector",
			value: "domicile3",
			validate: true
		}, {
			text: "multiCustom",
			type: "title"
		}, {
			getKey: "key",
			showValue: {
				value: "name",
				key: "id"
			},
			dictionary: "customArr",
			text: "户籍",
			type: "multiCustom",
			value: "custom",
			validate: true
		}, {
			text: "multiChoose",
			type: "title"
		}, {
			getKey: "key",
			showValue: {
				value: "title"
			},
			options: [{
					id: 0,
					title: '第一个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 1,
					title: '第二个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 2,
					title: '第三个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 3,
					title: '第四个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 4,
					title: '第五个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				}
			],
			text: "多选1",
			type: "multiChoose",
			value: "more1",
			secondValue: "moreName",
			validate: true
		},
		{
			getKey: "value",
			type: "multiChoose",
			text: "多选",
			value: "more",
			dictionary: "chooseArr"
		}, {
			text: "list",
			type: "title"
		},
		{
			type: "list",
			dictionary: "listArr",
			text: "选择列表1",
			value: "chose1"
		}, {
			type: "list",
			getKey: "value",
			showValue: {
				value: "title"
			},
			text: "选择列表2",
			value: "chose2",
			secondValue: "choseName",
			options: [{
					id: 0,
					title: '第一个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 1,
					title: '第二个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 2,
					title: '第三个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 3,
					title: '第四个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				},
				{
					id: 4,
					title: '第五个哦',
					brief: '详情地址详情地址详情地址详情地址详情地址详情地址'
				}
			],
			validate: true
		}, {
			text: "date",
			type: "title"
		}, {
			type: "date",
			text: "出生日期",
			value: "birth",
			validate: true
		}, {
			type: "date",
			field: "hour",
			start: "2010/10/17 05:30",
			end: "2030/07/15 09:10",
			text: "出生日期",
			value: "birth1"
		}, {
			text: "code",
			type: "title"
		}, {
			type: "code",
			text: "验证码",
			value: "code",
			phone: "phone",
			phoneNum: "",
			second: 20,
			validate: true
		}, {
			text: "textarea",
			type: "title"
		}, {
			type: "textarea",
			text: "默认意见",
			value: "opnion1",
			validate: true
		}, {
			type: "textarea",
			text: "意见",
			styleType: 'col',
			only: true,
			value: "opnion",
			maxlength: 300,
			countText: true,
			validate: true
		}, {
			text: "click",
			type: "title"
		},
		{
			type: "click",
			text: "点击",
			value: "name",
		}, {
			text: "location",
			type: "title"
		}, {
			type: "location",
			text: "地址",
			value: "address",
			validate: true
		}, {
			text: "text",
			type: "title"
		}, {
			text: "姓名",
			value: "name1",
			countText: true,
			maxlength: 6
		}, {
			type: "text",
			text: "籍贯",
			value: "nativePlace",
			validate: true
		}, {
			text: "ID",
			type: "title"
		}, {
			type: "ID",
			text: "公民身份证",
			value: "card",
			validate: true
		}, {
			text: "password",
			type: "title"
		}, {
			type: "password",
			text: "密码",
			value: "pass",
			validate: true
		}, {
			text: "number",
			type: "title"
		}, {
			type: "number",
			text: "房号",
			value: "occupation",
			validate: true
		}, {
			text: "tel",
			type: "title"
		}, {
			type: "tel",
			text: "联系方式",
			value: "phone",
			validate: true
		}, {
			text: "file",
			type: "title"
		},
		{
			type: "file",
			text: "附件上传",
			value: "files1",
			validate: true
		}, {
			type: "file",
			text: "附件上传2",
			videoQuality: "medium",
			picQuality: 50,
			compress: true,
			value: "files2",
			maxlength: 6,
			validate: true,
			tips: "支持上传图片、视频，附件总数不可超过6个，单个附件大小不得超过 100M",
			fileType: ['pic', 'video', 'audio'],
			valueShow: [{
				type: 'pic',
				cover: "https://img1.baidu.com/it/u=994158170,3342000586&fm=26&fmt=auto"
			}, {
				type: 'pic',
				cover: "https://img1.baidu.com/it/u=994158170,3342000586&fm=26&fmt=auto"
			}, {
				type: 'video',
				cover: "../../../static/packages/shipin.png"
			}]
		},
	]
}


class Form {
	constructor() {
		this.defaultForm = {
			...textForm
		}
	}
}

export default Form
