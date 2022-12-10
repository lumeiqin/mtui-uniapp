import FormUtils from "./form.js";
var utils = new FormUtils();

export default {
	props: {
		title: {
			type: String,
			default: "请选择"
		},
		valueShow: {
			type: String,
			default: ""
		},
		search: {
			type: Boolean,
			default: false
		},
		column: {
			type: Number,
			default: 2
		},
		defaultPicker: {
			type: Array,
			default () {
				return [0, 0, 0, 0, 0];
			}
		},
		showValueDefault: {
			type: Object,
			default () {
				return {
					key: "id",
					value: "value"
				};
			}
		},
		options: {
			type: [Array, Object],
			default () {
				return [];
			}
		}
	},
	data() {
		return {
			formUtils: utils,
			showValue: {},
			chooseList: [],
			pickerValue: [0, 0, 0, 0, 0],
			valueShowPage: [],
			empty: []
		};
	},
	watch: {
		showValueDefault(newValue, oldValue) {
			this.showValue = newValue
		},
		options(newValue, oldValue) {
			this.chooseList = newValue;
			this.showBottom = false;
		},
		defaultPicker(newValue, oldValue) {
			this.pickerValue = newValue
		},
		valueShow(newValue, oldValue) {
			this.valueShowPage = newValue
			this.initPage()
		}
	},
	created() {
		this.showValue = this.showValueDefault;
		this.chooseList = this.options;
		this.pickerValue = this.defaultPicker;
		this.valueShowPage = this.valueShow;
		this.empty = [{
			children: [],
			[this.showValue.key]: "",
			[this.showValue.value]: ""
		}]
	},
	methods: {
		open() {
			this.$refs.SelectBox.open()
		},
		close() {
			this.$refs.SelectBox.close()
			this.showBottom = false; // list
		},
		_onCancel(e) {
			this.$emit("cancel", e);
			this.close();
		},
		// list + choose
		resetData() {
			this.selectedId = [];
			this.selectedText = [];
			this.allSelected = [];
		},
		_listSubmit() {
			this.$emit(
				"submit", {
					[this.showValue.key]: this.selectedId.join(","),
					[this.showValue.value]: this.selectedText.join(","),
					allSelected: this.allSelected
				}
			);
			this.close();
		},
		_listCancel(e) {
			this.resetData();
			this.$emit("cancel", e);
			this.close();
		}
	}

}
