import FormUtils from "./form.js";

var utils = new FormUtils();

export default {
    props: {
        data: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            formUtils: utils,
            showItem: {},
            valueShowInput: ""
        };
    },
    watch: {
        data: {
            handler(newvalue, oldvalue) {
                this.showItem = newvalue;
                this.valueShowInput = newvalue.valueShow;
            },
            deep: true,
            immediate: true,
        }
    },
    computed: {
        maxlength() {
            if (this.showItem.type === 'tel') {
                return 11;
            }
            if (this.showItem.type === 'textarea') {
                return this.formUtils._isEmpty(this.data.maxlength) ? 500 : Number(this.data.maxlength);
            }
            return this.formUtils._isEmpty(this.data.maxlength) ? -1 : Number(this.data.maxlength);
        },
        judgeStatus() {
            return this.showItem.disabled || !this.showItem.isEdit;
        },
        inputPlaceholder() {
            if (!this.showItem.isEdit) return "";
            return this.formUtils._isEmpty(this.showItem.placeholder) ? '请输入' : this.showItem.placeholder
        },
        pickPlaceholder() {
            if (!this.showItem.isEdit) return "";
            return this.formUtils._isEmpty(this.showItem.placeholder) ? '请选择' : this.showItem.placeholder
        },
        showCount() {
            return Number(this.showItem.maxlength) > 0 && this.showItem.countText
        },
        textAlign() {
            return {
                'text-align': this.showItem.isEdit ? 'left' : 'right'
            }
        },
        defaultSelect() {
            if (this.formUtils._isEmpty(this.showItem.defaultPicker)) {
                switch (this.showItem.type) {
                    case "selector":
                        return [0]
                        break;
                    case "multiSelector":
                        return [0, 0, 0, 0, 0]
                        break;
                }
            }
            return this.showItem.defaultPicker;
        }
    },
    created() {
        this.showItem = this.data;
        this.valueShowInput = this.data.valueShow;
    },
    methods: {
        openBox(name) {
            if (this.judgeStatus) return;
            this.$refs[name].open();
        },
        validItem() {
            let checkedItems = this.formUtils.validItem(this, this.showItem);
            return checkedItems.check && checkedItems.value;
        },
        changeEvent(value) {
            this.$set(this.showItem, "valueShow", value)
            this.valueShowInput = this.showItem.valueShow;

            let checkedItems = this.formUtils.validItem(this, this.showItem);
            this.$emit("inputEvent", {
                [checkedItems.value]: checkedItems.check ? "" : checkedItems.valueShow
            });
        },
    }

}
