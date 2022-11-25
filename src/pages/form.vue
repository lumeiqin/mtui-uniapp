<template>
	<view>
		<mt-navbar title="Form" emit="true" :config="pagenav" @backClick="backClick"></mt-navbar>
		<view class="comp">
			<ry-title title="value: text">
				<view style="padding: 0 15px 20px 15px; background:#fff">
					<mt-form :formData="textFormData" ref="mtForm" @change="changeForm"></mt-form>
					<br>
					<mt-button @click="formValid">校验表单</mt-button>
				</view>
			</ry-title>

			<ry-title title="value: password">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="passFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: number">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="numberFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: tel">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="telFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: ID">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="IDFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: textarea">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="textareaFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: click">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="clickFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: location">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="locationFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: code">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="codeFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: radio">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="radioFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: selector">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="selectorFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: multiSelector">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="multiSelectorFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: multiCustom">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="multiCustomFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: multiChoose">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="multiChooseFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: list">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="listFormData"></mt-form>
				</view>
			</ry-title>

			<ry-title title="value: date">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="dateFormData"></mt-form>
				</view>
			</ry-title>
			<ry-title title="value: file">
				<view style="padding: 0 15px; background:#fff">
					<mt-form :formData="fileFormData"></mt-form>
				</view>
			</ry-title>
		</view>
	</view>
</template>

<script>
	import common from "../common/common.js";
	export default {
		mixins: [common],
		data() {
			return {

				textFormData: {
					field: {
						text: "",
					},
					property: [{
						type: "text",
						text: "文本",
						value: "text",
						countText: true,
						maxlength: 6,
						validate: true
					}]
				},
				passFormData: {
					field: {
						pass: "",
					},
					property: [{
						type: "password",
						text: "密码",
						value: "pass",
						validate: true
					}]
				},
				numberFormData: {
					field: {
						number: "",
					},
					property: [{
						type: "number",
						text: "数值",
						value: "number",
						validate: true
					}]
				},
				telFormData: {
					field: {
						phone: "",
					},
					property: [{
						type: "tel",
						text: "电话号码",
						value: "phone",
						validate: true
					}]
				},
				IDFormData: {
					field: {
						card: "",
					},
					property: [{
						type: "ID",
						text: "身份证",
						value: "card",
						validate: true
					}]
				},
				textareaFormData: {
					field: {
						opnion: "",
						opnion1: "",
					},
					property: [{
						type: "textarea",
						text: "文本框",
						value: "opnion",
						validate: true
					}, {
						type: "textarea",
						text: "文本框-col",
						styleType: 'col',
						only: true,
						value: "opnion1",
						maxlength: 300,
						countText: true,
						validate: true
					}, ]
				},
				clickFormData: {
					field: {
						click: "",
					},
					property: [{
						type: "click",
						text: "点击",
						value: "click",
					}]
				},
				locationFormData: {
					field: {
						location: "",
					},
					property: [{
						type: "location",
						text: "地址",
						value: "location",
						validate: true
					}]
				},
				codeFormData: {
					field: {
						code: "",
					},
					property: [{
						type: "code",
						text: "验证码",
						value: "code",
						phone: "phone",
						phoneNum: "",
						second: 20,
						validate: true
					}]
				},
				radioFormData: {
					field: {
						radio: "",
					},
					property: [{
						type: "radio",
						getKey: "value",
						showValue: {
							value: "title"
						},
						color: "#2194F2",
						text: "是否必填",
						value: "radio",
						options: [{
							id: '0',
							title: '是',
						}, {
							id: '1',
							title: '否',
						}],
						validate: true
					}, ]
				},
				selectorFormData: {
					field: {
						selector: "",
					},
					property: [{
						type: "selector",
						showValue: {
							value: "title",
							key: "id"
						},
						dictionary: "sys_common_nation",
						text: "单选框",
						value: "selector",
						defaultPicker: [0]
					}, ]
				},
				multiSelectorFormData: {
					field: {
						multiSelector: "",
					},
					property: [{
						getKey: "key",
						showValue: {
							value: "value",
							key: "key"
						},
						defaultPicker: [0, 0, 0, 0, 0],
						column: 3,
						dictionary: "multiArr",
						text: "多级联动",
						type: "multiSelector",
						value: "multiSelector",
						validate: true
					}]
				},
				multiCustomFormData: {
					field: {
						text: "",
					},
					property: [{
						getKey: "key",
						showValue: {
							value: "name",
							key: "id"
						},
						dictionary: "customArr",
						text: "多级联动面板",
						type: "multiCustom",
						value: "multiCustom",
						validate: true
					}]
				},
				multiChooseFormData: {
					field: {
						multiChoose: "",
					},
					property: [{
						getKey: "value",
						type: "multiChoose",
						text: "多选",
						value: "multiChoose",
						dictionary: "chooseArr"
					}]
				},
				listFormData: {
					field: {
						text: "",
					},
					property: [{
						type: "list",
						dictionary: "listArr",
						text: "列表选择",
						value: "list"
					}]
				},
				dateFormData: {
					field: {
						date: "",
					},
					property: [{
						type: "date",
						field: "minute",
						start: "2010/10/17 05:30",
						end: "2030/07/15 09:10",
						text: "时间",
						value: "date"
					}]
				},
				fileFormData: {
					field: {
						file: ["https://img.alicdn.com/bao/uploaded/i1/132953973/O1CN019EJExH1fDgALQaLt7_!!0-item_pic.jpg_200x200q90.jpg",
							"https://img.alicdn.com/bao/uploaded/i4/877198864/O1CN01W1apDl2FLlRM3PpzV_!!0-item_pic.jpg_200x200q90.jpg",
							"https://klxxcdn.oss-cn-hangzhou.aliyuncs.com/histudy/hrm/media/bg3.mp4"
						],
					},
					property: [{
						type: "file",
						text: "附件上传",
						videoQuality: "medium",
						picQuality: 50,
						compress: true,
						value: "file",
						maxlength: 6,
						validate: true,
						tips: "支持上传图片、视频，附件总数不可超过6个，单个附件大小不得超过 100M",
						fileType: ['pic', 'video', 'audio'],
						valueShow: []
					}]
				},
			}
		},
		methods: {
			formValid() {
				if (this.$refs.mtForm.validate()) {
					console.log("表单校验成功")
				} else {
					console.log("表单校验失败")
				}
			},
			changeForm(obj) {
				console.log(obj)
			},
		}
	}
</script>
